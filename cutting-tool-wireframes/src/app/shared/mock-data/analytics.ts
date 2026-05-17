import { ChartPoint, ChartSeries } from '../models';

export const TOOL_LIFE_TREND: ChartSeries[] = [
  {
    name: 'Actual Tool Life (parts)',
    series: [
      { name: 'W1', value: 310 }, { name: 'W2', value: 322 }, { name: 'W3', value: 335 },
      { name: 'W4', value: 340 }, { name: 'W5', value: 355 }, { name: 'W6', value: 372 },
      { name: 'W7', value: 380 }, { name: 'W8', value: 388 }, { name: 'W9', value: 395 },
      { name: 'W10', value: 408 }, { name: 'W11', value: 415 }, { name: 'W12', value: 420 },
    ],
  },
  {
    name: 'Target',
    series: [
      { name: 'W1', value: 380 }, { name: 'W2', value: 380 }, { name: 'W3', value: 380 },
      { name: 'W4', value: 380 }, { name: 'W5', value: 380 }, { name: 'W6', value: 380 },
      { name: 'W7', value: 380 }, { name: 'W8', value: 380 }, { name: 'W9', value: 380 },
      { name: 'W10', value: 380 }, { name: 'W11', value: 380 }, { name: 'W12', value: 380 },
    ],
  },
];

export const FAILURE_BY_GRADE: ChartPoint[] = [
  { name: 'PM 4325', value: 4 },
  { name: 'MM 2220', value: 7 },
  { name: 'MR TP2500', value: 11 },
  { name: 'CBN 7020', value: 3 },
  { name: 'Ceramic RNGN', value: 14 },
  { name: 'HSS Drill', value: 9 },
];

export const REJECTION_REASONS: ChartPoint[] = [
  { name: 'Surface Finish', value: 32 },
  { name: 'Dimensional', value: 24 },
  { name: 'Tool Marks', value: 18 },
  { name: 'Burr', value: 14 },
  { name: 'Chatter', value: 12 },
];

export const TOOL_UTILIZATION = [
  { toolCode: 'CNMG 120408 PM 4325', expected: 380, actual: 420, utilisation: 110, status: 'Above Target' },
  { toolCode: 'End Mill Ø12 Carbide', expected: 500, actual: 472, utilisation: 94, status: 'On Target' },
  { toolCode: 'Drill Ø8.5 HSS', expected: 220, actual: 198, utilisation: 90, status: 'On Target' },
  { toolCode: 'Ceramic Insert RNGN', expected: 80, actual: 56, utilisation: 70, status: 'Below Target' },
  { toolCode: 'Face Mill Ø80', expected: 1200, actual: 1280, utilisation: 107, status: 'Above Target' },
  { toolCode: 'CBN Insert 7020', expected: 900, actual: 880, utilisation: 98, status: 'On Target' },
];

export const RECENT_RECOMMENDATIONS = [
  { time: '14:22', material: 'EN24', operation: 'Turning', tool: 'CNMG 120408 PM 4325', confidence: 87 },
  { time: '13:48', material: 'Aluminum 6061', operation: 'Milling', tool: 'End Mill Ø10 AlTiN', confidence: 92 },
  { time: '12:05', material: 'SS 316L', operation: 'Drilling', tool: 'Carbide Drill Ø8.5', confidence: 79 },
  { time: '11:30', material: 'Inconel 718', operation: 'Turning', tool: 'Ceramic RNGN', confidence: 74 },
  { time: '10:11', material: 'EN31', operation: 'Boring', tool: 'CBN Insert 7020', confidence: 85 },
];

export const ALERTS = [
  { severity: 'warn', message: 'Insert grade Ceramic RNGN failing 30% above expected on Inconel 718 — review recommended.' },
  { severity: 'info', message: 'Tool life on CNMG 120408 PM 4325 trending up — recommendations adjusted.' },
  { severity: 'warn', message: 'Stock for Drill Ø8.5 HSS below reorder point at Distributor B.' },
];
