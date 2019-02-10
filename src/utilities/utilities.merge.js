/**
 * Check if it is an object and is not an array.
 * @param {Object} item 
 */
function isObject(item) {
  return (item && typeof item === 'object' 
  && !Array.isArray(item));
}

/**
 * Deep merge on two objects
 * https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge/34749873
 * @param {Object} target 
 * @param {Object} sources
 */
function mergeObjectDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeObjectDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeObjectDeep(target, ...sources);
}

export { mergeObjectDeep as mergeObject }