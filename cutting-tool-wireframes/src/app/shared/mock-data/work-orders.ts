import { WorkOrder } from '../models';

export const WORK_ORDERS: WorkOrder[] = [
  {
    id: 'wo-1',
    woNumber: 'WO-2026-0148',
    component: 'Shaft Coupling Flange',
    quantity: 240,
    material: 'EN24',
    dueDate: '2026-05-22',
    status: 'In Progress',
    operations: ['Facing', 'Turning', 'Drilling', 'Threading'],
    bom: [
      { partCode: 'RM-EN24-080', description: 'EN24 Bar Stock Ø80mm', qty: 240, uom: 'pc' },
      { partCode: 'CON-OIL', description: 'Cutting Oil', qty: 12, uom: 'L' },
    ],
    toolHistory: [
      { toolCode: 'CNMG 120408 4325', consumed: 8, failures: 1, lastUsed: '2026-05-15' },
      { toolCode: 'Drill Ø8.5 HSS', consumed: 4, failures: 0, lastUsed: '2026-05-16' },
    ],
  },
  {
    id: 'wo-2',
    woNumber: 'WO-2026-0151',
    component: 'Gearbox Housing',
    quantity: 60,
    material: 'Cast Iron Grade 250',
    dueDate: '2026-05-28',
    status: 'Queued',
    operations: ['Milling (Face)', 'Drilling', 'Tapping', 'Boring'],
    bom: [
      { partCode: 'RM-CI-CAST', description: 'CI Casting (Rough)', qty: 60, uom: 'pc' },
    ],
    toolHistory: [
      { toolCode: 'Face Mill Ø80', consumed: 2, failures: 0, lastUsed: '2026-05-12' },
    ],
  },
  {
    id: 'wo-3',
    woNumber: 'WO-2026-0146',
    component: 'Aerospace Bracket',
    quantity: 80,
    material: 'Aluminum 7075',
    dueDate: '2026-05-19',
    status: 'In Progress',
    operations: ['Milling', 'Drilling', 'Pocketing'],
    bom: [
      { partCode: 'RM-AL7075', description: 'AL 7075 Plate 50mm', qty: 80, uom: 'pc' },
    ],
    toolHistory: [
      { toolCode: 'End Mill Ø12 Carbide', consumed: 6, failures: 1, lastUsed: '2026-05-16' },
    ],
  },
  {
    id: 'wo-4',
    woNumber: 'WO-2026-0142',
    component: 'Turbine Disc',
    quantity: 12,
    material: 'Inconel 718',
    dueDate: '2026-06-04',
    status: 'Hold',
    operations: ['Turning', 'Profile Milling', 'Drilling'],
    bom: [
      { partCode: 'RM-INC-FORGE', description: 'Inconel Forging Blank', qty: 12, uom: 'pc' },
    ],
    toolHistory: [
      { toolCode: 'Ceramic Insert RNGN', consumed: 18, failures: 4, lastUsed: '2026-05-10' },
    ],
  },
  {
    id: 'wo-5',
    woNumber: 'WO-2026-0153',
    component: 'Bearing Sleeve',
    quantity: 500,
    material: 'EN31',
    dueDate: '2026-05-25',
    status: 'In Progress',
    operations: ['Turning', 'Boring', 'Grooving'],
    bom: [
      { partCode: 'RM-EN31-040', description: 'EN31 Bar Ø40mm', qty: 500, uom: 'pc' },
    ],
    toolHistory: [
      { toolCode: 'CBN Insert 7020', consumed: 14, failures: 2, lastUsed: '2026-05-16' },
    ],
  },
];
