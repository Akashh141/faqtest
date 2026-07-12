// Help center data: collections (categories) and their articles.
// Each article contains structured content (sections with paragraphs / lists).

export const collections = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
    description: 'Get Started with My Funded Futures!',
    icon: '🚀',
    articles: [
      'industry-leading-futures-prop-firm',
      'getting-the-most-out-of-support',
      'affiliate-program',
      'navigating-your-dashboard',
      'restricted-countries-policy',
      'futures-instrument-list',
      'permitted-times-to-trade'
    ]
  },
  {
    slug: 'traders-evaluation',
    title: 'Traders Evaluation',
    description: 'Evaluation FAQ | Rules & Parameters',
    icon: '📊',
    articles: [
      'what-is-the-evaluation',
      'evaluation-rules-and-parameters',
      'daily-loss-limit',
      'trailing-threshold',
      'minimum-trading-days',
      'profit-target',
      'consistency-rule',
      'account-sizes',
      'reset-policy',
      'evaluation-fees'
    ]
  },
  {
    slug: 'funded-accounts',
    title: 'Funded Accounts',
    description: 'News Trading Policy | Sim Funded | Live Funded',
    icon: '💰',
    articles: [
      'sim-funded-accounts',
      'live-funded-accounts',
      'scaling-plan',
      'funding-your-account',
      'account-break-rules',
      'copy-trading-policy',
      'funded-account-fees'
    ]
  },
  {
    slug: 'rapid-plan',
    title: 'Rapid Plan',
    description: 'New Rapid Plan',
    icon: '⚡',
    articles: [
      'rapid-plan-overview',
      'rapid-plan-rules',
      'rapid-plan-payouts',
      'rapid-plan-scaling',
      'rapid-plan-fees',
      'rapid-plan-vs-evaluation',
      'rapid-plan-faq'
    ]
  },
  {
    slug: 'builder-plan',
    title: 'Builder Plan',
    description: "We're rolling out a new way to get funded faster, cleaner, and with fewer barriers.",
    icon: '🛠️',
    articles: ['builder-plan-overview']
  },
  {
    slug: 'flex-plan',
    title: 'THE FLEX PLAN',
    description: 'New Plan',
    icon: '🤸',
    articles: [
      'flex-plan-overview',
      'flex-plan-rules',
      'flex-plan-payouts',
      'flex-plan-scaling'
    ]
  },
  {
    slug: 'pro-plan',
    title: 'Pro Plan',
    description: 'Welcome to the Pro Plan',
    icon: '🏆',
    articles: ['pro-plan-overview', 'pro-plan-rules', 'pro-plan-payouts']
  },
  {
    slug: 'payout-information',
    title: 'Payout Information',
    description: 'Payout Policy | RISE payroll | 14 day Payout',
    icon: '💸',
    articles: ['payout-policy', 'rise-payroll', 'payout-eligibility']
  },
  {
    slug: 'trading-platforms',
    title: 'Trading Platforms',
    description: 'Connection Instruction | Platform Settings',
    icon: '🖥️',
    articles: [
      'platform-overview',
      'ninjatrader-setup',
      'tradingview-setup',
      'rithmic-setup',
      'projectx-setup',
      'quantower-setup',
      'mobile-trading',
      'data-feed',
      'platform-fees',
      'api-connections',
      'order-types',
      'hotkeys',
      'risk-settings',
      'troubleshoot-connection',
      'platform-migration'
    ]
  },
  {
    slug: 'trading-practices',
    title: 'Trading Practices and Risk Management',
    description: 'Focused on trading rules and CME laws',
    icon: '⚖️',
    articles: [
      'prohibited-trading-practices',
      'news-trading-policy',
      'gambling-policy',
      'hedging-policy',
      'martingale-policy',
      'cme-rule-compliance',
      'risk-management-best-practices'
    ]
  },
  {
    slug: 'live-accounts',
    title: 'Live Accounts',
    description: 'Transition FAQ',
    icon: '🌐',
    articles: ['live-account-transition', 'live-account-requirements']
  }
]

const P = (text) => ({ type: 'p', text })
const H = (text) => ({ type: 'h', text })
const L = (items) => ({ type: 'list', items })
const N = (text) => ({ type: 'note', text })
const WARN = (text) => ({ type: 'warn', text })

export const articles = {
  'industry-leading-futures-prop-firm': {
    slug: 'industry-leading-futures-prop-firm',
    title: 'Industry Leading Futures Prop Firm: Start Trading with MyFunded Futures',
    collection: 'getting-started',
    updated: '2024-12-01',
    excerpt:
      'MyFunded Futures is an industry-leading futures proprietary trading firm helping traders access funded capital.',
    content: [
      H('Welcome to MyFunded Futures'),
      P('MyFunded Futures is an industry-leading futures proprietary trading firm that provides traders with the opportunity to trade funded accounts after proving their skills through an evaluation. Our mission is to give talented traders access to capital without risking their own savings.'),
      P('Whether you are a beginner or an experienced trader, our programs are designed to be transparent, fast, and trader-friendly.'),
      H('Why Trade With Us'),
      L([
        'No maximum trading day restrictions on most plans',
        'Transparent rules with no hidden fees',
        'Fast payouts via RISE and other methods',
        'Access to industry-leading platforms',
        'Scaling plans that grow with your performance'
      ]),
      H('How It Works'),
      P('Choose a plan, complete the evaluation (if applicable), get funded, and start earning payouts on your profits. It really is that simple.'),
      N('New to trading? Check out the Getting Started collection for step-by-step guides.')
    ]
  },
  'getting-the-most-out-of-support': {
    slug: 'getting-the-most-out-of-support',
    title: 'Getting the Most Out of MyFunded Futures Support',
    collection: 'getting-started',
    updated: '2024-11-20',
    excerpt: 'Learn how to reach our support team and get faster responses.',
    content: [
      H('Support Channels'),
      P('We offer multiple ways to get help so you can choose what works best for you.'),
      L([
        'Live chat: available 24/5 directly from your dashboard',
        'Email support: support@myfundedfutures.com',
        'Discord community: connect with other traders and staff',
        'Help Center: self-serve articles like this one'
      ]),
      H('Tips for Faster Help'),
      L([
        'Include your account ID in every request',
        'Attach screenshots of any errors',
        'Describe the exact steps to reproduce an issue',
        'Check the Help Center before opening a ticket'
      ]),
      N('Our average first-response time is under 2 hours during business days.')
    ]
  },
  'affiliate-program': {
    slug: 'affiliate-program',
    title: 'MyFunded Futures Affiliate Program',
    collection: 'getting-started',
    updated: '2024-10-15',
    excerpt: 'Earn commissions by referring new traders to MyFunded Futures.',
    content: [
      H('Become an Affiliate'),
      P('Our affiliate program lets you earn recurring commissions by referring new traders. There is no cost to join.'),
      H('Commission Structure'),
      L([
        'Up to 20% commission on every referral purchase',
        'Recurring payouts for as long as your referral stays active',
        'Real-time tracking dashboard',
        'Custom referral links and promo codes'
      ]),
      WARN('Commissions are paid out only after the referred account is verified and funded.')
    ]
  },
  'navigating-your-dashboard': {
    slug: 'navigating-your-dashboard',
    title: 'Navigating Your Life',
    collection: 'getting-started',
    updated: '2024-12-05',
    excerpt: 'A tour of the trader dashboard and its key features.',
    content: [
      H('Dashboard Overview'),
      P('Your dashboard is the control center for everything related to your account. Here is what you will find:'),
      L([
        'Account list with real-time stats',
        'Performance metrics (PnL, drawdown, win rate)',
        'Payout requests and history',
        'Platform connection credentials',
        'Support and ticket houser man  ',
        'The rule do be tinging'
      ]),
      H('Account Cards'),
      P('Each account is shown as a card with its current balance, drawdown usage, and status. Click an account to see detailed metrics.'),
      N('Tip: Use the search bar at the top to quickly filter your accounts.')
    ]
  },
  'restricted-countries-policy': {
    slug: 'restricted-countries-policy',
    title: 'Restricted Countries Policy',
    collection: 'getting-started',
    updated: '2024-09-30',
    excerpt: 'List of countries where MyFunded Futures services are not available.',
    content: [
      H('Restricted Countries'),
      P('Due to regulatory and compliance requirements, MyFunded Futures is unable to offer services in certain jurisdictions.'),
      H('Currently Restricted'),
      L([
        'Afghanistan',
        'Cuba',
        'Iran',
        'North Korea',
        'Russia',
        'Syria',
        'Ukraine (occupied regions)'
      ]),
      WARN('This list is subject to change. If your country is restricted, you will be unable to create or fund an account.'),
      P('If you believe you are incorrectly flagged, please contact support with documentation of your residency.')
    ]
  },
  'futures-instrument-list': {
    slug: 'futures-instrument-list',
    title: 'Futures Instrument List',
    collection: 'getting-started',
    updated: '2024-12-10',
    excerpt: 'All instruments available to trade on MyFunded Futures accounts.',
    content: [
      H('Available Instruments'),
      P('MyFunded Futures supports a wide range of CME Group futures instruments across multiple asset classes.'),
      H('Indices'),
      L(['Micro E-mini S&P 500 (MES)', 'E-mini S&P 500 (ES)', 'Nasdaq (NQ/MNQ)', 'Dow (YM/MYM)', 'Russell (RTY/M2K)']),
      H('Commodities'),
      L(['Crude Oil (CL/MCL)', 'Gold (GC/MGC)', 'Silver (SI)', 'Natural Gas (NG)']),
      H('Currencies'),
      L(['Euro (6E)', 'British Pound (6B)', 'Japanese Yen (6J)', 'Australian Dollar (6A)']),
      H('Rates'),
      L(['10-Year Note (ZN)', '30-Year Bond (ZB)', '2-Year Note (ZT)']),
      N('Micro contracts are recommended for beginners due to their smaller risk profile.')
    ]
  },
  'permitted-times-to-trade': {
    slug: 'permitted-times-to-trade',
    title: 'Permitted Times to Trade',
    collection: 'getting-started',
    updated: '2024-11-12',
    excerpt: 'Trading session hours and restrictions for funded accounts.',
    content: [
      H('Trading Hours'),
      P('You may trade during all regular CME Globex trading sessions. Most instruments trade nearly 24 hours a day, Sunday evening through Friday afternoon (CT).'),
      H('Restricted Times'),
      L([
        'No new positions during the daily maintenance window',
        'Certain instruments pause during economic news (see News Trading Policy)',
        'Markets are closed on major US holidays'
      ]),
      WARN('Holding trades through the weekend gap is allowed only on specific plans. Check your plan rules.')
    ]
  },

  // Traders Evaluation
  'what-is-the-evaluation': {
    slug: 'what-is-the-evaluation',
    title: 'What is the Evaluation?',
    collection: 'traders-evaluation',
    updated: '2024-12-01',
    excerpt: 'Understand the evaluation phase and how to pass it.',
    content: [
      H('The Evaluation Phase'),
      P('The evaluation is a simulated trading period designed to prove you can trade profitably while managing risk. It is the first step toward a funded account.'),
      H('Two-Step Process'),
      L([
        'Step 1: Hit the profit target without breaching risk limits',
        'Step 2: Confirm consistency and repeat the performance'
      ]),
      P('Once both steps are complete, you qualify for a simulated funded account.')
    ]
  },
  'evaluation-rules-and-parameters': {
    slug: 'evaluation-rules-and-parameters',
    title: 'Evaluation Rules and Parameters',
    collection: 'traders-evaluation',
    updated: '2024-12-08',
    excerpt: 'All the key rules you must follow during the evaluation.',
    content: [
      H('Key Parameters'),
      L([
        'Profit target: typically 8% of starting balance',
        'Maximum daily loss limit',
        'Maximum overall drawdown (trailing)',
        'Minimum trading days requirement',
        'Consistency rule may apply'
      ]),
      WARN('Breaching any risk limit immediately fails the account. There are no exceptions.'),
      P('Full parameter tables are available on each plan page.')
    ]
  },
  'daily-loss-limit': {
    slug: 'daily-loss-limit',
    title: 'Daily Loss Limit',
    collection: 'traders-evaluation',
    updated: '2024-11-25',
    excerpt: 'How the daily loss limit is calculated and enforced.',
    content: [
      H('What is the Daily Loss Limit?'),
      P('The daily loss limit is the maximum amount you can lose in a single trading day, measured from the previous day close through the current day.'),
      H('Calculation'),
      P('Daily Loss = (Realized losses + Unrealized losses) from start of day. Once this limit is hit, trading is disabled for the remainder of the day.'),
      N('The limit resets at the start of each new trading day based on the prior close equity.')
    ]
  },
  'trailing-threshold': {
    slug: 'trailing-threshold',
    title: 'Trailing Threshold (Max Drawdown)',
    collection: 'traders-evaluation',
    updated: '2024-11-25',
    excerpt: 'Understanding the trailing maximum drawdown.',
    content: [
      H('Trailing Drawdown'),
      P('The trailing drawdown follows your highest account equity and locks in as you profit. It protects the firm from large losses.'),
      H('How It Trails'),
      L([
        'Starts at the initial max loss threshold',
        'Moves up (never down) as your equity reaches new highs',
        'Locks in once you reach a buffer above the starting balance'
      ]),
      WARN('If equity falls below the trailing threshold at any point, the account is failed.')
    ]
  },
  'minimum-trading-days': {
    slug: 'minimum-trading-days',
    title: 'Minimum Trading Days',
    collection: 'traders-evaluation',
    updated: '2024-10-22',
    excerpt: 'Why we require a minimum number of active days.',
    content: [
      H('Minimum Trading Days'),
      P('To prevent lucky one-day spikes, most plans require a minimum number of active trading days before you can pass.'),
      L([
        'Typically 2–4 minimum trading days',
        'A day counts when at least one position is opened',
        'Does not need to be consecutive'
      ])
    ]
  },
  'profit-target': {
    slug: 'profit-target',
    title: 'Profit Target',
    collection: 'traders-evaluation',
    updated: '2024-10-22',
    excerpt: 'How much profit you need to reach the target.',
    content: [
      H('Profit Target'),
      P('The profit target is the amount of simulated profit required to complete a step of the evaluation.'),
      P('Targets vary by account size but are generally 8% for step one and 5% for step two.')
    ]
  },
  'consistency-rule': {
    slug: 'consistency-rule',
    title: 'Consistency Rule',
    collection: 'traders-evaluation',
    updated: '2024-09-18',
    excerpt: 'Limits on how much of your profit can come from a single day.',
    content: [
      H('The Consistency Rule'),
      P('The consistency rule ensures profits are sustainable. No single trading day should account for too large a portion of total profit.'),
      L([
        'Typically a single day cannot exceed 40–50% of total profit',
        'Encourages steady, repeatable performance',
        'Applies to evaluation and some funded plans'
      ])
    ]
  },
  'account-sizes': {
    slug: 'account-sizes',
    title: 'Available Account Sizes',
    collection: 'traders-evaluation',
    updated: '2024-12-02',
    excerpt: 'Choose the account size that fits your risk appetite.',
    content: [
      H('Account Sizes'),
      P('We offer multiple starting account sizes to match your trading style and risk tolerance.'),
      L([
        '$10,000 simulated accounts',
        '$25,000 simulated accounts',
        '$50,000 simulated accounts',
        '$100,000 simulated accounts',
        '$150,000 simulated accounts'
      ]),
      N('Larger accounts have proportionally larger profit targets and drawdown limits.')
    ]
  },
  'reset-policy': {
    slug: 'reset-policy',
    title: 'Account Reset Policy',
    collection: 'traders-evaluation',
    updated: '2024-08-30',
    excerpt: 'What happens if you fail an evaluation and how to reset.',
    content: [
      H('Resetting a Failed Account'),
      P('If you breach a rule during the evaluation, the account fails. You can purchase a reset to start over at a discounted rate.'),
      L([
        'Resets are available for any failed evaluation',
        'Reset price is lower than a brand-new account',
        'All stats are restarted from the beginning'
      ]),
      WARN('Funded accounts cannot be reset — a breach ends the account.')
    ]
  },
  'evaluation-fees': {
    slug: 'evaluation-fees',
    title: 'Evaluation Fees',
    collection: 'traders-evaluation',
    updated: '2024-12-03',
    excerpt: 'One-time fees for starting an evaluation.',
    content: [
      H('Fee Structure'),
      P('Evaluation accounts require a one-time fee that covers data and platform access during the challenge.'),
      P('Fees scale with account size. Funded accounts typically have no recurring fee on Sim, with optional add-ons.'),
      N('Promotions and discounts are frequently available — check the website for current offers.')
    ]
  },

  // Funded Accounts
  'sim-funded-accounts': {
    slug: 'sim-funded-accounts',
    title: 'Sim Funded Accounts',
    collection: 'funded-accounts',
    updated: '2024-12-09',
    excerpt: 'What a simulated funded account offers.',
    content: [
      H('Sim Funded Accounts'),
      P('After passing the evaluation, you receive a simulated funded account where you trade with simulated capital but earn real profit splits.'),
      L([
        'No recurring monthly fee',
        'Real payouts on simulated profits',
        'Same rules as evaluation for risk management',
        'Eligible for scaling as you grow'
      ])
    ]
  },
  'live-funded-accounts': {
    slug: 'live-funded-accounts',
    title: 'Live Funded Accounts',
    collection: 'funded-accounts',
    updated: '2024-12-09',
    excerpt: 'Transitioning to a live funded account with real capital.',
    content: [
      H('Live Funded Accounts'),
      P('Top-performing sim traders may be invited to a live funded account where trades are executed with real capital.'),
      P('Live accounts follow the same risk rules but trade on real exchange fill data.')
    ]
  },
  'scaling-plan': {
    slug: 'scaling-plan',
    title: 'Scaling Plan',
    collection: 'funded-accounts',
    updated: '2024-11-28',
    excerpt: 'Grow your account size as you stay consistent.',
    content: [
      H('How Scaling Works'),
      P('Consistent, profitable traders can scale their account size over time without additional fees.'),
      L([
        'Reach a profit buffer to unlock the next tier',
        'Account size increases in defined steps',
        'Risk limits scale proportionally'
      ])
    ]
  },
  'funding-your-account': {
    slug: 'funding-your-account',
    title: 'Funding Your Account',
    collection: 'funded-accounts',
    updated: '2024-10-05',
    excerpt: 'Payment methods accepted for evaluations and resets.',
    content: [
      H('Accepted Payment Methods'),
      L([
        'Credit and debit cards',
        'Crypto (BTC, ETH, USDT)',
        'RISE payout reversal',
        'Other regional methods'
      ]),
      N('All payments are processed securely through our payment partners.')
    ]
  },
  'account-break-rules': {
    slug: 'account-break-rules',
    title: 'Account Breach Rules',
    collection: 'funded-accounts',
    updated: '2024-11-15',
    excerpt: 'Actions that will breach your funded account.',
    content: [
      H('Breach Conditions'),
      P('Funded accounts are closed permanently if any of the following occur:'),
      L([
        'Exceeding the trailing max drawdown',
        'Exceeding the daily loss limit',
        'Engaging in prohibited trading practices',
        'Violating the news trading policy'
      ]),
      WARN('Breached funded accounts are not eligible for reset.')
    ]
  },
  'copy-trading-policy': {
    slug: 'copy-trading-policy',
    title: 'Copy Trading Policy',
    collection: 'funded-accounts',
    updated: '2024-09-22',
    excerpt: 'Rules around copying trades across accounts.',
    content: [
      H('Copy Trading'),
      P('Copying your own trades across multiple accounts is generally allowed, but coordinated trading with others is not.'),
      L([
        'You may copy between your own accounts',
        'Sharing signals for the purpose of passing is prohibited',
        'Excessive correlation may be reviewed'
      ])
    ]
  },
  'funded-account-fees': {
    slug: 'funded-account-fees',
    title: 'Funded Account Fees',
    collection: 'funded-accounts',
    updated: '2024-10-10',
    excerpt: 'Costs associated with maintaining a funded account.',
    content: [
      H('Fee Overview'),
      P('Sim funded accounts have no monthly fee. Optional data and platform add-ons may apply.'),
      P('Live accounts may incur exchange data fees deducted from payouts.')
    ]
  },

  // Rapid Plan
  'rapid-plan-overview': {
    slug: 'rapid-plan-overview',
    title: 'Rapid Plan Overview',
    collection: 'rapid-plan',
    updated: '2024-12-11',
    excerpt: 'Get funded faster with the Rapid Plan.',
    content: [
      H('Introducing Rapid'),
      P('The Rapid Plan is designed for traders who want to skip the long evaluation and get funded quickly with straightforward rules.'),
      L([
        'Single-step qualification',
        'No consistency rule on most tiers',
        'Fast payouts',
        'Simple drawdown structure'
      ])
    ]
  },
  'rapid-plan-rules': {
    slug: 'rapid-plan-rules',
    title: 'Rapid Plan Rules',
    collection: 'rapid-plan',
    updated: '2024-12-11',
    excerpt: 'Key rules for the Rapid Plan.',
    content: [
      H('Rapid Rules'),
      L([
        'Profit target set per account size',
        'Trailing max drawdown',
        'Daily loss limit',
        'Minimum trading days may apply'
      ]),
      WARN('Standard prohibited-practice rules still apply.')
    ]
  },
  'rapid-plan-payouts': {
    slug: 'rapid-plan-payouts',
    title: 'Rapid Plan Payouts',
    collection: 'rapid-plan',
    updated: '2024-12-11',
    excerpt: 'How and when Rapid Plan payouts are made.',
    content: [
      H('Payout Schedule'),
      P('Rapid Plan payouts are available on a 14-day cycle after the first eligible profit.'),
      L([
        '80% profit split to trader (standard)',
        'Payouts via RISE, crypto, or bank transfer',
        'No payout fees on most methods'
      ])
    ]
  },
  'rapid-plan-scaling': {
    slug: 'rapid-plan-scaling',
    title: 'Rapid Plan Scaling',
    collection: 'rapid-plan',
    updated: '2024-12-11',
    excerpt: 'Scale your Rapid account as you profit.',
    content: [
      H('Scaling'),
      P('Rapid accounts scale automatically once you reach profit buffers, increasing both size and risk limits.')
    ]
  },
  'rapid-plan-fees': {
    slug: 'rapid-plan-fees',
    title: 'Rapid Plan Fees',
    collection: 'rapid-plan',
    updated: '2024-12-11',
    excerpt: 'One-time and recurring costs for Rapid.',
    content: [
      H('Fees'),
      P('Rapid is a one-time purchase with no recurring fee on sim accounts.')
    ]
  },
  'rapid-plan-vs-evaluation': {
    slug: 'rapid-plan-vs-evaluation',
    title: 'Rapid Plan vs Evaluation',
    collection: 'rapid-plan',
    updated: '2024-12-11',
    excerpt: 'Which plan is right for you?',
    content: [
      H('Comparison'),
      L([
        'Evaluation: two steps, lower entry cost',
        'Rapid: one step, faster funding',
        'Both lead to funded accounts with payouts'
      ])
    ]
  },
  'rapid-plan-faq': {
    slug: 'rapid-plan-faq',
    title: 'Rapid Plan FAQ',
    collection: 'rapid-plan',
    updated: '2024-12-11',
    excerpt: 'Frequently asked questions about Rapid.',
    content: [
      H('Common Questions'),
      P('Q: Can I switch from evaluation to Rapid? A: You can purchase a new Rapid account at any time.'),
      P('Q: Are payouts the same? A: Yes, both use the standard payout policy.')
    ]
  },

  // Builder Plan
  'builder-plan-overview': {
    slug: 'builder-plan-overview',
    title: 'Builder Plan Overview',
    collection: 'builder-plan',
    updated: '2024-12-12',
    excerpt: "We're rolling out a new way to get funded faster, cleaner, and with fewer barriers.",
    content: [
      H('The Builder Plan'),
      P("The Builder Plan is our newest offering — a customizable path to funding where you build the account parameters that fit your style."),
      L([
        'Choose your own drawdown and target',
        'Fewer barriers to entry',
        'Clean, transparent rules',
        'Fast path to a funded account'
      ]),
      N('More Builder Plan articles are coming soon.')
    ]
  },

  // Flex Plan
  'flex-plan-overview': {
    slug: 'flex-plan-overview',
    title: 'Flex Plan Overview',
    collection: 'flex-plan',
    updated: '2024-12-12',
    excerpt: 'A flexible plan with relaxed rules for experienced traders.',
    content: [
      H('Flex Plan'),
      P('The Flex Plan gives experienced traders maximum flexibility with relaxed restrictions on trading styles and times.'),
      L([
        'No minimum trading days',
        'Trade through news (within policy)',
        'Flexible drawdown options'
      ])
    ]
  },
  'flex-plan-rules': {
    slug: 'flex-plan-rules',
    title: 'Flex Plan Rules',
    collection: 'flex-plan',
    updated: '2024-12-12',
    excerpt: 'Risk rules for the Flex Plan.',
    content: [
      H('Flex Rules'),
      L([
        'Trailing max drawdown',
        'Daily loss limit',
        'Standard prohibited-practice rules'
      ])
    ]
  },
  'flex-plan-payouts': {
    slug: 'flex-plan-payouts',
    title: 'Flex Plan Payouts',
    collection: 'flex-plan',
    updated: '2024-12-12',
    excerpt: 'Payout terms for Flex.',
    content: [
      H('Payouts'),
      P('Flex payouts follow the standard 14-day payout policy with the same profit split.')
    ]
  },
  'flex-plan-scaling': {
    slug: 'flex-plan-scaling',
    title: 'Flex Plan Scaling',
    collection: 'flex-plan',
    updated: '2024-12-12',
    excerpt: 'Scale your Flex account.',
    content: [
      H('Scaling'),
      P('Flex accounts scale the same way as other funded plans based on consistent profitability.')
    ]
  },

  // Pro Plan
  'pro-plan-overview': {
    slug: 'pro-plan-overview',
    title: 'Pro Plan Overview',
    collection: 'pro-plan',
    updated: '2024-12-12',
    excerpt: 'Welcome to the Pro Plan for serious traders.',
    content: [
      H('Pro Plan'),
      P('The Pro Plan is built for serious, high-volume traders who want the best economics and the fastest path to live capital.')
    ]
  },
  'pro-plan-rules': {
    slug: 'pro-plan-rules',
    title: 'Pro Plan Rules',
    collection: 'pro-plan',
    updated: '2024-12-12',
    excerpt: 'Pro Plan risk rules.',
    content: [
      H('Pro Rules'),
      L([
        'Enhanced drawdown limits',
        'Priority payouts',
        'All standard prohibited-practice rules apply'
      ])
    ]
  },
  'pro-plan-payouts': {
    slug: 'pro-plan-payouts',
    title: 'Pro Plan Payouts',
    collection: 'pro-plan',
    updated: '2024-12-12',
    excerpt: 'Pro Plan payout advantages.',
    content: [
      H('Payouts'),
      P('Pro traders enjoy priority payout processing and an enhanced profit split.')
    ]
  },

  // Payout Information
  'payout-policy': {
    slug: 'payout-policy',
    title: 'Payout Policy',
    collection: 'payout-information',
    updated: '2024-12-10',
    excerpt: 'Everything you need to know about requesting payouts.',
    content: [
      H('Payout Policy'),
      P('Payouts are processed on a regular cycle once you have eligible profit in your funded account.'),
      L([
        'First payout typically after 14 days of funding',
        'Subsequent payouts on a 14-day cycle',
        'Standard profit split of 80/20 to the trader',
        'No payout fees on most methods'
      ]),
      WARN('Only profits above your buffer are eligible for payout.')
    ]
  },
  'rise-payroll': {
    slug: 'rise-payroll',
    title: 'RISE Payroll Info',
    collection: 'payout-information',
    updated: '2024-12-10',
    excerpt: 'Use RISE to receive your payouts worldwide.',
    content: [
      H('RISE Payroll'),
      P('RISE is our recommended payout method, supporting bank deposits and crypto in many countries.'),
      L([
        'Fast processing (often same day)',
        'Low or no fees',
        'Wide country coverage',
        'Supports USD and crap ',
        'btman',
        'ovierawsads'

      ])
    ]
  },
  'payout-eligibility': {
    slug: 'payout-eligibility',
    title: 'Payout Eligibility',
    collection: 'payout-information',
    updated: '2024-12-10',
    excerpt: 'Requirements to be eligible for a payout.',
    content: [
      H('Eligibility Requirements'),
      L([
        'Account must be funded (sim or live)',
        'Must have met the minimum funding period',
        'No active breaches or investigations',
        'Profit must exceed the locked buffer'
      ])
    ]
  },

  // Trading Platforms
  'platform-overview': {
    slug: 'platform-overview',
    title: 'Trading Platform Overview',
    collection: 'trading-platforms',
    updated: '2024-12-08',
    excerpt: 'Supported platforms and how to choose one.',
    content: [
      H('Supported Platforms'),
      P('MyFunded Futures supports a wide range of professional trading platforms. Choose the one that fits your workflow.'),
      L([
        'NinjaTrader',
        'TradingView',
        'Rithmic (RTrader)',
        'ProjectX',
        'Quantower',
        'Mobile apps'
      ])
    ]
  },
  'ninjatrader-setup': {
    slug: 'ninjatrader-setup',
    title: 'NinjaTrader Setup',
    collection: 'trading-platforms',
    updated: '2024-12-08',
    excerpt: 'Connect NinjaTrader to your account.',
    content: [
      H('Connecting NinjaTrader'),
      P('Use the Rithmic connection profile provided in your dashboard credentials.'),
      L([
        'Open NinjaTrader Connections',
        'Add a Rithmic connection',
        'Enter your username, password, and server from the dashboard',
        'Select the correct account and apply'
      ])
    ]
  },
  'tradingview-setup': {
    slug: 'tradingview-setup',
    title: 'TradingView Setup',
    collection: 'trading-platforms',
    updated: '2024-12-08',
    excerpt: 'Trade through TradingView.',
    content: [
      H('TradingView'),
      P('TradingView connects via our supported broker integration. Authorize from your dashboard and select the account.')
    ]
  },
  'rithmic-setup': {
    slug: 'rithmic-setup',
    title: 'Rithmic (RTrader) Setup',
    collection: 'trading-platforms',
    updated: '2024-12-08',
    excerpt: 'Use RTrader Pro with your credentials.',
    content: [
      H('RTrader Pro'),
      P('Download RTrader Pro and log in with the Rithmic credentials from your dashboard.')
    ]
  },
  'projectx-setup': {
    slug: 'projectx-setup',
    title: 'ProjectX Setup',
    collection: 'trading-platforms',
    updated: '2024-12-08',
    excerpt: 'Connect ProjectX to trade.',
    content: [
      H('ProjectX'),
      P('Log in to ProjectX with the credentials issued in your dashboard and select your account.')
    ]
  },
  'quantower-setup': {
    slug: 'quantower-setup',
    title: 'Quantower Setup',
    collection: 'trading-platforms',
    updated: '2024-12-08',
    excerpt: 'Configure Quantower with Rithmic.',
    content: [
      H('Quantower'),
      P('Add a Rithmic connection in Quantower using your dashboard credentials.')
    ]
  },
  'mobile-trading': {
    slug: 'mobile-trading',
    title: 'Mobile Trading',
    collection: 'trading-platforms',
    updated: '2024-12-08',
    excerpt: 'Trade from your phone.',
    content: [
      H('Mobile'),
      P('Several of our platforms offer mobile apps so you can monitor and manage trades on the go.')
    ]
  },
  'data-feed': {
    slug: 'data-feed',
    title: 'Data Feed',
    collection: 'trading-platforms',
    updated: '2024-12-08',
    excerpt: 'Real-time market data information.',
    content: [
      H('Market Data'),
      P('Accounts include real-time CME data during active sessions. Delayed data may apply on some free tiers.')
    ]
  },
  'platform-fees': {
    slug: 'platform-fees',
    title: 'Platform Fees',
    collection: 'trading-platforms',
    updated: '2024-12-08',
    excerpt: 'Costs for platform usage.',
    content: [
      H('Fees'),
      P('Most platforms are free to use with your account. Some advanced platforms may have optional monthly fees.')
    ]
  },
  'api-connections': {
    slug: 'api-connections',
    title: 'API Connections',
    collection: 'trading-platforms',
    updated: '2024-12-08',
    excerpt: 'Automate trading via API.',
    content: [
      H('API Access'),
      P('Advanced users can connect via supported APIs for automated strategies. Contact support for access.')
    ]
  },
  'order-types': {
    slug: 'order-types',
    title: 'Order Types',
    collection: 'trading-platforms',
    updated: '2024-12-08',
    excerpt: 'Supported order types.',
    content: [
      H('Order Types'),
      L(['Market', 'Limit', 'Stop', 'Stop-limit', 'Bracket/OCO', 'Trailing stop'])
    ]
  },
  'hotkeys': {
    slug: 'hotkeys',
    title: 'Hotkeys',
    collection: 'trading-platforms',
    updated: '2024-12-08',
    excerpt: 'Speed up trading with hotkeys.',
    content: [
      H('Hotkeys'),
      P('Most desktop platforms support customizable hotkeys for rapid order entry and management.')
    ]
  },
  'risk-settings': {
    slug: 'risk-settings',
    title: 'Platform Risk Settings',
    collection: 'trading-platforms',
    updated: '2024-12-08',
    excerpt: 'Configure risk controls in your platform.',
    content: [
      H('Risk Settings'),
      P('Set max position size, daily loss guards, and order confirmation prompts to protect your account.')
    ]
  },
  'troubleshoot-connection': {
    slug: 'troubleshoot-connection',
    title: 'Troubleshooting Connections',
    collection: 'trading-platforms',
    updated: '2024-12-08',
    excerpt: 'Fix common connection issues.',
    content: [
      H('Common Fixes'),
      L([
        'Verify credentials match the dashboard exactly',
        'Check the correct server/venue selection',
        'Restart the platform',
        'Confirm your internet connection',
        'Contact support if issues persist'
      ])
    ]
  },
  'platform-migration': {
    slug: 'platform-migration',
    title: 'Platform Migration',
    collection: 'trading-platforms',
    updated: '2024-12-08',
    excerpt: 'Switch platforms without losing data.',
    content: [
      H('Migrating'),
      P('You can switch platforms at any time. Your account and stats remain the same; only the connection changes.')
    ]
  },

  // Trading Practices
  'prohibited-trading-practices': {
    slug: 'prohibited-trading-practices',
    title: 'Prohibited Trading Practices',
    collection: 'trading-practices',
    updated: '2024-11-30',
    excerpt: 'Behaviors that will result in account termination.',
    content: [
      H('Prohibited Practices'),
      P('The following practices are strictly prohibited and will result in account closure:'),
      L([
        'Gambling / lotto trades',
        'Martingale or grid strategies',
        'Hedging across accounts',
        'News trading outside policy',
        'Manipulating fills or latency arbitrage',
        'Spoofing or layering'
      ]),
      WARN('Violations may result in forfeited profits and permanent bans.')
    ]
  },
  'news-trading-policy': {
    slug: 'news-trading-policy',
    title: 'News Trading Policy',
    collection: 'trading-practices',
    updated: '2024-12-01',
    excerpt: 'Rules for trading around high-impact news events.',
    content: [
      H('News Trading'),
      P('Trading around high-impact economic news is restricted to protect against abnormal volatility.'),
      L([
        'No new positions X minutes before and after major news',
        'Existing positions may be managed',
        'Restricted instruments announced per event',
        'Exceptions on plans that permit news trading'
      ]),
      WARN('Check the economic calendar and your plan rules before trading news.')
    ]
  },
  'gambling-policy': {
    slug: 'gambling-policy',
    title: 'Gambling Policy',
    collection: 'trading-practices',
    updated: '2024-11-20',
    excerpt: 'Why lottery-style trades are not allowed.',
    content: [
      H('No Gambling'),
      P('Placing oversized, high-risk trades hoping for a single big win (lotto trading) is prohibited and indicates poor risk management.')
    ]
  },
  'hedging-policy': {
    slug: 'hedging-policy',
    title: 'Hedging Policy',
    collection: 'trading-practices',
    updated: '2024-11-20',
    excerpt: 'Rules about hedging across accounts.',
    content: [
      H('Hedging'),
      P('Opening offsetting positions across multiple accounts to neutralize risk is prohibited.')
    ]
  },
  'martingale-policy': {
    slug: 'martingale-policy',
    title: 'Martingale Policy',
    collection: 'trading-practices',
    updated: '2024-11-20',
    excerpt: 'Martingale and grid strategies are not allowed.',
    content: [
      H('Martingale / Grid'),
      P('Strategies that double exposure after losses (martingale) or use grid layers are prohibited due to unbounded risk.')
    ]
  },
  'cme-rule-compliance': {
    slug: 'cme-rule-compliance',
    title: 'CME Rule Compliance',
    collection: 'trading-practices',
    updated: '2024-10-28',
    excerpt: 'Adhering to exchange regulations.',
    content: [
      H('CME Compliance'),
      P('All trading must comply with CME Group rules and US regulations regarding market integrity and fair practice.')
    ]
  },
  'risk-management-best-practices': {
    slug: 'risk-management-best-practices',
    title: 'Risk Management Best Practices',
    collection: 'trading-practices',
    updated: '2024-12-05',
    excerpt: 'Tips to protect your account and grow steadily.',
    content: [
      H('Best Practices'),
      L([
        'Size positions to a small % of account',
        'Use stop losses on every trade',
        'Avoid overtrading',
        'Keep a trading journal',
        'Respect daily loss limits'
      ]),
      N('Consistency beats home runs. Protect capital first.')
    ]
  },

  // Live Accounts
  'live-account-transition': {
    slug: 'live-account-transition',
    title: 'Live Account Transition',
    collection: 'live-accounts',
    updated: '2024-12-09',
    excerpt: 'How to move from sim to a live funded account.',
    content: [
      H('Transitioning to Live'),
      P('Qualified sim traders may be invited to transition to a live funded account with real capital and real exchange execution.'),
      L([
        'Invitation based on consistent performance',
        'Same risk rules apply',
        'Real capital, real payouts'
      ])
    ]
  },
  'live-account-requirements': {
    slug: 'live-account-requirements',
    title: 'Live Account Requirements',
    collection: 'live-accounts',
    updated: '2024-12-09',
    excerpt: 'What you need to qualify for a live account.',
    content: [
      H('Requirements'),
      L([
        'Sustained profitability on sim',
        'Clean compliance record',
        'Completed verification (KYC)',
        'Tax documentation on file'
      ])
    ]
  }
}

export function getCollection(slug) {
  return collections.find((c) => c.slug === slug)
}

export function getArticle(slug) {
  return articles[slug]
}

export function getArticlesForCollection(slug) {
  const col = getCollection(slug)
  if (!col) return []
  return col.articles.map((a) => articles[a]).filter(Boolean)
}

export function searchArticles(query) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return Object.values(articles).filter((a) => {
    const col = getCollection(a.collection)
    const haystack = [a.title, a.excerpt, col?.title, col?.description, JSON.stringify(a.content)]
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  })
}
