exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: '#373737',
    foregroundColor: '#D0CFC8',
    cursorColor: '#D0CFC8',
    colors: {
      black: '#373737',
      red: '#EB6E6C',
      green: '#99EB8A',
      yellow: '#EDE84C',
      blue: '#93AFCF',
      magenta: '#D1B8D4',
      cyan: '#9FD2D3',
      white: '#D0CFC8',
      lightBlack: '#434343',
      lightRed: '#EAB9B9',
      lightGreen: '#D3E4D0',
      lightYellow: '#F7EAD0',
      lightBlue: '#B6C9DF',
      lightMagenta: '#E6D8E7',
      lightCyan: '#C2E2E3',
      lightWhite: '#F1EFEC'
    },
    css: `
      ${config.css || ''}
      .splitpane_divider {
        background-color: 434343;
      }
    `
  });
}
