/**
 * Playbooks & in-depth interactive guide data for Security Guides.
 * Uses serializable icon identifiers so data can safely pass across RSC boundaries if needed.
 */

export const GUIDE_CATEGORIES = [
  { id: 'all', label: 'All Guides (18)' },
  { id: 'phishing', label: 'Phishing & Links' },
  { id: 'employment', label: 'Website, Job & Employment' },
  { id: 'shopping', label: 'Online Shopping' },
  { id: 'banking', label: 'Banking & Payments' },
  { id: 'identity', label: 'Identity & Privacy' },
  { id: 'emergency', label: 'Emergency Response' },
];

export const FEATURED_GUIDE = {
  id: 'phishing-links-featured',
  categoryId: 'phishing',
  badge: 'Featured Field Guide',
  updatedAt: 'Updated Yesterday',
  readTime: '5 min read',
  title: 'How to Spot Phishing Links & Lookalike Domains Before Clicking',
  description:
    'Deceptive links are the #1 entry point for identity theft and banking fraud. Learn how scammers disguise web addresses and the 3-second check to always stay safe.',
  trustNote: 'Verified by Kawach Trust & Safety Team  •  100% Plain English',
  targetArticleId: 'identify-phishing-links',
};

export const CORE_PLAYBOOKS = [
  {
    id: 'identify-phishing-links',
    categoryId: 'phishing',
    categoryLabel: 'Phishing & Links',
    readTime: '4 min read',
    icon: 'link',
    title: 'How to identify phishing links',
    description:
      'Learn to read URLs from right to left, spot fake subdomains, and never get fooled by character replacements like Cyrillic "a".',
    footerTag: 'Link Hygiene',
    isDanger: false,
    article: {
      badge: 'Phishing Defense',
      publishedAt: 'Published Oct 24, 2024',
      readTime: '4 min read',
      author: 'By Kawach Research Desk',
      title: 'Deep Dive: How Lookalike Domains & Punycode Links Trick the Eye',
      assurance:
        'Written to inform, not alarm. Checking a link before signing in takes less than 3 seconds.',
      setupHeading: 'The Setup: Why Subdomains Mislead Busy Readers',
      setupParagraphs: [
        'Attackers know most people glance only at the beginning of a web address. By placing a recognizable brand name at the front—such as "hdfcbank.verify-account-now.top"—the real destination is actually "verify-account-now.top", not the bank.',
        'Combined with automated SSL certificates that show a padlock icon in the browser bar, a fraudulent login screen can appear completely authentic unless you inspect the root domain directly before the first single slash.',
      ],
      redFlags: [
        {
          id: 1,
          title: 'Misleading Subdomains',
          detail:
            'Brand names placed before hyphens or dots while the true root domain ends in an unrelated .top, .xyz, or .live extension.',
        },
        {
          id: 2,
          title: 'Homoglyph Characters',
          detail:
            'Lookalike Unicode letters (such as Cyrillic "а" or "о") substituted into famous brand spellings.',
        },
        {
          id: 3,
          title: 'Shortened URL Masking',
          detail:
            'Unexpected bit.ly or tinyurl links in banking or delivery messages hiding the true final landing host.',
        },
        {
          id: 4,
          title: 'Password Manager Silence',
          detail:
            'Your browser or password manager refuses to autofill saved credentials because the domain origin does not match.',
        },
      ],
      messageSource: 'SMS • Unknown Sender',
      messageTime: 'Today, 09:14 AM',
      messageCopy:
        'URGENT: Your netbanking profile has been restricted. Verify PAN details immediately at https://secure-bank.verify-portal84.top/login to restore access.',
      deceptionSignals:
        'Deception Signals: Unrelated .top root domain • Urgent freeze threat • Hyphenated brand subdomain',
      checklist: [
        {
          id: 'ph-1',
          title: 'Read from right to left before the first "/"',
          detail:
            'Isolate the exact domain name and extension immediately preceding the first single forward slash.',
          defaultChecked: true,
        },
        {
          id: 'ph-2',
          title: 'Open official apps manually',
          detail:
            'Close the message and open your banking app or type the official website directly into a fresh browser tab.',
        },
        {
          id: 'ph-3',
          title: 'Test with Kawach URL Scanner',
          detail:
            'Paste suspicious links into Kawach Scan Center to inspect WHOIS age and redirect hops without opening them.',
        },
        {
          id: 'ph-4',
          title: 'Report deceptive links',
          detail:
            'Submit confirmed phishing URLs in Report a Scam to protect other community members automatically.',
        },
      ],
    },
  },
  {
    id: 'fake-job-offers',
    categoryId: 'employment',
    categoryLabel: 'Employment Fraud',
    readTime: '6 min read',
    icon: 'briefcase',
    title: 'How fake job offers work',
    description:
      'From Telegram interviews to counterfeit equipment deposit checks, how to identify remote work scams offering unbelievable hourly rates.',
    footerTag: 'White-Collar Scams',
    isDanger: false,
    article: {
      badge: 'Employment Defense',
      publishedAt: 'Published Oct 22, 2024',
      readTime: '6 min read',
      author: 'By Kawach Research Desk',
      title: 'Deep Dive: How Deceptive Job Offers Steal Your Money (Not Just Your Resume)',
      assurance:
        'Written to inform, not alarm. Every tactic outlined below is avoidable with a 1-minute sanity check.',
      setupHeading: "The Setup: Why Remote Work Is Scammers' Favorite Hook",
      setupParagraphs: [
        'The shift toward flexible home working creates a fertile landscape for predatory impersonation. Scammers scrape profiles from professional job boards, LinkedIn, and public directories. Instead of attempting a direct hack, they pose as senior recruiters offering roles with minimal prerequisites, high hourly pay, and flexible scheduling.',
        'Their objective is rarely your resume data alone. Within two to three messages, they will either transition to an encrypted messaging platform to bypass anti-scam spam monitors, or attempt to send you an advance counterfeit check for "home workstation setup."',
      ],
      redFlags: [
        {
          id: 1,
          title: 'Chat-Only Interviews',
          detail:
            'Interviews conducted solely over WhatsApp, Telegram, or Google Chat without salary/role verification.',
        },
        {
          id: 2,
          title: 'Disproportionate Pay',
          detail:
            'Unusually high compensation ($45–$65/hr) for routine data entry or content listing tasks.',
        },
        {
          id: 3,
          title: 'Equipment Check Advance',
          detail:
            'They email you a check image to deposit and demand you wire excess funds back to a third "vendor."',
        },
        {
          id: 4,
          title: 'Domain & Handle Mismatch',
          detail:
            'Messages come from generic free webmail (@gmail.com) or lookalike domains with added words like -hr.',
        },
      ],
      messageSource: 'SMS • Unknown Sender',
      messageTime: 'Yesterday, 11:42 AM',
      messageCopy:
        'Hello! We reviewed your profile on LinkedIn for Remote Data Specialist. Pay is $52/hr paid daily. Reply YES to connect with HR manager on Telegram.',
      deceptionSignals:
        'Deception Signals: Unsolicited contact • Unrealistic rate • Redirect to external chat app',
      checklist: [
        {
          id: 'job-1',
          title: 'Verify through the official portal:',
          detail:
            "Research the company's official public careers directory directly in a fresh browser window to see if the requisition ID exists.",
          defaultChecked: true,
        },
        {
          id: 'job-2',
          title: 'Call switchboard verification:',
          detail:
            "Phone the company's verified corporate phone number and ask for the talent acquisition representative.",
        },
        {
          id: 'job-3',
          title: 'Refuse check advances:',
          detail:
            'Under zero conditions deposit an employer-emailed equipment check with an instruction to return surplus or transfer money to third parties.',
        },
        {
          id: 'job-4',
          title: 'Guard government IDs:',
          detail:
            'Never release Social Security, Tax ID numbers, or banking deposit authorizations without a formally signed offer letter under video verification.',
        },
      ],
    },
  },
  {
    id: 'fake-shopping-websites',
    categoryId: 'shopping',
    categoryLabel: 'Online Shopping',
    readTime: '4 min read',
    icon: 'shopping',
    title: 'How to identify fake shopping websites',
    description:
      'Spot unverified clearance storefronts, inspect domain registration age, and evaluate counterfeit reviews before entering your credit card.',
    footerTag: 'Consumer Protection',
    isDanger: false,
    article: {
      badge: 'E-Commerce Defense',
      publishedAt: 'Published Oct 19, 2024',
      readTime: '4 min read',
      author: 'By Kawach Research Desk',
      title: 'Deep Dive: Spotting Cloned Clearance Storefronts & Payment Traps',
      assurance:
        'Written to inform, not alarm. A 30-second storefront check prevents unauthorized card charges.',
      setupHeading: 'The Setup: Social Media Ads Linking to Overnight Clones',
      setupParagraphs: [
        'Fraudulent storefronts frequently buy sponsored ads on social feeds advertising 70–85% seasonal clearance discounts on popular electronics, winter apparel, or footwear. They copy legitimate product photography directly from authentic brands.',
        'Once you reach checkout, the site pushes direct bank transfers, debit cards, or unverified UPI links so buyers lack chargeback protection when nothing arrives.',
      ],
      redFlags: [
        {
          id: 1,
          title: 'Newly Registered Domains',
          detail:
            'Domain WHOIS created within the past 30 days using generic suffixes like .shop, .top, or .store.',
        },
        {
          id: 2,
          title: 'Impossible Pricing',
          detail:
            'Flagship current-season goods listed at 75%+ off across the entire catalog with countdown timers.',
        },
        {
          id: 3,
          title: 'No Physical Address',
          detail:
            'Contact pages feature only a generic web form or disposable email without verifiable corporate registration.',
        },
        {
          id: 4,
          title: 'Copied Policy Pages',
          detail:
            'Return and privacy policies reference another store name or contain awkward broken templates.',
        },
      ],
      messageSource: 'Web Ad • Sponsored Link',
      messageTime: 'Oct 19, 04:15 PM',
      messageCopy:
        'FINAL 2 HOURS: Official Winter Warehouse Clearance — 80% OFF all jackets! Free express shipping today only at nordic-outdoors-clearance-sale.shop',
      deceptionSignals:
        'Deception Signals: Artificial countdown urgency • Newly registered .shop domain • Scraped brand photos',
      checklist: [
        {
          id: 'shop-1',
          title: 'Check domain age first:',
          detail:
            'Run unfamiliar storefront URLs through Kawach Website Checker to verify registration longevity.',
          defaultChecked: true,
        },
        {
          id: 'shop-2',
          title: 'Search independent reviews:',
          detail:
            'Look up the store name alongside "scam" or "reviews" outside of the site itself.',
        },
        {
          id: 'shop-3',
          title: 'Avoid direct debit or wire:',
          detail:
            'Use credit cards or virtual single-use cards with buyer dispute protection rather than direct bank transfers.',
        },
        {
          id: 'shop-4',
          title: 'Verify official brand outlets:',
          detail:
            'Confirm whether the brand actually runs a separate clearance domain on its main verified website.',
        },
      ],
    },
  },
  {
    id: 'avoid-payment-scams',
    categoryId: 'banking',
    categoryLabel: 'Banking & Payments',
    readTime: '5 min read',
    icon: 'card',
    title: 'How to avoid payment scams',
    description:
      'Understand fake payment screenshots, urgent UPI or wire transfer requests, and why legitimate buyers never ask you to scan a QR code to "receive" money.',
    footerTag: 'High Financial Impact',
    isDanger: false,
    article: {
      badge: 'Payment Safety',
      publishedAt: 'Published Oct 17, 2024',
      readTime: '5 min read',
      author: 'By Kawach Research Desk',
      title: 'Deep Dive: QR Code Collect Requests & Fake Payment Receipts',
      assurance:
        'Written to inform, not alarm. Knowing one golden rule stops almost all peer-to-peer payment scams.',
      setupHeading: 'The Setup: Reversing the Flow of Money',
      setupParagraphs: [
        'On classifieds marketplaces or rental listings, scammers pose as eager buyers ready to pay immediately without inspecting the item. Instead of sending money, they send a QR code or "payment collect link" claiming you must scan and enter your PIN to accept the funds.',
        'In reality, entering a UPI or banking PIN always authorizes an outgoing deduction—never an incoming deposit.',
      ],
      redFlags: [
        {
          id: 1,
          title: 'PIN to Receive Funds',
          detail:
            'Anyone claiming you must scan a QR code, click a collect link, or enter a PIN to receive money.',
        },
        {
          id: 2,
          title: 'Screenshot-Only Proof',
          detail:
            'Buyers sending altered payment confirmation images while pressuring immediate handover before bank settlement.',
        },
        {
          id: 3,
          title: 'Overpayment Tricks',
          detail:
            'Sender claims they accidentally transferred extra funds and urgently asks you to refund the difference.',
        },
        {
          id: 4,
          title: 'Off-Platform Pressure',
          detail:
            'Insisting on moving from protected marketplace escrow to private messaging and instant wire apps.',
        },
      ],
      messageSource: 'WhatsApp • Marketplace Buyer',
      messageTime: 'Oct 17, 02:20 PM',
      messageCopy:
        'I have sent the ₹12,000 advance from my business army account. Please scan this QR code and enter your UPI PIN to credit the amount to your bank.',
      deceptionSignals:
        'Deception Signals: PIN requested for incoming transfer • False authority claim • Off-platform urgency',
      checklist: [
        {
          id: 'pay-1',
          title: 'Remember: PIN = Pay Out:',
          detail:
            'Never scan a QR code or enter your UPI/banking PIN to receive money—incoming deposits require zero action from you.',
          defaultChecked: true,
        },
        {
          id: 'pay-2',
          title: 'Verify inside your bank app:',
          detail:
            'Do not trust SMS alerts or WhatsApp screenshots; open your official banking app to verify cleared balance.',
        },
        {
          id: 'pay-3',
          title: 'Keep marketplace payments in-app:',
          detail:
            'Reject requests to pay courier fees or verification deposits outside the official platform.',
        },
        {
          id: 'pay-4',
          title: 'Block & report immediately:',
          detail:
            'If pressured with fake army/official IDs or urgency, cease conversation and report the account.',
        },
      ],
    },
  },
  {
    id: 'protect-personal-information',
    categoryId: 'identity',
    categoryLabel: 'Identity & Privacy',
    readTime: '4 min read',
    icon: 'shield',
    title: 'How to protect personal information',
    description:
      'Practical hygiene steps using password managers, enabling passkeys/hardware 2FA, shredding physical paperwork, and freezing your credit files.',
    footerTag: 'Everyday Hygiene',
    isDanger: false,
    article: {
      badge: 'Identity Defense',
      publishedAt: 'Published Oct 14, 2024',
      readTime: '4 min read',
      author: 'By Kawach Research Desk',
      title: 'Deep Dive: High-Leverage Habits That Stop Account Takeovers',
      assurance:
        'Written to inform, not alarm. Small defaults protect 95% of your digital footprint automatically.',
      setupHeading: 'The Setup: Why Reused Passwords Cascade Across Accounts',
      setupParagraphs: [
        'Most personal account breaches do not involve targeted hacking. Attackers take leaked email-and-password pairs from one minor website breach and test them automatically across banking, shopping, and primary email accounts.',
        'Breaking password reuse on your primary email and enabling phishing-resistant multi-factor authentication locks out automated credential stuffing.',
      ],
      redFlags: [
        {
          id: 1,
          title: 'Password Reuse',
          detail:
            'Using the same passphrase across email, banking, and everyday retail logins.',
        },
        {
          id: 2,
          title: 'SMS-Only 2FA on High-Value Accounts',
          detail:
            'Relying solely on text-message codes where SIM swap or reverse-proxy interception is possible.',
        },
        {
          id: 3,
          title: 'Oversharing Verification Clues',
          detail:
            'Public social profiles displaying full birthdate, phone number, or answers to common security questions.',
        },
        {
          id: 4,
          title: 'Unmonitored Credit Inquiries',
          detail:
            'Leaving credit reports unlocked when not actively applying for loans or cards.',
        },
      ],
      messageSource: 'System Security Advisory',
      messageTime: 'Oct 14, 10:00 AM',
      messageCopy:
        'Security Alert: A new login attempt from an unrecognized device was detected using an older password associated with a 2021 third-party forum leak.',
      deceptionSignals:
        'Risk Signals: Credential stuffing exposure • Shared password across sites • Weak secondary recovery',
      checklist: [
        {
          id: 'id-1',
          title: 'Secure your primary email first:',
          detail:
            'Give your main email account a unique 16+ character passphrase and passkey or authenticator app 2FA.',
          defaultChecked: true,
        },
        {
          id: 'id-2',
          title: 'Use a password manager:',
          detail:
            'Generate unique passwords for every site; password managers also warn you by failing to autofill on lookalike domains.',
        },
        {
          id: 'id-3',
          title: 'Review app permissions quarterly:',
          detail:
            'Remove unused third-party OAuth logins connected to your Google or Apple accounts.',
        },
        {
          id: 'id-4',
          title: 'Lock sensitive documents:',
          detail:
            'Avoid sending unencrypted photos of ID cards or tax documents over public messaging threads.',
        },
      ],
    },
  },
  {
    id: 'suspect-scammed-response',
    categoryId: 'emergency',
    categoryLabel: 'Emergency Response',
    readTime: '5 min read',
    icon: 'alert',
    title: "What to do if you suspect you've been scammed",
    description:
      'Immediate triage steps for the first 24 hours: freezing bank access, securing compromised accounts, and reporting safely.',
    footerTag: 'Action Checklist',
    isDanger: true,
    article: {
      badge: 'Incident Triage',
      publishedAt: 'Published Oct 23, 2024',
      readTime: '5 min read',
      author: 'By Kawach Incident Response',
      title: 'Emergency Playbook: Your Calm First-Hour Containment Checklist',
      assurance:
        'Take a deep breath. Acting calmly in the first 30 minutes dramatically improves financial recovery.',
      setupHeading: 'First Priority: Stop Active Transfers & Lock Credentials',
      setupParagraphs: [
        'Scammers rely on panic and embarrassment to delay your response. Remember that reporting quickly gives banks and cybercrime helplines the highest chance of freezing disputed funds before they leave the clearing rail.',
        'Follow the containment checklist below in exact order—financial institutions first, primary email second, device hygiene third.',
      ],
      redFlags: [
        {
          id: 1,
          title: 'Shared OTP or Card PIN',
          detail:
            'You typed credentials or read out a one-time password to a caller or unfamiliar webpage.',
        },
        {
          id: 2,
          title: 'Installed Remote Screen App',
          detail:
            'A "support agent" instructed you to install AnyDesk, TeamViewer, or an APK file.',
        },
        {
          id: 3,
          title: 'Unauthorized Debit Alert',
          detail:
            'Unexpected transaction notifications or password-reset emails you did not initiate.',
        },
        {
          id: 4,
          title: 'Follow-Up "Recovery" Scams',
          detail:
            'Strangers online claiming they can hack back lost funds for an upfront fee—these are secondary scams.',
        },
      ],
      messageSource: 'Emergency Triage Protocol',
      messageTime: 'Active 24/7 Helpline',
      messageCopy:
        'If you just authorized an unintended bank/UPI transaction, immediately call your bank fraud desk and file a rapid hold request on the National Cyber Helpline (1930).',
      deceptionSignals:
        'Priority Triage: Immediate card freeze • Revoke active remote-access tools • Preserve screenshots & TXN IDs',
      checklist: [
        {
          id: 'em-1',
          title: 'Call your bank fraud line immediately:',
          detail:
            'Use the official phone number printed on the back of your card to freeze netbanking, UPI, and affected cards.',
          defaultChecked: true,
        },
        {
          id: 'em-2',
          title: 'Disconnect & uninstall remote apps:',
          detail:
            'Turn off Wi-Fi/mobile data temporarily if you installed an unknown APK or screen-sharing app, then uninstall it.',
        },
        {
          id: 'em-3',
          title: 'Change reused passwords & revoke sessions:',
          detail:
            'Reset your primary email and banking passwords from a clean device and sign out of all active sessions.',
        },
        {
          id: 'em-4',
          title: 'File an official cyber report:',
          detail:
            'Save screenshots, URLs, and transaction reference IDs, call helpline 1930, and log the threat in Kawach Report a Scam.',
        },
      ],
    },
  },
];
