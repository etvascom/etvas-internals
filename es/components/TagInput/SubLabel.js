var _templateObject;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { variant } from 'styled-system';
import { Typography } from '@etvas/etvaskit';
import { default as sublabelVariants } from './variants.sublabel';
export var SubLabel = styled(Typography)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  min-height: ", ";\n  ", "\n"])), function (_ref) {
  var noPreserveSpace = _ref.noPreserveSpace;
  return noPreserveSpace ? 0 : '16px';
}, variant({
  variants: sublabelVariants
}));