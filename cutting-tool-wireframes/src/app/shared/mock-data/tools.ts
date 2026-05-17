import { Tool } from '../models';

export const MATERIALS = [
  'SS 304 (Stainless Steel)',
  'SS 316L',
  'EN8 (Medium Carbon Steel)',
  'EN24 (Alloy Steel)',
  'EN31 (Bearing Steel)',
  'Inconel 718',
  'Titanium Ti-6Al-4V',
  'Aluminum 6061-T6',
  'Aluminum 7075',
  'Cast Iron Grade 250',
];

export const MACHINES = [
  'Mazak QTN-200MY (Turning Center)',
  'DMG MORI NLX 2500 (CNC Lathe)',
  'Haas VF-2SS (Vertical Machining Center)',
  'Makino F3 (VMC)',
  'Doosan PUMA 2600 (Turning Center)',
];

export const RECOMMENDED_TOOL: Tool = {
  id: 't-001',
  code: 'CNMG 120408-PM 4325',
  brand: 'Sandvik Coromant',
  type: 'Insert',
  description: 'Negative turning insert, CVD coated, optimised for steel finishing',
  cuttingSpeed: 280,
  feedRate: 0.25,
  depthOfCut: 1.5,
  estimatedLife: 420,
  confidence: 87,
  unitPrice: 485,
};

export const ALTERNATIVE_TOOLS: Tool[] = [
  {
    id: 't-002',
    code: 'CNMG 120408-MM 2220',
    brand: 'Kennametal',
    type: 'Insert',
    description: 'Multi-purpose grade for stainless steel',
    cuttingSpeed: 260,
    feedRate: 0.22,
    depthOfCut: 1.4,
    estimatedLife: 380,
    confidence: 81,
    unitPrice: 462,
  },
  {
    id: 't-003',
    code: 'CNMG 120408-MR TP2500',
    brand: 'Seco Tools',
    type: 'Insert',
    description: 'Roughing geometry, high feed capability',
    cuttingSpeed: 250,
    feedRate: 0.28,
    depthOfCut: 1.8,
    estimatedLife: 360,
    confidence: 78,
    unitPrice: 441,
  },
];
