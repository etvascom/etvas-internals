var sortFunctions = {
  string: function string(a, b) {
    return a.localeCompare(b);
  },
  number: function number(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  },
  "boolean": function boolean(a, b) {
    return !!a - !!b;
  },
  currency: function currency(a, b) {
    var ca = parseFloat(a.replace(/€/g, ''));
    var cb = parseFloat(b.replace(/€/g, ''));
    return ca === cb ? 0 : ca > cb ? 1 : -1;
  },
  "default": function _default(a, b) {
    return ("" + a).localeCompare("" + b);
  }
};

var checkSortParameters = function checkSortParameters(a, b) {
  if (a === undefined || a === null) {
    return -1;
  }

  if (b === undefined || b === null) {
    return 1;
  }

  return false;
};

var detectSortingType = function detectSortingType(value) {
  if (typeof value === 'string') {
    return 'string';
  }

  if (typeof value === 'number') {
    return 'number';
  }

  if (typeof value === 'boolean') {
    return 'boolean';
  }

  if (value.indexOf('€') >= 0) {
    return 'currency';
  }

  return 'default';
};

export var doSort = function doSort(a, b) {
  var check = checkSortParameters(a, b);

  if (check) {
    return check;
  }

  var type = detectSortingType(a);
  return sortFunctions[type](a, b);
};