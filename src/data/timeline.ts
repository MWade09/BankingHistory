export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  chapter: string;
  significance: 'high' | 'medium' | 'low';
  category: 'biblical' | 'financial' | 'political' | 'prophetic';
}

export const timelineEvents: TimelineEvent[] = [
  // Ancient Foundations (0-600 AD)
  {
    year: -2000,
    title: "Joseph's Economic Control",
    description: "Joseph implements currency manipulation in Egypt, creating progressive slavery through food scarcity and money hoarding",
    chapter: "ancient-foundations",
    significance: 'high',
    category: 'biblical'
  },
  {
    year: -600,
    title: "First Coins Minted",
    description: "Lydia issues the world's first coins, transforming gold and silver from commodities into currency",
    chapter: "ancient-foundations",
    significance: 'high',
    category: 'financial'
  },
  {
    year: -431,
    title: "Peloponnesian War Begins",
    description: "30-year war between Athens and Sparta begins - will demonstrate that financial strength determines military outcomes",
    chapter: "ancient-foundations",
    significance: 'high',
    category: 'political'
  },
  {
    year: -430,
    title: "Athenian Currency Crisis",
    description: "Athens debases its currency during Peloponnesian War, creating first recorded inflation and financial collapse",
    chapter: "ancient-foundations",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: -404,
    title: "Athens Surrenders to Sparta",
    description: "Financial strain from 30 years of currency debasement forces Athens to surrender - lost economic war, not military war",
    chapter: "ancient-foundations",
    significance: 'high',
    category: 'political'
  },
  {
    year: -48,
    title: "Julius Caesar's Monetary Reform",
    description: "Caesar returns from Gaul with war-plunder gold/silver, mints abundant coins, reforms usury laws, redistributes land",
    chapter: "ancient-foundations",
    significance: 'high',
    category: 'political'
  },
  {
    year: -44,
    title: "Caesar Assassinated by Senators",
    description: "Money-changing merchant senators murder Caesar for monetary reforms serving people rather than banking elite",
    chapter: "ancient-foundations",
    significance: 'high',
    category: 'political'
  },
  {
    year: 30,
    title: "Jesus Cleanses Temple",
    description: "Christ violently opposes financial oppression in the temple - the only recorded use of violence by Jesus",
    chapter: "ancient-foundations",
    significance: 'high',
    category: 'biblical'
  },
  {
    year: 33,
    title: "Jesus Crucified",
    description: "Christ's crucifixion after challenging religious and financial authorities - ultimate sacrifice for humanity's redemption",
    chapter: "ancient-foundations",
    significance: 'high',
    category: 'biblical'
  },
  {
    year: 200,
    title: "Roman Currency Debasement Begins",
    description: "Roman emperors begin systematically reducing silver content in coins to fund military expansion",
    chapter: "ancient-foundations",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 301,
    title: "Diocletian's Price Controls",
    description: "Roman Empire attempts to fight inflation caused by currency debasement with price controls - fails catastrophically",
    chapter: "ancient-foundations",
    significance: 'medium',
    category: 'political'
  },

  // Medieval Banking (600-1400 AD)
  {
    year: 1000,
    title: "Byzantine Empire Currency Crisis",
    description: "Byzantine emperors debase gold solidus from 100% to 8% precious metal content - empire begins terminal decline",
    chapter: "medieval-banking",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1100,
    title: "Chinese Paper Money",
    description: "China introduces paper money as substitute for real wealth (gold/silver) - concept spreads to Europe via Marco Polo",
    chapter: "medieval-banking",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1100,
    title: "English Tally Sticks",
    description: "England uses wooden tally sticks for taxation and currency, proving money doesn't need coins or paper",
    chapter: "medieval-banking",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1180,
    title: "Medieval France Currency Debasement",
    description: "French kings systematically debase currency from 100% to 1% precious metal content to fund Hundred Years War",
    chapter: "medieval-banking",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1200,
    title: "European Goldsmiths Banking",
    description: "Goldsmiths discover fractional reserve banking - creating money from thin air and manipulating business cycles",
    chapter: "medieval-banking",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1250,
    title: "Usury Laws Circumvented",
    description: "European merchants develop techniques to evade Church prohibition on usury - foundation of modern banking deception",
    chapter: "medieval-banking",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1300,
    title: "Italian Bond Markets",
    description: "Northern Italian city-states create bonds to fund mercenary wars - establishing modern government debt systems",
    chapter: "medieval-banking",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1340,
    title: "Venetian Bonds Trade at 10%",
    description: "Venice's government bonds collapse to 10% of face value - demonstrating bond market manipulation patterns",
    chapter: "medieval-banking",
    significance: 'low',
    category: 'financial'
  },

  // Rise of Banking Houses (1400-1700)
  {
    year: 1397,
    title: "Medici Bank Founded",
    description: "Giovanni de' Medici establishes banking dynasty that will dominate European finance for centuries",
    chapter: "banking-houses",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1400,
    title: "Medici Banking Empire",
    description: "Giovanni de' Medici circumvents usury laws, creating the world's first international banking network",
    chapter: "banking-houses",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1545,
    title: "Potosi Silver Mountain Discovered",
    description: "Spanish discovery of massive silver deposits in Bolivia finances empire but causes European inflation",
    chapter: "banking-houses",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1602,
    title: "Dutch East India Company",
    description: "First corporation to issue shares - creates stock exchange and demonstrates corporate power over nations",
    chapter: "banking-houses",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1609,
    title: "Bank of Amsterdam Founded",
    description: "First modern central bank - accepts deposits and issues credit, pioneering fractional reserve system",
    chapter: "banking-houses",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1637,
    title: "Tulip Bubble Collapse",
    description: "Dutch tulip mania demonstrates how greed and fear drive market prices beyond supply and demand",
    chapter: "banking-houses",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1688,
    title: "William of Orange Invades England",
    description: "Dutch banker-backed invasion overthrows English monarchy - sets stage for Bank of England creation",
    chapter: "banking-houses",
    significance: 'high',
    category: 'political'
  },
  {
    year: 1694,
    title: "Bank of England Chartered",
    description: "First privately-owned national central bank created - template for modern central banking control",
    chapter: "banking-houses",
    significance: 'high',
    category: 'financial'
  },

  // Industrial Revolution & Central Banking (1700-1900)
  {
    year: 1716,
    title: "John Law's Mississippi Scheme",
    description: "Scottish gambler becomes France's finance minister, creates massive speculation bubble demonstrating greed psychology",
    chapter: "industrial-revolution",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1720,
    title: "John Law's Mississippi Bubble",
    description: "Scottish con man becomes France's finance minister, creates massive bubble and demonstrates speculation vs real wealth",
    chapter: "industrial-revolution",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1764,
    title: "Currency Act Enacted",
    description: "British Crown bans American colonies from issuing their own currency - sparks revolution more than tea tax",
    chapter: "industrial-revolution",
    significance: 'high',
    category: 'political'
  },
  {
    year: 1776,
    title: "American Revolution",
    description: "Colonists rebel against British currency restrictions - war fought over monetary control, not just taxation",
    chapter: "industrial-revolution",
    significance: 'high',
    category: 'political'
  },
  {
    year: 1781,
    title: "Bank of North America",
    description: "First attempt at American central bank - fails due to public opposition to private banking control",
    chapter: "industrial-revolution",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1791,
    title: "First Bank of United States",
    description: "Hamilton establishes 20-year central bank charter - Jefferson opposes as unconstitutional banker control",
    chapter: "industrial-revolution",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1811,
    title: "First Bank Charter Expires",
    description: "Congress refuses to renew central bank charter - bankers retaliate with War of 1812 financial manipulation",
    chapter: "industrial-revolution",
    significance: 'medium',
    category: 'political'
  },
  {
    year: 1815,
    title: "Rothschild Waterloo Coup",
    description: "Nathan Rothschild's false Napoleon victory rumor enables massive Bank of England bond purchase at pennies on dollar",
    chapter: "industrial-revolution",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1816,
    title: "Second Bank of United States",
    description: "New 20-year central bank chartered after War of 1812 financial chaos - Jackson later destroys it",
    chapter: "industrial-revolution",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1832,
    title: "Jackson Vetoes Bank Recharter",
    description: "President Andrew Jackson refuses to renew central bank: 'You are a den of vipers and thieves. I intend to rout you out'",
    chapter: "industrial-revolution",
    significance: 'high',
    category: 'political'
  },
  {
    year: 1835,
    title: "Jackson Assassination Attempt",
    description: "Richard Lawrence attempts to kill Jackson - both pistols misfire miraculously. Lawrence: 'Money will be more plenty'",
    chapter: "industrial-revolution",
    significance: 'medium',
    category: 'political'
  },
  {
    year: 1836,
    title: "Second Bank Charter Expires",
    description: "Jackson successfully prevents central bank renewal - America enters period without central banking control",
    chapter: "industrial-revolution",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1857,
    title: "Panic of 1857",
    description: "Bankers contract money supply causing economic crisis - punishing America for lacking central bank",
    chapter: "industrial-revolution",
    significance: 'low',
    category: 'financial'
  },
  {
    year: 1861,
    title: "Civil War Begins",
    description: "American Civil War begins - bankers offer Lincoln loans at 24-36% interest to fund Union war effort",
    chapter: "industrial-revolution",
    significance: 'high',
    category: 'political'
  },
  {
    year: 1862,
    title: "Legal Tender Act",
    description: "Lincoln authorizes printing of debt-free Greenbacks rather than borrowing from bankers - prints $450 million",
    chapter: "industrial-revolution",
    significance: 'high',
    category: 'political'
  },
  {
    year: 1863,
    title: "Lincoln's Greenback",
    description: "Lincoln prints debt-free currency to fund Civil War, avoiding banker control - contributes to assassination motive",
    chapter: "industrial-revolution",
    significance: 'high',
    category: 'political'
  },
  {
    year: 1865,
    title: "Lincoln Assassinated",
    description: "President Lincoln murdered days after Civil War ends - monetary reform removed immediately after death",
    chapter: "industrial-revolution",
    significance: 'high',
    category: 'political'
  },
  {
    year: 1873,
    title: "Coinage Act Demonetizes Silver",
    description: "America removes silver from circulation, contracts money supply, creates long depression favoring gold-controlling bankers",
    chapter: "industrial-revolution",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1881,
    title: "Garfield Assassination",
    description: "President Garfield murdered months after declaring: 'He who controls the volume of money is absolute master'",
    chapter: "industrial-revolution",
    significance: 'medium',
    category: 'political'
  },
  {
    year: 1893,
    title: "Morgan-Rothschild Gold Manipulation",
    description: "JP Morgan and August Belmont create banking panic, force gold-for-bonds exchange, consolidate American wealth",
    chapter: "industrial-revolution",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1896,
    title: "William Jennings Bryan Campaign",
    description: "Bryan runs for president opposing gold standard: 'You shall not crucify mankind upon a cross of gold' - defeated by banker money",
    chapter: "industrial-revolution",
    significance: 'medium',
    category: 'political'
  },

  // Federal Reserve Era (1900-1971)
  {
    year: 1907,
    title: "Panic of 1907",
    description: "JP Morgan orchestrates banking panic to demonstrate need for central bank - creates financial crisis to justify Fed",
    chapter: "federal-reserve",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1910,
    title: "Jekyll Island Meeting",
    description: "Morgan, Rothschild, and Rockefeller representatives secretly plan Federal Reserve creation at JP Morgan resort",
    chapter: "federal-reserve",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1912,
    title: "Titanic Sinking",
    description: "Opposition to Federal Reserve (Astor, Guggenheim, Strauss) dies when Titanic sinks - JP Morgan cancels his ticket",
    chapter: "federal-reserve",
    significance: 'low',
    category: 'political'
  },
  {
    year: 1913,
    title: "Federal Reserve Act Passed",
    description: "Private central bank gains control of American money supply - 128-year banker victory over American independence",
    chapter: "federal-reserve",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1913,
    title: "Income Tax Amendment",
    description: "16th Amendment (never properly ratified) enables wealth transfer from labor to bankers through voluntary taxation",
    chapter: "federal-reserve",
    significance: 'high',
    category: 'political'
  },
  {
    year: 1914,
    title: "World War I Begins",
    description: "Federal Reserve's first major operation - finances both sides of war, establishes pattern of profiting from conflict",
    chapter: "federal-reserve",
    significance: 'high',
    category: 'political'
  },
  {
    year: 1920,
    title: "Agricultural Depression",
    description: "Fed contracts money supply 50% causing farm foreclosures - demonstrates boom-bust cycle control mechanism",
    chapter: "federal-reserve",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1921,
    title: "Council on Foreign Relations Founded",
    description: "Banker-created CFR established to influence US foreign policy toward globalist banking interests",
    chapter: "federal-reserve",
    significance: 'medium',
    category: 'political'
  },
  {
    year: 1929,
    title: "Wall Street Crash",
    description: "Bankers reverse decade-long credit expansion, crash market, transfer wealth through asset seizure",
    chapter: "federal-reserve",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1930,
    title: "Bank for International Settlements",
    description: "BIS created in Basel, Switzerland - central bank of central banks, immune from all national laws",
    chapter: "federal-reserve",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1933,
    title: "Gold Confiscation Order",
    description: "Executive Order 6102 forces Americans to surrender gold to Federal Reserve, followed by 60% currency devaluation",
    chapter: "federal-reserve",
    significance: 'high',
    category: 'political'
  },
  {
    year: 1934,
    title: "Gold Reserve Act",
    description: "FDR revalues gold from $20.67 to $35 per ounce - 69% devaluation transfers wealth to those who confiscated gold",
    chapter: "federal-reserve",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1944,
    title: "Bretton Woods Agreement",
    description: "44 nations peg currencies to US dollar at $35/ounce gold - dollar becomes 'as good as gold'",
    chapter: "federal-reserve",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1954,
    title: "Bilderberg Group Founded",
    description: "Secret meeting of global banking, political, and corporate elite begins annual conferences to coordinate policy",
    chapter: "federal-reserve",
    significance: 'medium',
    category: 'political'
  },
  {
    year: 1963,
    title: "Kennedy Assassination",
    description: "Financial implications include silver removal, Great Society socialism expansion, and Vietnam War escalation",
    chapter: "federal-reserve",
    significance: 'medium',
    category: 'political'
  },
  {
    year: 1963,
    title: "Executive Order 11110",
    description: "Kennedy authorizes Treasury to issue silver certificates bypassing Federal Reserve - assassinated 5 months later",
    chapter: "federal-reserve",
    significance: 'high',
    category: 'political'
  },
  {
    year: 1965,
    title: "Silver Removed from Coins",
    description: "US removes silver from quarters and dimes - pure fiat currency begins replacing precious metal money",
    chapter: "federal-reserve",
    significance: 'medium',
    category: 'financial'
  },

  // Fiat Currency System (1971-2008)
  {
    year: 1971,
    title: "Nixon Shock",
    description: "Nixon ends dollar-gold convertibility - world's most traded currencies now backed by nothing but confidence",
    chapter: "fiat-system",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1973,
    title: "OPEC Oil Embargo",
    description: "Arab oil producers embargo US - creates crisis that enables petrodollar system creation",
    chapter: "fiat-system",
    significance: 'high',
    category: 'political'
  },
  {
    year: 1974,
    title: "Kissinger-Saudi Negotiations",
    description: "Henry Kissinger makes Saudi Arabia 'offer they couldn't refuse' to sell oil exclusively in dollars",
    chapter: "fiat-system",
    significance: 'high',
    category: 'political'
  },
  {
    year: 1975,
    title: "Petrodollar Agreement",
    description: "Kissinger-Saudi deal: oil sold exclusively in dollars in exchange for military protection and investment",
    chapter: "fiat-system",
    significance: 'high',
    category: 'political'
  },
  {
    year: 1979,
    title: "Volcker's Interest Rate Shock",
    description: "Extreme interest rate increases create third-world debt crisis while strengthening dollar as reserve currency",
    chapter: "fiat-system",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1980,
    title: "Gold Peaks at $850",
    description: "Gold reaches all-time high as inflation fears peak - then systematically suppressed through paper market manipulation",
    chapter: "fiat-system",
    significance: 'low',
    category: 'financial'
  },
  {
    year: 1987,
    title: "Black Monday Stock Crash",
    description: "Greenspan begins 'too big to fail' policy, pumping Federal Reserve notes into markets after crashes",
    chapter: "fiat-system",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1994,
    title: "Long-Term Capital Management",
    description: "Nobel Prize-winning hedge fund loses $4.6 billion in 4 months, nearly collapses global financial system",
    chapter: "fiat-system",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1998,
    title: "LTCM Bailout",
    description: "Fed orchestrates $3.6 billion private bailout - establishes precedent for rescuing reckless speculation",
    chapter: "fiat-system",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1999,
    title: "Glass-Steagall Repeal",
    description: "Clinton removes Depression-era banking restrictions, enables commercial-investment banking merger speculation",
    chapter: "fiat-system",
    significance: 'high',
    category: 'political'
  },
  {
    year: 2000,
    title: "Iraq Switches to Euro",
    description: "Saddam Hussein announces Iraqi oil sales in euros instead of dollars - invasion follows 3 years later",
    chapter: "fiat-system",
    significance: 'medium',
    category: 'political'
  },
  {
    year: 2001,
    title: "9/11 Financial Implications",
    description: "$2.3 trillion Pentagon accounting loss, insurance fraud, bond clearing, oil manipulation - $10+ trillion total motive",
    chapter: "fiat-system",
    significance: 'high',
    category: 'political'
  },
  {
    year: 2003,
    title: "Iraq War Begins",
    description: "US invades Iraq 3 years after oil switched to euros - first oil sold after invasion is in dollars, not euros",
    chapter: "fiat-system",
    significance: 'high',
    category: 'political'
  },
  {
    year: 2006,
    title: "Housing Bubble Peak",
    description: "US housing prices reach unsustainable peak - subprime mortgages bundled into toxic derivatives about to explode",
    chapter: "fiat-system",
    significance: 'high',
    category: 'financial'
  },

  // Modern Financial Control (2008-Present)
  {
    year: 2007,
    title: "Bear Stearns Hedge Funds Collapse",
    description: "Two Bear Stearns hedge funds investing in subprime mortgages fail - first domino in financial crisis",
    chapter: "modern-control",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 2008,
    title: "Financial Crisis",
    description: "Derivatives bubble collapse leads to massive bailouts, 'too big to fail' institutionalized, wealth transferred to banks",
    chapter: "modern-control",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 2008,
    title: "Lehman Brothers Collapse",
    description: "Investment bank failure triggers global panic - Fed/Treasury selectively bail out some institutions while sacrificing others",
    chapter: "modern-control",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 2008,
    title: "TARP Bailout Passed",
    description: "Congress threatened with martial law, passes $700 billion bank bailout - government serves financial elite, not people",
    chapter: "modern-control",
    significance: 'high',
    category: 'political'
  },
  {
    year: 2008,
    title: "Fed Extends $9 Trillion",
    description: "Federal Reserve extends $9 trillion in loans/guarantees - Inspector General can't say where money went",
    chapter: "modern-control",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 2009,
    title: "Quantitative Easing Begins",
    description: "Central banks print trillions, inflate asset bubbles, increase wealth inequality while claiming economic recovery",
    chapter: "modern-control",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 2011,
    title: "Libya NATO Intervention",
    description: "Gaddafi murdered after proposing gold dinar for African oil sales - petrodollar enforced through military violence",
    chapter: "modern-control",
    significance: 'medium',
    category: 'political'
  },
  {
    year: 2013,
    title: "Eric Holder Too Big to Prosecute",
    description: "Attorney General admits mega banks immune from criminal prosecution due to size - two-tier justice system formalized",
    chapter: "modern-control",
    significance: 'high',
    category: 'political'
  },
  {
    year: 2016,
    title: "India Demonetization",
    description: "India suddenly bans 86% of currency - dry run for cashless society, causes severe economic disruption",
    chapter: "modern-control",
    significance: 'medium',
    category: 'political'
  },
  {
    year: 2019,
    title: "Repo Market Crisis",
    description: "Federal Reserve forced to inject hundreds of billions into overnight lending markets - system on verge of collapse",
    chapter: "modern-control",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 2020,
    title: "COVID-19 Economic Response",
    description: "Pandemic used to accelerate digital control, massive currency printing, preparation for central bank digital currencies",
    chapter: "modern-control",
    significance: 'high',
    category: 'political'
  },
  {
    year: 2020,
    title: "Fed Balance Sheet $7 Trillion",
    description: "Federal Reserve balance sheet explodes from $4T to $7T in months - unprecedented money creation",
    chapter: "modern-control",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 2021,
    title: "Inflation Returns",
    description: "Massive money printing causes inflation spike - officially 7-9%, real inflation 15-20% hurting working class",
    chapter: "modern-control",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 2022,
    title: "Central Bank Digital Currency Push",
    description: "CBDCs rolled out globally - absolute control over spending, complete surveillance, programmable money system",
    chapter: "modern-control",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 2022,
    title: "Canada Freezes Trucker Accounts",
    description: "Canadian government freezes bank accounts of trucker protesters without trial - demonstrates CBDC control capabilities",
    chapter: "modern-control",
    significance: 'high',
    category: 'political'
  },
  {
    year: 2023,
    title: "Silicon Valley Bank Collapse",
    description: "Second-largest bank failure in US history triggers fears of systemic crisis - Fed steps in with unlimited bailouts",
    chapter: "modern-control",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 2024,
    title: "130+ Countries Developing CBDCs",
    description: "IMF reports 98% of global GDP represented by countries developing central bank digital currencies",
    chapter: "modern-control",
    significance: 'high',
    category: 'financial'
  },

  // Biblical Prophecy & Future
  {
    year: 95,
    title: "Book of Revelation Written",
    description: "Apostle John records prophecy of end-times financial control system - mark of beast preventing buying/selling",
    chapter: "biblical-prophecy",
    significance: 'high',
    category: 'biblical'
  },
  {
    year: 1984,
    title: "Dimitru Duduman's Vision",
    description: "Romanian pastor receives prophetic warning of America's destruction through nuclear attacks and foreign invasion",
    chapter: "biblical-prophecy",
    significance: 'medium',
    category: 'prophetic'
  },
  {
    year: 1988,
    title: "Economist Magazine Phoenix",
    description: "Rothschild publication shows phoenix rising from burning currencies with digital coin dated 2018 - prophetic symbol",
    chapter: "biblical-prophecy",
    significance: 'high',
    category: 'prophetic'
  },
  {
    year: 2018,
    title: "Economist Prophecy Date Passes",
    description: "Year 2018 shown on Economist phoenix cover comes and goes without complete system transformation - proves elites not all-powerful",
    chapter: "biblical-prophecy",
    significance: 'medium',
    category: 'prophetic'
  },
  {
    year: 2025,
    title: "Prophetic Convergence",
    description: "Digital ID, social credit scores, CBDC implementation, and spiritual preparation for end-times financial system",
    chapter: "biblical-prophecy",
    significance: 'high',
    category: 'prophetic'
  },
  {
    year: 2030,
    title: "Prophesied Timeframe",
    description: "Approximate timeframe for major prophesied events based on Duduman's vision (10 years from 2020) - prayer can delay judgment",
    chapter: "biblical-prophecy",
    significance: 'high',
    category: 'prophetic'
  }
];

export const chapters = [
  {
    slug: 'ancient-foundations',
    title: 'Ancient Foundations',
    period: '2000 BC - 600 AD',
    description: 'From biblical currency manipulation to the first coins and early financial systems',
    color: 'from-amber-600 to-orange-700',
    image: '/images/chapters/ancient-foundations.png',
  },
  {
    slug: 'medieval-banking',
    title: 'Medieval Banking',
    period: '600 - 1400 AD',
    description: 'The emergence of paper money, fractional reserve banking, and early bond markets',
    color: 'from-orange-600 to-red-700',
    image: '/images/chapters/fractional-reserve-banking.png'
  },
  {
    slug: 'banking-houses',
    title: 'Rise of Banking Houses',
    period: '1400 - 1700 AD',
    description: 'From the Medici empire to the Bank of England and early stock exchanges',
    color: 'from-red-600 to-rose-700',
    image: '/images/chapters/banking-houses.png'
  },
  {
    slug: 'industrial-revolution',
    title: 'Industrial Revolution & Central Banking',
    period: '1700 - 1900 AD',
    description: 'The Rothschild empire, American financial wars, and robber baron consolidation',
    color: 'from-rose-600 to-pink-700',
    image: '/images/chapters/industrial-revolution.png'
  },
  {
    slug: 'federal-reserve',
    title: 'Federal Reserve Era',
    period: '1900 - 1971 AD',
    description: 'Central banking victory, Great Depression wealth transfer, and Bretton Woods system',
    color: 'from-pink-600 to-purple-700',
    image: '/images/chapters/federal-reserve.jpg'
  },
  {
    slug: 'fiat-system',
    title: 'Fiat Currency System',
    period: '1971 - 2008 AD',
    description: 'Nixon Shock, petrodollar system, deregulation, and derivative speculation bubbles',
    color: 'from-purple-600 to-indigo-700',
    image: '/images/chapters/fiat-currency-system.jpg'
  },
  {
    slug: 'modern-control',
    title: 'Modern Financial Control',
    period: '2008 - Present',
    description: 'Too big to fail, quantitative easing, COVID acceleration, and digital currency preparation',
    color: 'from-indigo-600 to-blue-700',
    image: '/images/chapters/modern-financial-control.png'
  },
  {
    slug: 'biblical-prophecy',
    title: 'Biblical Prophecy & Future',
    period: 'Present - Future',
    description: 'End times financial system, mark of the beast, and spiritual solutions to worldly problems',
    color: 'from-blue-600 to-cyan-700',
    image: '/images/chapters/biblical-prophecy.webp'
  }
];

export function getEventsByChapter(chapterSlug: string): TimelineEvent[] {
  return timelineEvents.filter(event => event.chapter === chapterSlug);
}

export function getChapterBySlug(slug: string) {
  return chapters.find(chapter => chapter.slug === slug);
}