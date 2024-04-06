import { ReactComponent as Butterfly } from './butterfly.svg';
import { ReactComponent as BlackButterfly } from './black-butterfly.svg';

import { ReactComponent as Clover } from './clover.svg';
import { ReactComponent as BlackClover } from './black-clover.svg';

import { ReactComponent as Key } from './key.svg';
import { ReactComponent as BlackKey } from './black-key.svg';

import { ReactComponent as Flower } from './flower.svg';
import { ReactComponent as BlackFlower } from './black-flower.svg';

import { ReactComponent as Letter } from './letter.svg';
import { ReactComponent as BlackLetter } from './black-letter.svg';

export const badges = {
  butterfly: {
    locked: BlackButterfly,
    unLocked: Butterfly,
  },
  clover: {
    locked: BlackClover,
    unLocked: Clover,
  },
  key: {
    locked: BlackKey,
    unLocked: Key,
  },
  flower: {
    locked: BlackFlower,
    unLocked: Flower,
  },
  letter: {
    locked: BlackLetter,
    unLocked: Letter,
  },
};

export type BadgeType = keyof typeof badges;
