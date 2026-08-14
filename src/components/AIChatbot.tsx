import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Minimize2, Maximize2, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const WELCOME =
  "Hi, I'm here to help with questions about the Community Data Center raise. Ask me about the budget, how the co-operative works, who it's for, or the risks involved.";

const suggestions = [
  'What does the £400,000 actually buy?',
  'How is this different from renting cloud GPUs?',
  'What are the risks?',
  'Who can join?',
];

const answer = (query: string): string => {
  const q = query.toLowerCase();

  if (q.includes('buy') || q.includes('budget') || q.includes('money') || q.includes('spend')) {
    return 'The £400,000 buys eight H100 GPUs (a standard server chassis) installed in an existing Scottish datacenter, plus networking, storage, a colocation deposit and first six months, software, insurance, legal and audit costs, campaign costs, and a working capital reserve. Full breakdown is in the "What it buys" section above. Funds release in four stages verified by an independent chartered accountant — nothing is called if we don\'t raise the full amount.';
  }
  if (q.includes('cloud') || q.includes('rent') || q.includes('different') || q.includes('aws') || q.includes('hyperscaler')) {
    return "Cloud pay-as-you-go means queuing behind bigger customers at a price the provider sets. Reserved cloud capacity means paying for every hour whether you use it or not — surveys of production clusters commonly report average utilisation in the single digits to low teens. A co-operative pools idle time across members instead, so the hardware stays busy and members share the cost, not because of cheaper electricity, but because nobody pays for emptiness.";
  }
  if (q.includes('risk') || q.includes('lose') || q.includes('safe') || q.includes('protect')) {
    return "This is a high-risk investment — you could lose all the money you invest, and community shares are not covered by the FSCS. Shares are £1 and can never be worth more, interest (around 3%) is discretionary and not guaranteed, and shares can't be sold. See the full risk information section on this page before considering an investment.";
  }
  if (q.includes('who') || q.includes('join') || q.includes('member') || q.includes('eligib')) {
    return 'University research groups, small businesses/studios/agencies, and individual researchers or developers are the main members we expect. Membership starts at £250 and gives one vote regardless of how much you hold. Residents of the host community get free membership.';
  }
  if (q.includes('vote') || q.includes('govern') || q.includes('control') || q.includes('own')) {
    return "AI Labz operates under a permanent asset lock — it cannot be acquired, floated, or sold, by constitution, not just by intention. Every member gets one vote, whether they hold £250 or £25,000.";
  }
  if (q.includes('when') || q.includes('timeline') || q.includes('live') || q.includes('deploy')) {
    return 'The GPUs go live roughly eight to twelve weeks after the raise closes and funds are released. Year 1 target is 8 GPUs live, 250+ members (around 10 holding capacity contracts), and utilisation above 60%.';
  }

  return "Good question — the fullest answer to that is on this page. Try asking about the budget, how the co-op model works, the risks, or who can join, or use the register interest form below and we'll follow up directly.";
};

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ id: '1', text: WELCOME, isBot: true, timestamp: new Date() }]);
    }
  }, [isOpen, messages.length]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMessage: Message = { id: Date.now().toString(), text, isBot: false, timestamp: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), text: answer(text), isBot: true, timestamp: new Date() },
      ]);
      setIsTyping(false);
    }, 700);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 transition-all duration-300 flex flex-col ${
        isMinimized ? 'h-16 w-80' : 'h-[28rem] w-80 md:w-96'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-900 text-white rounded-t-2xl">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-cyan-400" />
          <div>
            <h3 className="font-semibold text-sm">Raise questions</h3>
            {!isMinimized && <p className="text-xs text-slate-300">Community Data Center</p>}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => setIsMinimized(!isMinimized)} className="hover:bg-white/10 p-1 rounded transition-colors">
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </button>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
                <div
                  className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                    m.isBot ? 'bg-slate-100 text-slate-800' : 'bg-slate-900 text-white'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1 opacity-70 text-xs">
                    {m.isBot ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                    {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <p className="whitespace-pre-wrap">{m.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 text-slate-800 px-4 py-2 rounded-2xl flex gap-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && (
            <div className="px-4 py-2 border-t border-slate-100 flex flex-wrap gap-1.5">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-1 rounded-full transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="p-3 border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send(inputText)}
              placeholder="Ask about the raise..."
              className="flex-1 border border-slate-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              onClick={() => send(inputText)}
              disabled={!inputText.trim()}
              className="bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white p-2 rounded-full transition-colors"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AIChatbot;
