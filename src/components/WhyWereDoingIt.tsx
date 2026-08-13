import React from 'react';
import { Gauge, Users, Lock } from 'lucide-react';

const cards = [
  {
    icon: Gauge,
    title: 'The thing that’s actually broken',
    body: (
      <>
        If you're a university research group or a small company that needs GPU compute, you have two
        options today and both are bad. <strong>Pay-as-you-go</strong> means queueing behind larger
        customers and a price the provider sets this quarter. <strong>Reserved capacity</strong> means
        guaranteed access — and paying for every hour whether you use it or not. Average GPU utilisation
        across production clusters runs around <strong>5%</strong>. Neither option gives you any say in
        anything.
      </>
    ),
  },
  {
    icon: Users,
    title: 'Why a co-operative fixes it',
    body: (
      <>
        Because idle time can be shared. One research group's quiet fortnight is another group's training
        run. When members pool capacity, the machine stays busy — and the cost per useful hour falls, not
        because we found cheaper electricity, but because nobody is paying for emptiness. It isn't a
        cheaper hourly rate. It's higher utilisation of hardware that members own together.
      </>
    ),
  },
  {
    icon: Lock,
    title: 'And why ownership specifically',
    body: (
      <>
        Because every alternative is structured to be sold. Cloud providers answer to shareholders.
        Neoclouds answer to venture investors who need an exit. Our rules contain a{' '}
        <strong>permanent asset lock</strong> — AI Labz cannot be acquired, floated, or sold. Not "we
        don't intend to": legally impossible under our constitution. Every member gets one vote, whether
        they hold £250 or £25,000.
      </>
    ),
  },
];

const WhyWereDoingIt: React.FC = () => {
  return (
    <section id="why" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why we're doing it</h2>
          <p className="text-slate-600 text-lg">
            Not a cheaper hourly rate — higher utilisation of hardware the people who use it actually own.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <Icon className="h-8 w-8 text-cyan-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWereDoingIt;
