const zIndexTypes = {
    base: 1,
    menuCollapse: 10,
    blackdrop: 100,
    sidebar: 1000,
}

const variables = {
    // Colors
    white: '#FFFFFF',

    red: '#dc3545',

    green: '#28a745',

    yellow: '#ffc107',

    orange: '#FFA500',

    blue: '#007bff',
    blue1: '#17a2b8',

    black: '#000000',
    black1: '#343a40',

    grey: '#6c757d',

    // Border
    borderRadiusBase: '2px',
    borderRadiusMedium: '4px',

    // Font
    fontSizeSmallest: '10px',
    fontSizeMedium: '16px',
    fontSizeXLarge: '32px',

    fontWeightBase: 300,
    fontWeightBold: 600,

    // z-index
    zIndex: name => zIndexTypes[name],
}

export default variables