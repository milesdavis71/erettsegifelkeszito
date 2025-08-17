module.exports = function(array, value, options) {
  if (Array.isArray(array) && array.includes(value)) {
    return options.fn(this);   // ha tartalmazza → rendereld a blokkot
  }
  return '';                   // különben semmi
};