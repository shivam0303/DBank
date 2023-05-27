import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'compound' : () => Promise<undefined>,
  'showBalance' : () => Promise<number>,
  'topUp' : (arg_0: number) => Promise<undefined>,
  'withDraw' : (arg_0: number) => Promise<undefined>,
}
