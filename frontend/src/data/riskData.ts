import {
  BarChart3,
  Globe,
  Shield,
  DollarSign,
  Heart,
  Users,
  Droplet,
  AlertTriangle
} from "lucide-react"

/**
 * Risk Enums & Basic Types
 * These enums standardize the rating systems used across the schema.
 */
export type RiskProbability = 'Very Low' | 'Low' | 'Moderate' | 'High' | 'Very High';
export type RiskImpact = 'Minimal' | 'Minor' | 'Moderate' | 'Significant' | 'Severe';
export type TimeHorizon = 'Immediate' | 'Short-term' | 'Medium-term' | 'Long-term';
export type ConfidenceLevel = 'Low' | 'Medium' | 'High' | 'Very High';
export type Trend = 'Improving' | 'Stable' | 'Worsening' | 'Rapidly Worsening';

/**
 * Key Metric type for live tracking of risk indicators.
 */
export interface KeyMetric {
  name: string;
  current: string;
  threshold: string;
  trend: Trend;
}

/**
 * Adaptation and response capacity type.
 */
export interface AdaptationCapacity {
  rating: 'Very Low' | 'Low' | 'Moderate' | 'High' | 'Very High';
  limitations: string;
  opportunities: string;
}

/**
 * Evidence basis type capturing the quality and supporting references.
 */
export interface EvidenceBasis {
  quality: 'Limited' | 'Moderate' | 'Strong' | 'Very Strong';
  keyReferences: string[];
}

/**
 * Expert insights type for qualitative, cross-domain assessments.
 */
export interface ExpertInsight {
  expertName?: string;
  affiliation?: string;
  insight: string;
  timestamp?: string; // ISO date string for when the insight was provided
}

/**
 * Temporal intelligence type capturing the evolution of risk.
 */
export interface TimeHorizonData {
  onset: TimeHorizon;
  peak: string;      // Description of the peak period
  duration: string;  // Expected duration of the risk impact
}

/**
 * Core RiskFactor type that includes all primary dimensions.
 */
export interface RiskFactor {
  id: string;
  name: string;
  // Calculated risk score from probability and impact assessments
  riskScore: number;
  // Visual configuration for UI integration
  color: string;
  icon: any; // e.g., a React component (from lucide-react or similar)
  bgColor: string;
  iconColor: string;
  
  description: string;
  probability: {
    rating: RiskProbability;
    percentage: string;  // e.g., "80-90%"
    rationale: string;
    confidenceLevel: ConfidenceLevel;
  };
  impact: {
    rating: RiskImpact;
    description: string;
    cascadingEffects: string[];
  };

  // Temporal dynamics captured in a timeline object
  timeHorizon: TimeHorizonData;
  
  // Key metrics for live data integration and threshold tracking
  keyMetrics: KeyMetric[];
  
  // Adaptation and response evaluation
  adaptationCapacity: AdaptationCapacity;
  
  // Evidence and supporting references
  evidenceBasis: EvidenceBasis;
  
  // Optional cross-domain expert insights for qualitative assessments
  expertInsights?: ExpertInsight[];
  
  // Optional live data feed integration (e.g., API endpoints for real-time monitoring)
  liveDataFeed?: {
    source: string;
    dataURL: string;
  };
}

/**
 * CompoundRisk type represents the aggregated risk profile
 * from multiple interacting risk factors.
 */
export interface CompoundRiskData {
  percentage: string;
  percentageWidth: number;
  description: string;
  confidenceLevel: ConfidenceLevel;
  evidenceBasis: string;
  // Optional attribute for describing the likelihood of cascading events
  cascadingLikelihood?: string;
  // Contributing risk factors (IDs)
  contributingRiskIds: string[];
}

/**
 * Timeline data for critical periods
 */
export interface CriticalTimelineData {
  period: string;
  rationale: string;
  yearsToThreshold?: number;
}

/**
 * GlobalRiskAssessment aggregates all elements to represent the overall polycrisis.
 */
export interface GlobalRiskAssessment {
  riskFactors: RiskFactor[];
  compoundRisk: CompoundRiskData;
  criticalTimeline: CriticalTimelineData;
  // Optional hooks for scenario modeling, early warning signals, and resilience scoring
  scenarioReadiness?: {
    scenarios: string[];
    earlyWarningSignals: string[];
    resilienceScore?: number;
  };
  // Timestamp for when the global risk dashboard was last updated
  lastUpdated: string; // ISO date string
}

// Compound risk data - now just a template with configuration
export const compoundRisk: CompoundRiskData = {
  percentage: "65-75%", // This will be dynamically calculated
  percentageWidth: 70,  // This will be dynamically calculated
  description: "Based on AI-Agent powered analysis of global data sources, there is a high probability that multiple systemic crises will converge within the next decade. This assessment is supported by observed acceleration in climate impacts, increasing geopolitical tensions, the erosion of adaptive governance capacity, and unprecedented biodiversity decline. The compound nature of these risks creates amplifying feedback loops that can rapidly escalate manageable challenges into systemic breakdowns.",
  confidenceLevel: "Medium",
  evidenceBasis: "Meta-analysis of 17 global risk reports; comprehensive literature review; historical analysis of crisis cascades",
  contributingRiskIds: ["climate-change", "resource-scarcity", "geopolitical-tensions", "social-polarization", "biodiversity-loss"]
}

// Critical timeline data
export const criticalTimeline: CriticalTimelineData = {
  period: "2025-2035",
  rationale: "Multiple independent analyses identify this decade as a critical juncture where several slow-building risks reach potential inflection points simultaneously."
}

// Risk factors data (sorted by riskScore, highest first)
export const riskFactors: RiskFactor[] = [
  {
    id: "climate-change",
    name: "Climate Change",
    riskScore: 94,
    color: "bg-red-500",
    icon: Globe,
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    
    description: "Climate change is a systemic, long-term global risk driven by greenhouse gas emissions, with severe and widespread impacts on ecosystems, economies, and human wellbeing.",
    
    probability: {
      rating: "Very High" as RiskProbability,
      percentage: "95-100%",
      rationale: "Observed temperature rise (~1.2°C), record GHG levels, and continued emissions growth confirm the ongoing and intensifying nature of climate change.",
      confidenceLevel: "Very High" as ConfidenceLevel
    },
    
    impact: {
      rating: "Severe" as RiskImpact,
      description: "Climate change threatens food and water security, human health, biodiversity, coastal infrastructure, and global stability through both direct impacts and cascading effects.",
      cascadingEffects: [
        "Crop failure leading to food insecurity and social unrest",
        "Mass displacement due to sea-level rise and extreme weather",
        "Amplification of disease outbreaks in new regions",
        "Infrastructure damage from extreme weather and permafrost thaw",
        "Increased conflict over water and arable land"
      ]
    },
    
    timeHorizon: {
      onset: "Immediate" as TimeHorizon,
      peak: "Long-term",
      duration: "Centuries to millennia without mitigation"
    },
    
    keyMetrics: [
      {
        name: "Global Average Surface Temperature Anomaly",
        current: "+1.2°C (2023, vs 1850–1900 baseline)",
        threshold: "+1.5°C (Paris Agreement upper goal)",
        trend: "Worsening" as Trend
      },
      {
        name: "Atmospheric CO₂ Concentration",
        current: "420 ppm (2023)",
        threshold: "450 ppm (likely 2°C warming)",
        trend: "Rapidly Worsening" as Trend
      }
    ],
    
    adaptationCapacity: {
      rating: "Moderate",
      limitations: "Insufficient finance, unequal distribution of capacity, limits in natural and human systems beyond 2°C",
      opportunities: "Nature-based solutions, early warning systems, resilient infrastructure, decentralized renewable energy, climate-resilient agriculture"
    },
    
    evidenceBasis: {
      quality: "Very Strong",
      keyReferences: [
        "IPCC AR6 Synthesis Report (2023)",
        "UNEP Emissions Gap Report (2023)",
        "WMO State of the Global Climate Report (2023)",
        "NOAA Global Climate Reports (2023)",
        "NASA GISTEMP Data (2023)"
      ]
    },
    
    expertInsights: [
      {
        expertName: "Petteri Taalas",
        affiliation: "World Meteorological Organization",
        insight: "There is no end in sight to the rise in greenhouse gas concentrations. Climate change is a growing threat, and we are far off track to meet the Paris targets.",
        timestamp: "2023-11-15T00:00:00Z"
      }
    ]
  },
  {
    id: "resource-scarcity",
    name: "Resource Scarcity",
    riskScore: 90,
    color: "bg-red-500",
    icon: Droplet,
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
    
    description: "A systemic risk arising from the demand-supply imbalance of critical natural resources (water, food, energy, minerals), which can trigger a cascade of social, economic, and geopolitical crises if not managed sustainably.",
    
    probability: {
      rating: "High" as RiskProbability,
      percentage: "70-85%",
      rationale: "Based on current freshwater depletion rates, land degradation trends, and projected demand for transition minerals against known reserves and production capacity.",
      confidenceLevel: "High" as ConfidenceLevel
    },
    
    impact: {
      rating: "Significant" as RiskImpact,
      description: "Heightened food and water insecurity leading to malnutrition and health crises, economic inflation and instability, social unrest and conflict over resources, and ecosystem degradation.",
      cascadingEffects: [
        "Heightened food and water insecurity leading to malnutrition and health crises",
        "Economic inflation and instability due to spiking commodity prices and resource shortages",
        "Social unrest and conflict over access to essential resources (e.g. water, land, energy)",
        "Degradation of ecosystems and biodiversity loss, further diminishing long-term resource availability"
      ]
    },
    
    timeHorizon: {
      onset: "Immediate" as TimeHorizon,
      peak: "Intensifying through 2025-2040",
      duration: "Persistent with potential for partial mitigation through technology and governance"
    },
    
    keyMetrics: [
      {
        name: "Population facing acute food insecurity (IPC Phase 3+)",
        current: "345 million people (2023)",
        threshold: "500+ million represents severe global crisis",
        trend: "Worsening" as Trend
      },
      {
        name: "People without electricity access",
        current: "775 million people (2022)",
        threshold: "1+ billion represents severe development setback",
        trend: "Worsening" as Trend
      },
      {
        name: "Global population facing water shortages annually",
        current: "3.6 billion people (2023)",
        threshold: "4+ billion represents severe systemic stress",
        trend: "Worsening" as Trend
      },
      {
        name: "Global material footprint (annual resources used)",
        current: "98.0 billion metric tons (2022)",
        threshold: "120+ billion metric tons exceeds planetary boundaries",
        trend: "Worsening" as Trend
      }
    ],
    
    adaptationCapacity: {
      rating: "Moderate",
      limitations: "Governance fragmentation; technological limitations; economic barriers to circular economy",
      opportunities: "Investments in desalination, renewable energy, efficient irrigation, and crop innovation; circular economy initiatives to recycle and substitute scarce materials"
    },
    
    evidenceBasis: {
      quality: "Strong",
      keyReferences: [
        "World Resources Institute Aqueduct Water Risk Atlas",
        "IEA Critical Minerals Market Outlook 2023",
        "UN Global Land Outlook (2022)"
      ]
    },
    
    expertInsights: [
      {
        expertName: "António Guterres",
        affiliation: "UN Secretary-General",
        insight: "We are draining humanity's lifeblood through vampiric overconsumption and unsustainable use, and evaporating it through global heating.",
        timestamp: "2023-01-01T00:00:00Z"
      }
    ],
    
    liveDataFeed: {
      source: "UN Food and Agriculture Organization",
      dataURL: "https://www.fao.org/faostat/en/#data"
    }
  },
  
  {
    id: "geopolitical-tensions",
    name: "Geopolitical Tensions",
    riskScore: 89,
    color: "bg-red-500",
    icon: Shield,
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    
    description: "Rising geopolitical tensions, including great-power rivalry, regional conflicts, and hybrid warfare, are driving systemic global instability and undermining international cooperation across critical domains.",
    
    probability: {
      rating: "Very High" as RiskProbability,
      percentage: "85-95%",
      rationale: "Multiple concurrent conflicts, record-high military spending, and frequent flashpoints between major powers indicate a persistent and escalating likelihood of geopolitical crises.",
      confidenceLevel: "Very High" as ConfidenceLevel
    },
    
    impact: {
      rating: "Severe" as RiskImpact,
      description: "Direct human casualties, massive displacement, global supply chain disruptions, nuclear escalation risks, institutional erosion, and blockage of collective action on climate and health.",
      cascadingEffects: [
        "Food and energy price shocks due to conflict-related supply disruptions",
        "Weakened global coordination on climate, health, and development goals",
        "Mass displacement and refugee crises straining regional stability",
        "Cyber and infrastructure attacks escalating tensions across domains",
        "Institutional paralysis (UN, WTO, G20) amid great-power gridlock"
      ]
    },
    
    timeHorizon: {
      onset: "Immediate" as TimeHorizon,
      peak: "Short-term",
      duration: "Long-term"
    },
    
    keyMetrics: [
      {
        name: "Number of Active Armed Conflicts Worldwide",
        current: "56 (as of 2023, IEP)",
        threshold: "50+ conflicts indicates extreme systemic pressure",
        trend: "Worsening" as Trend
      },
      {
        name: "Annual Global Military Expenditure",
        current: "$2.44 trillion (SIPRI, 2023)",
        threshold: ">$2.2T signifies accelerated arms race risk",
        trend: "Worsening" as Trend
      }
    ],
    
    adaptationCapacity: {
      rating: "Moderate",
      limitations: "Multilateral institutions are paralyzed; diplomacy often reactive; arms control treaties are collapsing; cyber norms are voluntary and weak.",
      opportunities: "Track II diplomacy, deconfliction channels, minilateral agreements (e.g. grain corridor deals), regional peacebuilding platforms, and conflict early warning systems offer resilience entry points."
    },
    
    evidenceBasis: {
      quality: "Very Strong",
      keyReferences: [
        "World Economic Forum Global Risks Report (2024)",
        "Stockholm International Peace Research Institute Military Spending Report (2023)",
        "Institute for Economics and Peace Global Peace Index (2023)",
        "IMF: Geoeconomic Fragmentation and Trade Risks (2023)",
        "Bulletin of the Atomic Scientists Doomsday Clock Statement (2023)"
      ]
    },
    
    expertInsights: [
      {
        expertName: "Antonio Guterres",
        affiliation: "United Nations Secretary-General",
        insight: "Humanity is just one misunderstanding, one miscalculation away from nuclear annihilation — global cooperation is breaking down amid unprecedented geopolitical instability.",
        timestamp: "2023-08-01T00:00:00Z"
      }
    ],
    
    liveDataFeed: {
      source: "",
      dataURL: ""
    }
  },
  
  {
    id: "economic-inequality",
    name: "Economic Inequality",
    riskScore: 87,
    color: "bg-red-500",
    icon: DollarSign,
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    
    description: "Extreme disparities in income and wealth concentration globally threaten social cohesion, democratic stability, and economic resilience, amplifying multiple dimensions of systemic risk.",
    
    probability: {
      rating: "Very High" as RiskProbability,
      percentage: "85-95%",
      rationale: "Data from the World Inequality Lab and Oxfam show rising or persistently high inequality in most countries, exacerbated by post-pandemic recovery patterns and structural factors like technological change, weak redistribution, and capital concentration.",
      confidenceLevel: "Very High" as ConfidenceLevel
    },
    
    impact: {
      rating: "Severe" as RiskImpact,
      description: "Economic inequality undermines democratic legitimacy, drives social unrest, weakens economic mobility, and magnifies the impact of other risks like climate change and pandemics.",
      cascadingEffects: [
        "Erosion of trust in democratic institutions and rise of populism",
        "Increased social unrest, strikes, and protest movements",
        "Worsened health, education, and intergenerational mobility outcomes",
        "Reduced aggregate demand and economic fragility",
        "Obstructed collective action on global challenges like climate change"
      ]
    },
    
    timeHorizon: {
      onset: "Immediate" as TimeHorizon,
      peak: "Medium-term",
      duration: "Long-term"
    },
    
    keyMetrics: [
      {
        name: "Global Wealth Share Held by Top 10%",
        current: "76% (2021, World Inequality Lab)",
        threshold: "80% or higher",
        trend: "Worsening" as Trend
      },
      {
        name: "Gini Coefficient (Global Income)",
        current: "67 (2023 estimate, World Bank)",
        threshold: "70 or higher",
        trend: "Worsening" as Trend
      }
    ],
    
    adaptationCapacity: {
      rating: "Moderate",
      limitations: "Political capture by elites, capital flight risks, global tax competition, and lack of fiscal capacity in low-income countries limit redistribution.",
      opportunities: "Progressive taxation, global wealth tax coordination, universal social protection, inclusive education, and union revitalization offer mitigation pathways."
    },
    
    evidenceBasis: {
      quality: "Very Strong",
      keyReferences: [
        "World Inequality Report 2022 (World Inequality Lab)",
        "Oxfam 'Survival of the Richest' Report (2023)",
        "IMF 'Inequality and Growth' Report (2020)",
        "World Bank Global Inequality Update (2023)",
        "Inter-American Dialogue Latin America Inequality Study (2020)"
      ]
    },
    
    expertInsights: [
      {
        expertName: "Joseph Stiglitz",
        affiliation: "Columbia University",
        insight: "The concentration of wealth and power in the top 1% poses a grave threat to democratic ideals and economic stability.",
        timestamp: "2023-11-15T00:00:00Z"
      }
    ]
  },
  
  {
    id: "social-polarization",
    name: "Social Polarization",
    riskScore: 75,
    color: "bg-red-500",
    icon: Users,
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    
    description: "Increasing division within societies along ideological, political, and social lines, leading to reduced cooperation and increased conflict.",
    
    probability: {
      rating: "Very High" as RiskProbability,
      percentage: "75-90%",
      rationale: "Evidenced by increasing trends in political polarization indices globally [1], the rise of populist movements [2], and the fragmentation of media landscapes [3].",
      confidenceLevel: "Very High" as ConfidenceLevel
    },
    
    impact: {
      rating: "Severe" as RiskImpact,
      description: "Leads to political instability [4], democratic erosion [5], hinders economic growth , undermines social cohesion [6], poses public health challenges [7], and strains international relations [8].",
      cascadingEffects: [
        "Weakening of democratic institutions and processes [4]",
        "Increased social unrest and potential for violence [9]",
        "Reduced capacity for collective action on global challenges [10]",
        "Erosion of trust within and between societies [11]",
        "Increased economic policy uncertainty and reduced investment "
      ]
    },
    
    timeHorizon: {
      onset: "Immediate" as TimeHorizon,
      peak: "Medium-term",
      duration: "Long-term"
    },
    
    keyMetrics: [
      {
        name: "Political Polarization Index (V-Dem)",
        current: "Increasing trends observed in numerous countries [1]",
        threshold: "Scores indicating 'toxic' levels of polarization [1]",
        trend: "Worsening" as Trend
      },
      {
        name: "Social Cohesion Index (Scanlon Index)",
        current: "78 (Australia, 2024), below long-term average [12]",
        threshold: "Scores below the average of the 2010s (around 84) [12]",
        trend: "Stable but below average" as Trend
      }
    ],
    
    adaptationCapacity: {
      rating: "Low",
      limitations: "Deeply entrenched societal divisions [13], influence of misinformation [4], and challenges in achieving political consensus on mitigation strategies .",
      opportunities: "Local community initiatives [14], electoral reforms , media literacy programs [15], and international collaborations  show some potential."
    },
    
    evidenceBasis: {
      quality: "Very Strong",
      keyReferences: [
        "Carnegie Endowment for International Peace, Reducing Pernicious Polarization [17]",
        "V-Dem Institute, Political Polarization in Three Regional Powers [1]",
        "Pew Research Center, Political Polarization in the American Public [18]",
        "IMF, AI Will Transform the Global Economy [19]"
      ]
    },
    
    expertInsights: [
      {
        expertName: "",
        affiliation: "",
        insight: "",
        timestamp: "2024-11-18T00:00:00Z"
      }
    ],
    
    liveDataFeed: {
      source: "",
      dataURL: ""
    }
  },
  
  {
    id: "technological-disruption",
    name: "Technological Disruption",
    riskScore: 85,
    color: "bg-red-500",
    icon: BarChart3,
    bgColor: "bg-gray-100",
    iconColor: "text-gray-700",
    
    description: "Rapid advancements in digital technologies (AI, biotech, automation, renewables) fundamentally alter markets, societies, and geopolitics, creating systemic risks.",
    
    probability: {
      rating: "Very High" as RiskProbability,
      percentage: "90-95%",
      rationale: "The current pace of innovation across multiple technological domains is accelerating, with widespread adoption already underway and projected to increase significantly in the coming years [10, 22, 25, 33].",
      confidenceLevel: "Very High" as ConfidenceLevel
    },
    
    impact: {
      rating: "Severe" as RiskImpact,
      description: "Technological disruption can lead to massive job displacement, exacerbate inequalities, create ethical dilemmas, strain environmental resources, and trigger geopolitical instability, with cascading effects across various systems [2, 5].",
      cascadingEffects: []
    },
    
    timeHorizon: {
      onset: "Immediate" as TimeHorizon,
      peak: "Medium-term",
      duration: "Long-term"
    },
    
    keyMetrics: [
      {
        name: "",
        current: "",
        threshold: "85%",
        trend: "Rapidly Worsening" as Trend
      },
      {
        name: "Renewable Energy Share of Electricity Generation",
        current: "~30% (Global, 2024 estimate based on trends) [30]",
        threshold: "50%",
        trend: "Worsening" as Trend
      }
    ],
    
    adaptationCapacity: {
      rating: "Moderate",
      limitations: "Uneven access to education and training, slow regulatory responses, geopolitical fragmentation hindering cooperation.",
      opportunities: "Investment in reskilling programs, development of ethical AI frameworks, international collaborations on standards and resource management."
    },
    
    evidenceBasis: {
      quality: "Very Strong",
      keyReferences: [
        "McKinsey Global Institute, The Bio Revolution: Innovations transforming economies, societies, and our lives (2020) [224]",
        "IEA, Renewables 2024 [30, 32, 49]",
        "OECD, The impact of artificial intelligence on the labour market (2024) [225]",
        "National Intelligence Council, Global Trends 2040 [226, 227]"
      ]
    },
    
    expertInsights: [],
    
    liveDataFeed: {
      source: "",
      dataURL: ""
    }
  },
  
  {
    id: "public-health",
    name: "Public Health Challenges",
    riskScore: 85,
    color: "bg-red-500",
    icon: Heart,
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    
    description: "Global public health faces a complex array of persistent and emerging threats, including infectious diseases, non-communicable diseases, and mental health conditions, exacerbated by demographic shifts and climate change.",
    
    probability: {
      rating: "Very High" as RiskProbability,
      percentage: "80-95%",
      rationale: "The resurgence of infectious diseases, the increasing burden of non-communicable diseases, the growing mental health crisis, and the impacts of climate change indicate a very high likelihood of continued and escalating public health challenges globally [1, 2, 3, 4].",
      confidenceLevel: "High" as ConfidenceLevel
    },
    
    impact: {
      rating: "Severe" as RiskImpact,
      description: "Public health challenges lead to increased morbidity and mortality, strain healthcare systems, reduce economic productivity, threaten social stability, and impact geopolitical relations. The interconnected nature of these challenges can lead to widespread and severe consequences across multiple domains [5, 6, 7].",
      cascadingEffects: []
    },
    
    timeHorizon: {
      onset: "Immediate" as TimeHorizon,
      peak: "Long-term",
      duration: "Ongoing"
    },
    
    keyMetrics: [
      {
        name: "Mortality rate due to NCDs",
        current: "43 million deaths in 2021 [8]",
        threshold: "Significant increase from baseline or failure to meet WHO targets for reduction",
        trend: "Worsening" as Trend
      },
      {
        name: "Incidence of emerging infectious diseases",
        current: "Resurgences of measles and polio in 2024, emergence of new pathogens like Marburg and Oropouche [1, 9, 10]",
        threshold: "Significant increase in novel or re-emerging infectious disease outbreaks [11, 12]",
        trend: "Worsening" as Trend
      }
    ],
    
    adaptationCapacity: {
      rating: "Moderate",
      limitations: "Insufficient funding, inadequate public health infrastructure in many regions, vaccine hesitancy, antimicrobial resistance, and challenges in addressing social determinants of health [13, 14, 15, 16, 17]",
      opportunities: "Strengthening healthcare systems, implementing preventative measures like vaccination and sanitation, developing early warning systems, fostering international collaboration, and investing in research and development of new treatments and technologies [18, 19, 20, 21]"
    },
    
    evidenceBasis: {
      quality: "Strong",
      keyReferences: [
        "Centers for Disease Control and Prevention (CDC) - Global Health Annual Report (2024)",
        "The Lancet - Global Burden of Disease Study (Ongoing)",
        "Global Health Security (GHS) Index (2021)",
        "Pan American Health Organization (PAHO) - Climate Change and Health Program (Ongoing)"
      ]
    },
    
    expertInsights: [
      {
        expertName: "",
        affiliation: "",
        insight: "",
        timestamp: "2024-11-01T00:00:00Z"
      }
    ],
    
    liveDataFeed: {
      source: "",
      dataURL: ""
    }
  },
  
  {
    id: "biodiversity-loss",
    name: "Global Biodiversity Loss",
    riskScore: 90,
    color: "bg-red-500",
    icon: AlertTriangle,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    
    description: "Rapid decline in the variety of life on Earth (species, populations, and ecosystems) due to human activities, leading to extinctions and degraded ecosystem services.",
    
    probability: {
      rating: "Very High" as RiskProbability,
      percentage: "90-95%",
      rationale: "Almost certain (>90%) that biodiversity loss will persist in the near-term given current drivers. Wildlife populations have fallen ~69% on average since 1970 and ~28% of assessed species (~44,000) are threatened with extinction.",
      confidenceLevel: "Very High" as ConfidenceLevel
    },
    
    impact: {
      rating: "Severe" as RiskImpact,
      description: "Loss of biodiversity poses extreme impact risks – it can trigger ecosystem collapses, jeopardize food and water security, increase climate instability, and incur huge economic and health costs.",
      cascadingEffects: [
        "Trophic cascades: Removal of key species (e.g., top predators) leads to overpopulation of some species and collapse of others, destabilizing the whole food web.",
        "Ecosystem feedbacks: Degraded ecosystems store less carbon and water, exacerbating climate change and local aridity, which in turn causes further biodiversity loss (positive feedback loop).",
        "Co-extinctions: Extinction of one species (e.g., a host or pollinator) can cause dependent species to go extinct as a domino effect, magnifying initial losses."
      ]
    },
    
    timeHorizon: {
      onset: "Immediate" as TimeHorizon,
      peak: "Current and intensifying through 2030-2050+",
      duration: "Irreversible on human timescales for many ecosystems"
    },
    
    keyMetrics: [
      {
        name: "Living Planet Index (Global wildlife population trend)",
        current: "-69% (1970–2018)",
        threshold: "Continuing downward trend",
        trend: "Worsening" as Trend
      },
      {
        name: "IUCN Red List Threatened Species",
        current: "44,000+ species threatened (~28% of 157,000 assessed)",
        threshold: "Number of threatened species rises each update",
        trend: "Rapidly Worsening" as Trend
      },
      {
        name: "Land use change",
        current: "~75% of land significantly altered; >420 million ha forest lost since 1990",
        threshold: "Continued conversion of natural habitats",
        trend: "Worsening" as Trend
      }
    ],
    
    adaptationCapacity: {
      rating: "Low",
      limitations: "Extinction is irreversible; ecosystem complexity makes restoration difficult; economic incentives favor extraction over conservation; implementation gaps in conservation efforts",
      opportunities: "Protected area expansion (goal of 30% by 2030); nature-based solutions; sustainable agriculture practices; economic valuation of ecosystem services; indigenous and local community stewardship"
    },
    
    evidenceBasis: {
      quality: "Very Strong",
      keyReferences: [
        "IPBES Global Assessment Report on Biodiversity and Ecosystem Services",
        "WWF Living Planet Report 2022",
        "IUCN Red List 2023",
        "UN Environment Programme Reports on Biodiversity"
      ]
    },
    
    expertInsights: [
      {
        expertName: "Sir Robert Watson",
        affiliation: "IPBES Chair (2016-2019)",
        insight: "The health of ecosystems on which we and all other species depend is deteriorating more rapidly than ever. We are eroding the very foundations of our economies, livelihoods, food security, health and quality of life worldwide.",
        timestamp: "2022-10-15T00:00:00Z"
      },
      {
        expertName: "Marco Lambertini",
        affiliation: "Director-General, WWF International",
        insight: "We are in the midst of a biodiversity and climate crisis. A nature-positive future needs transformative – game-changing – shifts in how we produce, how we consume, how we govern, and what we finance. If we fail to limit warming to 1.5°C, climate change is likely to become the dominant cause of biodiversity loss in the coming decades.",
        timestamp: "2022-10-22T00:00:00Z"
      }
    ]
  }
].sort((a, b) => b.riskScore - a.riskScore);

/**
 * Calculates the compound risk based on contributing risk factors
 * @param factors The full list of risk factors
 * @param template The template compound risk data with configuration
 * @returns A dynamically calculated compound risk assessment
 */
export function calculateCompoundRisk(
  factors: RiskFactor[], 
  template: CompoundRiskData
): CompoundRiskData {
  // Filter to only include contributing risk factors
  const contributingFactors = factors.filter(factor => 
    template.contributingRiskIds.includes(factor.id)
  );
  
  if (contributingFactors.length === 0) return template;
  
  // Calculate average risk score
  const avgRiskScore = contributingFactors.reduce(
    (sum, factor) => sum + factor.riskScore, 
    0
  ) / contributingFactors.length;
  
  // Round to nearest 5% for the percentage display
  const roundedScore = Math.round(avgRiskScore / 5) * 5;
  const rangeStart = Math.max(roundedScore - 5, 0);
  const rangeEnd = Math.min(roundedScore + 5, 100);
  
  // Calculate confidence level based on the average confidence of contributing factors
  const confidenceLevels: {[key: string]: number} = {
    'Low': 1,
    'Medium': 2,
    'High': 3,
    'Very High': 4
  };
  
  const avgConfidenceScore = contributingFactors.reduce(
    (sum, factor) => sum + confidenceLevels[factor.probability.confidenceLevel], 
    0
  ) / contributingFactors.length;
  
  let dynamicConfidenceLevel: ConfidenceLevel = 'Medium';
  if (avgConfidenceScore <= 1.5) dynamicConfidenceLevel = 'Low';
  else if (avgConfidenceScore <= 2.5) dynamicConfidenceLevel = 'Medium';
  else if (avgConfidenceScore <= 3.5) dynamicConfidenceLevel = 'High';
  else dynamicConfidenceLevel = 'Very High';
  
  // Generate dynamic evidence basis based on the highest quality evidence
  const evidenceQualityRanking: {[key: string]: number} = {
    'Limited': 1,
    'Moderate': 2,
    'Strong': 3,
    'Very Strong': 4
  };
  
  // Sort factors by evidence quality (highest first)
  const sortedByEvidence = [...contributingFactors].sort(
    (a, b) => evidenceQualityRanking[b.evidenceBasis.quality] - evidenceQualityRanking[a.evidenceBasis.quality]
  );
  
  // Take top 3 factors with highest evidence quality
  const topEvidenceFactors = sortedByEvidence.slice(0, 3);
  
  // Generate dynamic description based on top risk factors
  const topRiskFactors = [...contributingFactors].sort(
    (a, b) => b.riskScore - a.riskScore
  ).slice(0, 3);
  
  const dynamicDescription = `Based on AI-Agent powered analysis of global data sources, there is a ${rangeStart}-${rangeEnd}% probability that multiple systemic crises will converge within the next decade. This assessment is supported by observed acceleration in key risk factors that create amplifying feedback loops, which can rapidly escalate manageable challenges into systemic breakdowns.`;
  
  // Generate dynamic evidence basis
  const dynamicEvidenceBasis = `AI synthesis of data from ${contributingFactors.length} major risk factors; ${topEvidenceFactors.map(f => f.evidenceBasis.keyReferences[0].split(' ')[0]).join('/')} reports; comprehensive literature review`;
  
  // Create a dynamic compound risk assessment
  return {
    ...template,
    percentage: `${rangeStart}-${rangeEnd}%`,
    percentageWidth: roundedScore,
    description: dynamicDescription,
    confidenceLevel: dynamicConfidenceLevel,
    evidenceBasis: dynamicEvidenceBasis
  };
}

// Create the global risk assessment object
export const globalRiskAssessment: GlobalRiskAssessment = {
  riskFactors,
  compoundRisk,
  criticalTimeline,
  lastUpdated: new Date().toISOString(),
  scenarioReadiness: {
    scenarios: [
      "Accelerated climate impacts with 2°C threshold crossed by 2040",
      "Major power conflict disrupting global supply chains",
      "Technological disruption causing >25% labor market displacement",
      "Cascading resource crises affecting food, water, and energy systems simultaneously"
    ],
    earlyWarningSignals: [
      "Consecutive years of record temperatures and extreme weather events",
      "Rapid decline in international cooperation metrics",
      "Critical resource price volatility exceeding historical ranges",
      "Democratic backsliding in multiple G20 nations simultaneously"
    ],
    resilienceScore: 42 // On a scale of 0-100
  }
}

// Calculate the dynamic compound risk for export
export const dynamicCompoundRisk = calculateCompoundRisk(riskFactors, compoundRisk);

export const dynamicCriticalTimeline = calculateCriticalTimeline(riskFactors, criticalTimeline);


export function calculateCriticalTimeline(
  factors: RiskFactor[],
  template: CriticalTimelineData
): CriticalTimelineData {
  // Filter to high-risk factors
  const highRiskFactors = factors.filter(f => f.riskScore > 75);
  
  // Analyze time horizons from high-risk factors
  const immediateOnsetCount = highRiskFactors.filter(f => 
    f.timeHorizon.onset === 'Immediate').length;
  
  // Calculate years to threshold based on risk factors
  // This is a simplified example - you'd want more sophisticated logic
  const yearsToThreshold = Math.max(
    3,
    10 - Math.floor(immediateOnsetCount / 2)
  );
  
  // Potentially adjust the period based on calculated years
  const currentYear = new Date().getFullYear();
  const period = `${currentYear}-${currentYear + yearsToThreshold}`;
  
  return {
    ...template,
    period,
    yearsToThreshold
  };
}