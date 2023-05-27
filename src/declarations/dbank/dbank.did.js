export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'compound' : IDL.Func([], [], ['oneway']),
    'showBalance' : IDL.Func([], [IDL.Float64], ['query']),
    'topUp' : IDL.Func([IDL.Float64], [], ['oneway']),
    'withDraw' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
