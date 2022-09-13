"use strict";

exports.__esModule = true;
exports.SubLabel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _etvaskit = require("@etvas/etvaskit");

var _variants = _interopRequireDefault(require("./variants.sublabel"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var SubLabel = (0, _styledComponents["default"])(_etvaskit.Typography)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  min-height: ", ";\n  ", "\n"])), function (_ref) {
  var noPreserveSpace = _ref.noPreserveSpace;
  return noPreserveSpace ? 0 : '16px';
}, (0, _styledSystem.variant)({
  variants: _variants["default"]
}));
exports.SubLabel = SubLabel;