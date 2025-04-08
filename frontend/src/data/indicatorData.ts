import { Trend } from './riskData';

export interface KeyIndicator {
  description: string;
  category: 'Economic' | 'Environmental' | 'Social' | 'Political' | 'Technological';
  currentValue?: string;
  threshold: string;
  percentToThreshold: number;
  status: 'Normal' | 'Warning' | 'Alert' | 'Critical';
  trend: Trend;
  implications?: string;
}

// Key indicators
export const keyIndicators: KeyIndicator[] = [
  {
    description: "Global food price volatility index exceeding 30% year-over-year for 3+ consecutive months",
    category: "Economic",
    currentValue: "24% year-over-year",
    threshold: "30% for 3+ months",
    percentToThreshold: 80,
    status: "Warning",
    trend: "Worsening",
    implications: "Indicates potential food security crisis affecting vulnerable populations first, with cascading effects on political stability in food-importing nations."
  },
  {
    description: "Simultaneous crop yield reductions >15% in 3+ major grain-producing regions",
    category: "Environmental",
    currentValue: "12% reduction in 2 regions",
    threshold: ">15% in 3+ regions",
    percentToThreshold: 65,
    status: "Alert",
    trend: "Rapidly Worsening",
    implications: "Would trigger global food price spikes, export restrictions, and humanitarian crises in import-dependent regions."
  },
  {
    description: "Energy price shock index exceeding 2 standard deviations from 10-year mean",
    category: "Economic",
    currentValue: "1.3 standard deviations",
    threshold: "2 standard deviations",
    percentToThreshold: 65,
    status: "Warning",
    trend: "Worsening",
    implications: "Would accelerate inflation, disproportionately impact low-income households, and potentially trigger recession in energy-intensive economies."
  },
  {
    description: "Sovereign debt stress indicator reaching 'high alert' threshold in 5+ G20 economies",
    category: "Economic",
    currentValue: "3 G20 economies at high alert",
    threshold: "5+ G20 economies",
    percentToThreshold: 60,
    status: "Warning",
    trend: "Stable",
    implications: "Could trigger cascading defaults, banking crises, and severe contraction in global credit availability."
  },
  {
    description: "Climate-related displacement exceeding 30M people annually for 2+ consecutive years",
    category: "Environmental",
    currentValue: "21.5M people annually",
    threshold: "30M for 2+ years",
    percentToThreshold: 72,
    status: "Alert",
    trend: "Worsening",
    implications: "Would overwhelm humanitarian systems, create political instability in receiving regions, and permanently alter demographic patterns."
  }
];

/**
 * Calculates the average threshold proximity across all indicators
 * @returns A number between 0-100 representing overall proximity to thresholds
 */
export function calculateAverageThresholdProximity(): number {
  return keyIndicators.reduce((sum, indicator) => sum + indicator.percentToThreshold, 0) / keyIndicators.length;
}

/**
 * Returns indicators filtered by status severity
 * @param minStatus The minimum severity status to include
 * @returns Filtered array of indicators
 */
export function getIndicatorsByMinStatus(minStatus: 'Normal' | 'Warning' | 'Alert' | 'Critical'): KeyIndicator[] {
  const severityMap = {
    'Normal': 0,
    'Warning': 1,
    'Alert': 2,
    'Critical': 3
  };
  
  const minSeverity = severityMap[minStatus];
  
  return keyIndicators.filter(indicator => 
    severityMap[indicator.status] >= minSeverity
  );
}

/**
 * Returns indicators filtered by category
 * @param category The category to filter by
 * @returns Filtered array of indicators
 */
export function getIndicatorsByCategory(category: KeyIndicator['category']): KeyIndicator[] {
  return keyIndicators.filter(indicator => indicator.category === category);
}

/**
 * Returns the count of indicators at or above a given status level
 * @param status The status level to check
 * @returns Number of indicators at or above the specified status
 */
export function getIndicatorCountByMinStatus(status: 'Normal' | 'Warning' | 'Alert' | 'Critical'): number {
  return getIndicatorsByMinStatus(status).length;
}
