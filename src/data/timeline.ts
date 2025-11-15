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
    year: -430,
    title: "Athenian Currency Crisis",
    description: "Athens debases its currency during Peloponnesian War, creating first recorded inflation and financial collapse",
    chapter: "ancient-foundations",
    significance: 'medium',
    category: 'financial'
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
    year: -48,
    title: "Julius Caesar's Monetary Reform",
    description: "Caesar mints abundant coins for the people's benefit, earning their love but merchant hatred - leading to assassination",
    chapter: "ancient-foundations",
    significance: 'medium',
    category: 'political'
  },

  // Medieval Banking (600-1400 AD)
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
    year: 1200,
    title: "European Goldsmiths Banking",
    description: "Goldsmiths discover fractional reserve banking - creating money from thin air and manipulating business cycles",
    chapter: "medieval-banking",
    significance: 'high',
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

  // Rise of Banking Houses (1400-1700)
  {
    year: 1400,
    title: "Medici Banking Empire",
    description: "Giovanni de' Medici circumvents usury laws, creating the world's first international banking network",
    chapter: "banking-houses",
    significance: 'high',
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
    year: 1637,
    title: "Tulip Bubble Collapse",
    description: "Dutch tulip mania demonstrates how greed and fear drive market prices beyond supply and demand",
    chapter: "banking-houses",
    significance: 'medium',
    category: 'financial'
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
    year: 1720,
    title: "John Law's Mississippi Bubble",
    description: "Scottish con man becomes France's finance minister, creates massive bubble and demonstrates speculation vs real wealth",
    chapter: "industrial-revolution",
    significance: 'medium',
    category: 'financial'
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
    year: 1815,
    title: "Rothschild Waterloo Coup",
    description: "Nathan Rothschild's false Napoleon victory rumor enables massive Bank of England bond purchase at pennies on dollar",
    chapter: "industrial-revolution",
    significance: 'high',
    category: 'financial'
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
    year: 1873,
    title: "Coinage Act Demonetizes Silver",
    description: "America removes silver from circulation, contracts money supply, creates long depression favoring gold-controlling bankers",
    chapter: "industrial-revolution",
    significance: 'medium',
    category: 'financial'
  },
  {
    year: 1893,
    title: "Morgan-Rothschild Gold Manipulation",
    description: "JP Morgan and August Belmont create banking panic, force gold-for-bonds exchange, consolidate American wealth",
    chapter: "industrial-revolution",
    significance: 'high',
    category: 'financial'
  },

  // Federal Reserve Era (1900-1971)
  {
    year: 1910,
    title: "Jekyll Island Meeting",
    description: "Morgan, Rothschild, and Rockefeller representatives secretly plan Federal Reserve creation at JP Morgan resort",
    chapter: "federal-reserve",
    significance: 'high',
    category: 'financial'
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
    year: 1929,
    title: "Wall Street Crash",
    description: "Bankers reverse decade-long credit expansion, crash market, transfer wealth through asset seizure",
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
    year: 1944,
    title: "Bretton Woods Agreement",
    description: "44 nations peg currencies to US dollar at $35/ounce gold - dollar becomes 'as good as gold'",
    chapter: "federal-reserve",
    significance: 'high',
    category: 'financial'
  },
  {
    year: 1963,
    title: "Kennedy Assassination",
    description: "Financial implications include silver removal, Great Society socialism expansion, and Vietnam War escalation",
    chapter: "federal-reserve",
    significance: 'medium',
    category: 'political'
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
    year: 1999,
    title: "Glass-Steagall Repeal",
    description: "Clinton removes Depression-era banking restrictions, enables commercial-investment banking merger speculation",
    chapter: "fiat-system",
    significance: 'high',
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

  // Modern Financial Control (2008-Present)
  {
    year: 2008,
    title: "Financial Crisis",
    description: "Derivatives bubble collapse leads to massive bailouts, 'too big to fail' institutionalized, wealth transferred to banks",
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
    year: 2020,
    title: "COVID-19 Economic Response",
    description: "Pandemic used to accelerate digital control, massive currency printing, preparation for central bank digital currencies",
    chapter: "modern-control",
    significance: 'high',
    category: 'political'
  },
  {
    year: 2022,
    title: "Central Bank Digital Currency Push",
    description: "CBDCs rolled out globally - absolute control over spending, complete surveillance, programmable money system",
    chapter: "modern-control",
    significance: 'high',
    category: 'financial'
  },

  // Biblical Prophecy & Future
  {
    year: 1988,
    title: "Economist Magazine Phoenix",
    description: "Rothschild publication shows phoenix rising from burning currencies with digital coin dated 2018 - prophetic symbol",
    chapter: "biblical-prophecy",
    significance: 'high',
    category: 'prophetic'
  },
  {
    year: 2025,
    title: "Prophetic Convergence",
    description: "Digital ID, social credit scores, CBDC implementation, and spiritual preparation for end-times financial system",
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
    color: 'from-amber-600 to-orange-700'
  },
  {
    slug: 'medieval-banking',
    title: 'Medieval Banking',
    period: '600 - 1400 AD',
    description: 'The emergence of paper money, fractional reserve banking, and early bond markets',
    color: 'from-orange-600 to-red-700'
  },
  {
    slug: 'banking-houses',
    title: 'Rise of Banking Houses',
    period: '1400 - 1700 AD',
    description: 'From the Medici empire to the Bank of England and early stock exchanges',
    color: 'from-red-600 to-rose-700'
  },
  {
    slug: 'industrial-revolution',
    title: 'Industrial Revolution & Central Banking',
    period: '1700 - 1900 AD',
    description: 'The Rothschild empire, American financial wars, and robber baron consolidation',
    color: 'from-rose-600 to-pink-700'
  },
  {
    slug: 'federal-reserve',
    title: 'Federal Reserve Era',
    period: '1900 - 1971 AD',
    description: 'Central banking victory, Great Depression wealth transfer, and Bretton Woods system',
    color: 'from-pink-600 to-purple-700'
  },
  {
    slug: 'fiat-system',
    title: 'Fiat Currency System',
    period: '1971 - 2008 AD',
    description: 'Nixon Shock, petrodollar system, deregulation, and derivative speculation bubbles',
    color: 'from-purple-600 to-indigo-700'
  },
  {
    slug: 'modern-control',
    title: 'Modern Financial Control',
    period: '2008 - Present',
    description: 'Too big to fail, quantitative easing, COVID acceleration, and digital currency preparation',
    color: 'from-indigo-600 to-blue-700'
  },
  {
    slug: 'biblical-prophecy',
    title: 'Biblical Prophecy & Future',
    period: 'Present - Future',
    description: 'End times financial system, mark of the beast, and spiritual solutions to worldly problems',
    color: 'from-blue-600 to-cyan-700'
  }
];

export function getEventsByChapter(chapterSlug: string): TimelineEvent[] {
  return timelineEvents.filter(event => event.chapter === chapterSlug);
}

export function getChapterBySlug(slug: string) {
  return chapters.find(chapter => chapter.slug === slug);
}