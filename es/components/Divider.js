var _templateObject;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import { Box, themed } from '@etvas/etvaskit';
export var Divider = styled(Box)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  border-top: 1px solid ", ";\n"])), themed('colors.divider'));