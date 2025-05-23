import { type ClassValue } from 'clsx';
import type { TransitionConfig } from 'svelte/transition';
export declare function cn(...inputs: ClassValue[]): string;
interface FlyAndScaleParams {
  y?: number;
  x?: number;
  start?: number;
  duration?: number;
}
export declare const flyAndScale: (node: Element, params?: FlyAndScaleParams) => TransitionConfig;
export {};
