export const SAMPLE_CONTRACTS = [
  {
    id: "msa-bigcorp",
    name: "Enterprise_Master_Services_Agreement_v4.docx",
    client: "Global FinCorp Inc.",
    contractValue: "$45,000",
    riskScore: "HIGH_RISK (3 Critical / 2 Moderate)",
    clauses: [
      {
        id: "clause-indemnity",
        category: "Indemnification & Liability",
        severity: "CRITICAL",
        toxicTitle: "Unlimited Personal Indemnity Trap",
        originalText: "Contractor agrees to indemnify, defend, and hold harmless Client, its officers, directors, and affiliates from any and all damages, liabilities, losses, costs, and expenses (including attorneys' fees) arising out of or related to Contractor's performance, without limitation or liability cap.",
        threatAnalysis: "Exposes your personal assets to uncapped commercial lawsuits even for minor bugs or client misconfigurations.",
        counterProposal: "Contractor's aggregate liability under this Agreement shall strictly be limited to the total fees actually paid to Contractor by Client in the preceding three (3) months. In no event shall Contractor be liable for consequential or indirect damages."
      },
      {
        id: "clause-ip",
        category: "Intellectual Property Transfer",
        severity: "CRITICAL",
        toxicTitle: "Immediate IP Transfer Prior to Payment",
        originalText: "All work product, concepts, designs, and code created by Contractor shall become the immediate and exclusive property of Client upon inception, regardless of payment status or invoicing dispute.",
        threatAnalysis: "Client legally owns your source code and design assets even if they ghost or refuse to pay your final invoice.",
        counterProposal: "Title, copyright, and ownership rights in Deliverables shall transfer to Client exclusively and conditioned upon receipt of full and final payment by Contractor."
      },
      {
        id: "clause-net90",
        category: "Payment Terms",
        severity: "HIGH",
        toxicTitle: "Net-90 + 'Pay-When-Paid' Trap",
        originalText: "Invoices shall be payable within ninety (90) days of receipt, subject to Client milestone satisfaction and end-client payment clearance ('Pay-When-Paid').",
        threatAnalysis: "You are forced to finance the enterprise client's payroll interest-free for 3+ months with zero guarantee of payment if their customer delays.",
        counterProposal: "Invoices are payable Net-15 from receipt. Delinquent payments shall accrue interest at 1.5% per month or the statutory maximum. Work stoppage may occur if accounts exceed 30 days past due."
      },
      {
        id: "clause-noncompete",
        category: "Restrictive Covenants",
        severity: "HIGH",
        toxicTitle: "Draconian 24-Month Sector Non-Compete",
        originalText: "Contractor agrees not to provide software engineering or consulting services to any entity operating in the fintech or digital payments sector for twenty-four (24) months post-termination.",
        threatAnalysis: "De facto ban from working in your specialized vertical for two full years after contract conclusion.",
        counterProposal: "Contractor agrees only not to solicit Client's specifically named direct clients for a period of six (6) months. No broad industry non-compete shall restrict Contractor's general trade."
      }
    ]
  }
];
