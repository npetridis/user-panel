export const groupBy = (xs, key) => xs.reduce((rv, x) => {
  (rv[x[key]] = rv[x[key]] || []).push(x);
  return rv;
}, {});

export const sortAlpha = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0;

export const sortNumber = (a, b) => a - b;
