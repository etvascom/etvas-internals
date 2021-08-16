import { etvasTheme } from '@etvas/etvaskit';
export var GRID = {
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
    borderRadius: etvasTheme.radii[3],
    backgroundColor: etvasTheme.colors.white,
    border: "1px solid " + etvasTheme.colors.lighterOutline,
    marginBottom: 4
  },
  'row-extended': {
    background: etvasTheme.colors.white,
    marginBottom: 0,
    borderRadius: 0,
    borderTopLeftRadius: etvasTheme.radii[3],
    borderTopRightRadius: etvasTheme.radii[3],
    border: "1px solid " + etvasTheme.colors.lighterOutline,
    borderBottom: 'none'
  },
  cell: {
    fontSize: etvasTheme.sizes.medium,
    height: '44px'
  }
};
export var GRID_DOT = {
  minWidth: etvasTheme.sizes.small,
  height: etvasTheme.sizes.small,
  borderRadius: '50%',
  display: 'block'
};