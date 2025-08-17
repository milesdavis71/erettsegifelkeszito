
module.exports =  function(array, separator) {
  if (!Array.isArray(array)) return array;
  return array.join(separator || ', ');
};
