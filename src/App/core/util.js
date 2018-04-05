export const groupBy = (xs, key) => xs.reduce((rv, x) => {
  (rv[x[key]] = rv[x[key]] || []).push(x);
  return rv;
}, {});

export const sortAlpha2 = (a, b, field) => (a[field] < b[field]) ? -1 : (a[field] > b[field]) ? 1 : 0;

export const sortAlpha = (a, b, field) => {
  const r = (a[field] < b[field]) ? -1 : (a[field] > b[field]) ? 1 : 0
  console.log(a[field], b[field], r);
  return r;
};

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


const t = [
  {
    name: 'What',
    age: 34,
  },
  {
    name: 'Uysd',
    age: 5634,
  },
  {
    name: 'rtdfs',
    age: 34,
  },
  {
    name: 'adam',
    age: 134,
  },
  {
    name: 'kjlsa',
    age: 934,
  },
  {
    name: 'What',
    age: 634,
  }
]