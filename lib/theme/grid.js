"use strict";

exports.__esModule = true;
exports.GRID_DOT = exports.GRID = void 0;

var _etvaskit = require("@etvas/etvaskit");

var GRID = {
  header: {
    display: 'grid',
    height: '40px',
    width: '100%',
    outline: 'none'
  },
  row: {
    display: 'grid',
    height: '44px',
    width: '100%',
    outline: 'none',
    borderRadius: _etvaskit.etvasTheme.radii[3],
    backgroundColor: _etvaskit.etvasTheme.colors.white,
    border: "1px solid " + _etvaskit.etvasTheme.colors.lighterOutline,
    marginBottom: 4
  },
  'row-extended': {
    background: _etvaskit.etvasTheme.colors.white,
    marginBottom: 0,
    borderRadius: 0,
    borderTopLeftRadius: _etvaskit.etvasTheme.radii[3],
    borderTopRightRadius: _etvaskit.etvasTheme.radii[3],
    border: "1px solid " + _etvaskit.etvasTheme.colors.lighterOutline,
    borderBottom: 'none'
  },
  cell: {
    fontSize: _etvaskit.etvasTheme.sizes.medium,
    height: '44px'
  }
};
exports.GRID = GRID;
var GRID_DOT = {
  minWidth: _etvaskit.etvasTheme.sizes.small,
  height: _etvaskit.etvasTheme.sizes.small,
  borderRadius: '50%',
  display: 'block'
};
exports.GRID_DOT = GRID_DOT;