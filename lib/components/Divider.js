"use strict";

exports.__esModule = true;
exports.Divider = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _etvaskit = require("@etvas/etvaskit");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Divider = (0, _styledComponents["default"])(_etvaskit.Box)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  border-top: 1px solid ", ";\n"])), (0, _etvaskit.themed)('colors.divider'));
exports.Divider = Divider;