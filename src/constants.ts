import { LiftModel } from './types';

export const LIFT_MODELS: LiftModel[] = [
  { id: 1, name: 'Default', speed: 0.6, capacity: 3, doors: 1.5, cost: 0 },
  { id: 2, name: 'Standard', speed: 0.8, capacity: 4, doors: 1.3, cost: 50 },
  { id: 3, name: 'Express', speed: 1, capacity: 5, doors: 1.1, cost: 100 },
  { id: 4, name: 'Bullet', speed: 1.8, capacity: 6, doors: 0.9, cost: 250 },
];

export const DIFFICULTY_MULTIPLIERS = {
  Easy: { spawnRate: 4, patience: 25 },
  Medium: { spawnRate: 2.6, patience: 20 },
  Hard: { spawnRate: 2.3, patience: 15 },
};

export const LEVEL_CONFIGS = [
  { level: 1, floors: 3, shafts: 1, maxWaiters: 4, bg: 'bg-slate-900' },
  { level: 2, floors: 4, shafts: 1, maxWaiters: 5, bg: 'bg-slate-800' },
  { level: 3, floors: 4, shafts: 1, maxWaiters: 6, bg: 'bg-slate-900' },
  { level: 4, floors: 5, shafts: 1, maxWaiters: 7, bg: 'bg-blue-950' },
  { level: 5, floors: 6, shafts: 2, maxWaiters: 8, bg: 'bg-blue-900' },
  { level: 6, floors: 7, shafts: 2, maxWaiters: 9, bg: 'bg-blue-950' },
  { level: 7, floors: 8, shafts: 2, maxWaiters: 10, bg: 'bg-indigo-950' },
  { level: 8, floors: 9, shafts: 2, maxWaiters: 12, bg: 'bg-indigo-900' },
  { level: 9, floors: 10, shafts: 3, maxWaiters: 15, bg: 'bg-indigo-950' },
];
