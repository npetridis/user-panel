export const groupBy = (xs, key) => xs.reduce((rv, x) => {
  (rv[x[key]] = rv[x[key]] || []).push(x);
  return rv;
}, {});

export const sortAlpha = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0;

export const sortNumber = (a, b, field) => a[field] - b[field];

export const createIndexOnField = (dataSet, indexField, objectDataField = 'id') => Object.entries(groupBy(dataSet, indexField))
  .reduce(
    (acc, value) => Object.assign(
      {},
      acc,
      { [value[0]]: value[1].map(obj => obj[objectDataField]) },
    ),
    {},
  );
