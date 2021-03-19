// import styled from 'styled-components';
import repeat from 'lodash/repeat';

export const disableHighlight = `
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const transition = `
  transition: all 400ms cubic-bezier(0.83, 0, 0.17, 1);
`;

export function easeInOutQuint(x) {
  return x < 0.5 ? 16 * Math.pow(x, 5) : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

export function alpha(c, opacity) {
  // prepend hash if it did not arrive with one
  let color = c[0] === '#' ? c : `#${c}`;

  // if color is shorthand hex, elongate it
  color = color.length === 4 ?
    `#${repeat(color[1], 2)}${repeat(color[2], 2)}${repeat(color[3], 2)}`
    : color;


  const opacities = Object.freeze({
    1: '1a', 2: '33', 3: '4d',
    4: '66', 5: '80', 6: '99',
    7: 'b3', 8: 'cc', 9: 'e6',
  });

  return `${color}${opacities[opacity] || ''}`;
}
