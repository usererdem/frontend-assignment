import { AnimationControls } from 'framer-motion';
import { atom } from 'jotai';

export const controlsAtom = atom<AnimationControls | undefined>(undefined);
