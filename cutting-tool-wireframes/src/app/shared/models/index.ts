export interface Tool {
  id: string;
  code: string;
  brand: string;
  type: 'Insert' | 'End Mill' | 'Drill' | 'Tap' | 'Reamer';
  description: string;
  cuttingSpeed: number;
  feedRate: number;
  depthOfCut: number;
  estimatedLife: number;
  confidence: number;
  unitPrice: number;
}

export interface WorkOrder {
  id: string;
  woNumber: string;
  component: string;
  quantity: number;
  material: string;
  dueDate: string;
  status: 'In Progress' | 'Queued' | 'Completed' | 'Hold';
  operations: string[];
  bom: BomItem[];
  toolHistory: ToolHistoryItem[];
}

export interface BomItem {
  partCode: string;
  description: string;
  qty: number;
  uom: string;
}

export interface ToolHistoryItem {
  toolCode: string;
  consumed: number;
  failures: number;
  lastUsed: string;
}

export interface KpiCard {
  label: string;
  value: string;
  delta: string;
  trend: 'up' | 'down' | 'flat';
  icon: string;
}

export interface RecommendationInput {
  material: string;
  operation: 'Turning' | 'Milling' | 'Drilling';
  machine: string;
  surfaceFinish: number;
}

export interface ChartSeries {
  name: string;
  series: { name: string; value: number }[];
}

export interface ChartPoint {
  name: string;
  value: number;
}
