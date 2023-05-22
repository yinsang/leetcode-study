export const deepEqual = (origin, target) => {
  if (origin === target) {
    return true;
  }
  if (typeof origin !== typeof target) {
    return false;
  }
  if (typeof origin === "object") {
    const originKeys = Object.keys(origin);
    const targetKeys = Object.keys(target);
    for (const key of originKeys) {
      if (!deepEqual(origin[key], target[key])) {
        return false;
      }
    }
    return true;
  }
};
