export const frameworks = [
  {
    id: "risk-assessment",
    title: "Personal Risk Assessment",
    description: "Evaluate which global risks are most likely to affect you personally",
    category: "planning",
    prompt: `As a risk assessment specialist with expertise in the polycrisis, help me conduct a personal vulnerability assessment. Consider my location, profession, family situation, and existing preparations to identify which global systemic risks (climate change, resource scarcity, economic instability, etc.) might impact me most directly. For each relevant risk:

1. Assess my specific vulnerabilities based on my circumstances
2. Identify early warning signals I should monitor
3. Suggest 3-5 practical steps to reduce my exposure
4. Recommend resources for deeper understanding

Please start by asking me about my location, living situation, and current concerns.`
  },
  {
    id: "essential-resilience",
    title: "Essential Resilience",
    description: "Core preparations for basic needs during short-term disruptions",
    category: "practical",
    prompt: `As a resilience planning expert, help me develop a practical framework for ensuring my household's essential needs during short-term disruptions (7-30 days). Focus on these critical domains:

1. Water: Storage options, filtration methods, and consumption planning
2. Food: Shelf-stable supplies, nutritional considerations, and rotation systems
3. Energy: Backup power for critical devices, heating/cooling alternatives
4. Medical: First aid supplies, critical medications, and basic emergency skills
5. Communication: Maintaining connectivity during infrastructure disruptions

For each domain, suggest specific preparations that balance effectiveness, cost, and space constraints. Consider my specific household needs and local context. Please start by asking about my household size, living situation, and any specific concerns.`
  },
  {
    id: "financial-resilience",
    title: "Financial Resilience",
    description: "Strategies to protect assets and maintain financial stability",
    category: "practical",
    prompt: `As a financial resilience advisor specializing in uncertain times, help me develop strategies to protect my financial wellbeing against potential systemic disruptions. Consider:

1. Emergency fund structure: Optimal size, accessibility, and allocation across cash/assets
2. Inflation protection: Strategies to preserve purchasing power during high inflation
3. Banking system risks: Approaches to mitigate risks of banking instability
4. Investment diversification: Framework for spreading risk across different asset classes
5. Income resilience: Ways to create multiple income streams or more stable employment
6. Debt management: Strategies for reducing vulnerability to interest rate changes

Please tailor your advice to different financial situations and time horizons, with practical next steps for each area. Start by asking about my current financial situation, concerns, and goals.`
  },
  {
    id: "community-building",
    title: "Community Resilience",
    description: "Building social networks and community support systems",
    category: "social",
    prompt: `As a community resilience specialist, help me develop strategies for building stronger social networks and mutual aid systems in my local area. Address:

1. Mapping existing community assets and resources
2. Identifying community vulnerabilities and needs
3. Building relationships with neighbors and local groups
4. Developing skills sharing and mutual aid networks
5. Creating communication systems that work during disruptions
6. Strengthening local food, energy, and economic systems

Provide practical approaches for different community contexts (urban, suburban, rural) and for people with varying levels of time and resources to contribute. Include examples of successful community resilience initiatives. Please start by asking about my local context and existing community connections.`
  },
  {
    id: "skill-development",
    title: "Resilience Skills",
    description: "Essential skills for navigating disruption and uncertainty",
    category: "practical",
    prompt: `As an expert in practical resilience skills, help me identify and develop key capabilities for navigating uncertain times. Focus on high-value skills such as:

1. Practical skills: Food preservation, basic repairs, first aid, etc.
2. Psychological resilience: Stress management, adaptability, decision-making under uncertainty
3. Communication: Conflict resolution, community organizing, information filtering
4. Resource management: Rationing, improvisation, reuse and repair
5. Self-sufficiency: Growing food, energy conservation, water management

For each domain, suggest specific skills to develop, learning resources, and practical ways to practice these skills in everyday life. Consider different living situations (urban/rural) and physical capabilities. Please start by asking about my current skill set, interests, and learning preferences.`
  },
  {
    id: "long-term-adaptation",
    title: "Long-Term Adaptation",
    description: "Strategic decisions for thriving in a changing world",
    category: "planning",
    prompt: `As a strategic foresight advisor specializing in long-term adaptation to the polycrisis, help me think through major life decisions that could increase my resilience over the next 5-20 years. Consider:

1. Location decisions: Climate resilience, resource availability, community stability
2. Housing choices: Design, energy systems, food production potential
3. Career/livelihood adaptation: Skills and sectors likely to remain viable or grow
4. Education/learning: Knowledge domains with enduring value
5. Health and wellbeing: Preventative approaches for long-term resilience

Provide a framework for making these decisions in the face of uncertainty, balancing immediate needs with long-term considerations. Include examples of how different adaptation strategies might play out under various future scenarios. Please start by asking about my current situation, constraints, and long-term goals.`
  },
  {
    id: "ethical-framework",
    title: "Ethical Decision-Making",
    description: "Navigating moral challenges during times of crisis",
    category: "mindset",
    prompt: `As an ethicist specializing in crisis situations, help me develop a personal ethical framework for making difficult decisions during times of disruption. Address questions such as:

1. How to balance personal/family security with wider community needs
2. Ethical considerations around resource allocation during scarcity
3. Moral obligations to vulnerable populations during systemic stress
4. Navigating competing values when all options involve compromise
5. Maintaining core principles while adapting to changing circumstances

Provide practical ethical guidelines that can be applied in real-world situations, drawing on diverse philosophical traditions and historical examples of ethical resilience during crises. Please start by asking about my core values and the ethical dilemmas I'm most concerned about.`
  }
]

export const categories = [
  { id: "all", name: "All Frameworks" },
  { id: "planning", name: "Planning & Assessment" },
  { id: "practical", name: "Practical Preparation" },
  { id: "social", name: "Social & Community" },
  { id: "mindset", name: "Mindset & Ethics" }
]