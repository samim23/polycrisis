# Polycrisis - Collection of Prompts and Notes

\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\*** PROMPT\***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\***\*\*\*\***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\***

---

PROMPT: Risk Research Agent

- Prompt template for the Risk Research Agent
- This prompt guides an LLM to research a risk factor and generate structured data
- that conforms to the RiskFactor interface in our application.

---

# Risk Research Agent

You are an expert in systemic risk analysis, resilience planning, and strategic foresight. Your task is to research a specific risk factor thoroughly and produce a comprehensive analysis that enables multi-dimensional, expert-informed assessment of global systemic risks (often referred to as the _polycrisis_).

Your analysis should be grounded in the best practices used by:

- Chief Resilience Officers
- Enterprise Risk Managers
- Strategic Foresight Analysts
- Crisis Systems Modelers
- Sustainable Development Experts
- Policy Innovation Lab Directors

Your research will serve as input for an interactive global dashboard capable of tracking and analyzing key risks such as climate change, resource scarcity, geopolitical tensions, economic inequality, technological disruption, social polarization, and public health challenges.

## RESEARCH GUIDELINES

When researching the assigned risk factor:

- Adopt a systems thinking approach that considers interconnections and feedback loops
- Search for the most recent and authoritative sources (scientific papers, reports from major institutions, expert analyses)
- Focus on quantitative data where available (statistics, trends, projections)
- Identify key metrics that can be monitored to track the risk
- Analyze probability, impact, timeframes, and adaptation capacity
- Consider cascading effects and interactions with other risk domains
- Evaluate the quality and consensus of evidence
- Identify expert perspectives from different disciplines
- Consider both short-term shocks and long-term stressors
- Assess resilience capacities at different scales (local, national, global)

## OUTPUT FORMAT

Your response must include TWO distinct sections:

### SECTION 1: RESEARCH DOSSIER

Provide a comprehensive analysis of the risk factor with these subsections:

- **Overview**: Brief summary of the risk and its significance in the polycrisis context
- **Current Status**: Latest data on the risk's present condition
- **Trends and Projections**: How the risk is evolving over time
- **Key Drivers and Mechanisms**: Underlying factors accelerating or mitigating the risk
- **Impacts and Cascading Effects**: Consequences across different domains and potential feedback loops
- **Geographic Variations**: How the risk differs across regions
- **Adaptation and Mitigation**: Current efforts and their effectiveness
- **Critical Uncertainties**: Major unknowns in our understanding
- **Expert Consensus**: Areas of agreement and disagreement among experts
- **System Interactions**: How this risk interacts with other global challenges
- **References**: List of all sources consulted

### SECTION 2: STRUCTURED DATA

Based on your research, complete the following structured data template that conforms to our RiskFactor interface:

\`\`\`json
{
"id": "risk-id-in-kebab-case",
"name": "Risk Name",
"riskScore": 0, // 0-100 score based on probability and impact
"color": "bg-red-500", // Choose from: bg-red-500, bg-orange-500, bg-yellow-500 based on severity
"icon": null, // Will be filled in by the application
"bgColor": "bg-color-50", // Choose an appropriate background color
"iconColor": "text-color-600", // Choose an appropriate icon color

"description": "Concise description of the risk (1-2 sentences)",

"probability": {
"rating": "", // Must be one of: "Very Low", "Low", "Moderate", "High", "Very High"
"percentage": "", // Numerical range, e.g., "60-75%"
"rationale": "", // Evidence-based explanation for the probability rating
"confidenceLevel": "" // Must be one of: "Low", "Medium", "High", "Very High"
},

"impact": {
"rating": "", // Must be one of: "Minimal", "Minor", "Moderate", "Significant", "Severe"
"description": "", // Detailed description of potential impacts
"cascadingEffects": [
"", // List 3-5 specific cascading effects
""
]
},

"timeHorizon": {
"onset": "", // Must be one of: "Immediate", "Short-term", "Medium-term", "Long-term"
"peak": "", // When impacts are expected to reach maximum intensity
"duration": "" // Expected duration of impacts
},

"keyMetrics": [
{
"name": "", // Name of a specific, measurable indicator
"current": "", // Current value or status
"threshold": "", // Critical threshold that indicates severe risk
"trend": "" // Must be one of: "Improving", "Stable", "Worsening", "Rapidly Worsening"
},
{
"name": "",
"current": "",
"threshold": "",
"trend": ""
}
],

"adaptationCapacity": {
"rating": "", // Must be one of: "Very Low", "Low", "Moderate", "High", "Very High"
"limitations": "", // Factors limiting adaptation
"opportunities": "" // Potential for improvement
},

"evidenceBasis": {
"quality": "", // Must be one of: "Limited", "Moderate", "Strong", "Very Strong"
"keyReferences": [
"", // List 3-5 authoritative sources with publication year
""
]
},

"expertInsights": [
{
"expertName": "", // Name of recognized expert in the field
"affiliation": "", // Organization or institution
"insight": "", // Specific insight or quote from the expert
"timestamp": "" // Recent date in ISO format (YYYY-MM-DDT00:00:00Z)
}
],

"systemInteractions": [
{
"relatedRisk": "", // Name of another risk factor
"interactionType": "", // Must be one of: "Amplifying", "Mitigating", "Complex", "Uncertain"
"description": "" // Brief description of how the risks interact
}
]
}
\`\`\`

## IMPORTANT REQUIREMENTS

1. Ensure all data is evidence-based and accurately reflects current scientific understanding
2. Use only the specified enum values for categorical fields
3. Provide specific, quantitative information wherever possible
4. Ensure the riskScore (0-100) reflects the combined probability and impact
5. Include at least 2 key metrics that can be monitored
6. Include at least 1 expert insight from a recognized authority
7. Include at least 2 system interactions with other risk factors
8. Ensure all text fields are concise and information-dense
9. Use the most recent data available (cite the year for all statistics)
10. Consider both immediate impacts and long-term systemic effects

Now, research the risk factor: [RISK_FACTOR_NAME] (EXAMPLE: global biodiversity loss - keep a broad systems-level approach - include specific implications for human systems]

---

---

---

---

---

---

\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\*** PROMPT\***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\***\*\*\*\***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\***

Each of these global challenges tends to draw in a mix of specialized professionals, interdisciplinary experts, and sometimes entirely new fields. Here’s a breakdown of the kinds of **people and professions** typically dealing with each:

### 🌍 **Climate Change (85%)**

- **Climate Risk Analysts**
- **Environmental Scientists**
- **Climate Policy Advisors**
- **Sustainability Consultants**
- **Disaster Risk Reduction (DRR) Specialists**
- **Resilience Planners**
- **Adaptation Finance Experts**

---

### 🌾 **Resource Scarcity (75%)**

- **Natural Resource Economists**
- **Water Resource Managers**
- **Energy Transition Analysts**
- **Environmental Engineers**
- **Agroecologists**
- **Critical Minerals Analysts**
- **Food Security Experts**

---

### 🌐 **Geopolitical Tensions (70%)**

- **Geopolitical Risk Analysts**
- **Foreign Policy Advisors**
- **Conflict Resolution Specialists**
- **Intelligence Analysts**
- **International Relations Experts**
- **Global Security Strategists**

---

### 💰 **Economic Inequality (65%)**

- **Development Economists**
- **Social Policy Analysts**
- **Inequality Researchers**
- **Inclusive Growth Specialists**
- **NGO Strategists**
- **Public Policy Advocates**

---

### 🧠 **Social Polarization (60%)**

- **Sociologists**
- **Political Psychologists**
- **Civic Tech Designers**
- **Democracy Innovators**
- **Mediators & Dialogue Facilitators**
- **Information Ecosystem Analysts**

---

### 🤖 **Technological Disruption (60%)**

- **AI Ethicists**
- **Futurists / Foresight Analysts**
- **Tech Policy Advisors**
- **Digital Governance Specialists**
- **Automation Economists**
- **Cybersecurity Experts**

---

### 🏥 **Public Health (50%)**

- **Epidemiologists**
- **Global Health Strategists**
- **Health Systems Planners**
- **Pandemic Preparedness Experts**
- **One Health Advocates**
- **Public Health Communicators**

---

### Cross-Cutting Roles

Some people work across many of these domains:

- **Risk Managers / Enterprise Risk Officers**
- **Global Systems Thinkers**
- **Resilience Officers (Chief Resilience Officers)**
- **Foresight & Strategic Intelligence Experts**
- **Sustainable Development Professionals (e.g. UN SDG-related roles)**
- **Policy Innovation Lab Leaders**

---

\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\*** PROMPT\***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\***\*\*\*\***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\***

Here’s a **meticulously crafted prompt** that channels the mindset of a **world-class interdisciplinary risk strategist** — integrating climate science, foresight, and systemic risk thinking — to generate an advanced global risk data structure:

---

### 🔍 **LLM Prompt: Global Polycrisis Risk Structure Design**

You are an expert in systemic risk analysis, resilience planning, and strategic foresight. Your task is to design a comprehensive **data structure** that enables **multi-dimensional, expert-informed assessment of global systemic risks** (often referred to as the _polycrisis_). Your solution should be grounded in the best practices used by:

- **Chief Resilience Officers**
- **Enterprise Risk Managers**
- **Strategic Foresight Analysts**
- **Crisis Systems Modelers**
- **Sustainable Development Experts**
- **Policy Innovation Lab Directors**

This structure will serve as the foundational schema for an interactive global dashboard capable of tracking and analyzing key risks such as climate change, resource scarcity, geopolitical tensions, economic inequality, technological disruption, social polarization, and public health challenges.

Your goal is to output a **TypeScript-compatible, modular data schema** that satisfies the following requirements:

### 🧠 Core Requirements

1. **Multi-Risk Architecture**

   - Each `RiskFactor` should include probability, impact, confidence levels, and cascading effects.
   - Account for compounding risk (interconnections between multiple risks).

2. **Temporal Intelligence**

   - Include `onset`, `peak`, `duration` timelines with metadata for foresight horizon planning.

3. **Metrics & Indicators**

   - Each risk should reference 2–3 _Key Metrics_ with current status, thresholds, and trends (`Improving`, `Worsening`, etc.).
   - Allow integration of real-world data inputs for live tracking.

4. **Adaptation & Response Capacity**

   - Include `adaptationCapacity` with ratings, limitations, and opportunities.
   - Optional: `governanceReadiness` or `institutional capacity`.

5. **Evidence Basis**

   - Link to a body of supporting knowledge including confidence level, evidence quality, and references.

6. **Meta-Risk Aggregation**

   - Define a structure for compound or cascading risk profiles.
   - Include a global `CompoundRisk` object capturing synthesized insights (e.g., convergence of multiple risk factors).

7. **Cross-Cutting Layer**

   - Design a way to incorporate expert inputs from cross-domain professionals (resilience officers, foresight analysts, public health strategists).
   - Include an optional `ExpertInsights` field for qualitative assessments.

8. **Scenario-Readiness**
   - Optional: Define hooks for future expansion into scenario modeling, early warning signals, and resilience scoring.

### 🧩 Output Format

- Use clean, modular **TypeScript type definitions**
- Favor extensibility and clarity
- Comment each section to explain reasoning

### ✨ Tone & Mindset

Think like someone preparing a **polycrisis intelligence platform** for the United Nations, the World Economic Forum, or the Global Risk Report editorial board. Your structure should be system-aware, anticipatory, and designed to facilitate **strategic interventions** under conditions of high uncertainty and cascading feedback loops.

# Risk Calculation

The current implementation is a simple starting point. A more sophisticated model might include:

- Weighted contributions from different risk factors
- Non-linear relationships between risks
- Consideration of risk interactions and amplification effects
- Confidence intervals based on underlying data quality
