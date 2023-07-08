export const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  const result = [];
  const daySeed = new Date(date).getDate();

  for (let i = 17; i <= 23; i++) {
    const random = seededRandom(daySeed * 24 + i);
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() < 0.5) {
      result.push(`${i}:30`);
    }
  }

  return Promise.resolve(result);
};

export const submitAPI = function (formData) {
  return true;
};
