export const budgetLines: { label: string; amount: number }[] = [
  { label: 'GPU servers', amount: 200000 },
  { label: 'Networking, storage, spares', amount: 40000 },
  { label: 'Colocation deposit and first six months', amount: 30000 },
  { label: 'Software and orchestration', amount: 15000 },
  { label: 'Insurance', amount: 5000 },
  { label: 'Legal, registration, audit', amount: 25000 },
  { label: 'Platform and campaign costs', amount: 25000 },
  { label: 'Working capital reserve', amount: 60000 },
];

export const totalRaise = budgetLines.reduce((sum, line) => sum + line.amount, 0);

export const beneficiaries = [
  {
    title: 'University research groups',
    summary:
      'Compute-starved, grant-funded, and paying enterprise cloud rates for capacity they use in bursts.',
    change:
      'A department currently spending £40,000/year on reserved cloud — and using maybe 30% of it — could put £20,000 into shares and £12,000/year into a capacity contract. They own the hardware, hold a vote, and pay only what it costs to run.',
    also:
      'Grant applications are easier to justify when infrastructure spend becomes a durable asset rather than rent. Data stays on UK infrastructure, which matters for anything involving human subjects, NHS data, or sensitive research.',
  },
  {
    title: 'Small businesses, studios and agencies',
    summary:
      'AI startups priced out of hyperscaler enterprise contracts. Studios running rendering or model fine-tuning. Agencies with predictable client workloads.',
    change:
      'Costs become predictable and visible. Capacity is genuinely reserved rather than rationed. No contract renegotiation you didn’t ask for. A small company gets the same single vote as the largest member — which no commercial provider will ever offer.',
  },
  {
    title: 'Individual researchers and developers',
    summary:
      'People running training jobs who currently pick between an underpowered laptop and a credit card exposed to per-hour billing.',
    change:
      '£250 buys membership and a vote. Interruptible capacity — jobs that can pause and resume — is priced well below firm capacity, and most independent research fits that shape perfectly.',
  },
];

export const hostCommunityCommitments = [
  'Reclaimed industrial land only, never greenfield',
  'Free membership for residents of the host area',
  'A fixed share of surplus into a community benefit fund',
  'Reserved board seats for host community representatives',
  'Local hiring and apprenticeships',
  'Waste heat recovered for local use',
  'Published power, water and noise figures — which most operators decline to disclose',
];

export const whoDoesNotBenefit = [
  {
    title: 'Anyone investing for a financial return',
    detail:
      'Shares are £1 and can never be worth more. Interest is discretionary, targeted at around 3%, and not guaranteed. You cannot sell your shares. If the society fails, the asset lock means members receive nothing.',
  },
  {
    title: 'Anyone who just wants the cheapest GPU-hour',
    detail:
      'Specialist providers rent H100s from around $3/hour and marketplaces go lower. We’re not competing on headline price and we won’t pretend otherwise.',
  },
  {
    title: 'Anyone needing hyperscaler breadth',
    detail: 'We do GPU compute. Not managed databases, not global regions, not a service catalogue.',
  },
  {
    title: 'Anyone who needs their money back on a date',
    detail: 'Withdrawal is at the board’s discretion, subject to funds, and not in the first three years.',
  },
];

export const milestones = [
  {
    year: 'Year 1',
    detail:
      '8 GPUs live, 250+ members, utilisation above 60%, first quarterly report published including whatever went badly. Of those 250+ members, around 10 hold capacity contracts — most members are supporters and occasional users rather than continuous consumers, and the cluster is sized for the latter.',
  },
  {
    year: 'Year 2',
    detail: 'Expansion voted on by members and funded separately, only if Year 1 sustained its utilisation.',
  },
  {
    year: 'Year 3',
    detail:
      'Genuine self-sufficiency: revenue covering operating costs and the reserve that replaces hardware when it wears out. That’s the real finish line, and it’s harder than breaking even.',
  },
  {
    year: 'After that',
    detail: 'Members decide. Possibly a facility of our own. Possibly a second co-operative somewhere else. Not our call alone; that’s the point.',
  },
];

export const oneSentence =
  "We're raising £400,000 so that universities, small businesses and independent researchers can own the AI infrastructure they use — rather than rent it from companies that can change the terms, raise the price, or be sold tomorrow.";
