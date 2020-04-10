import { css } from 'styled-components';

const breakpoints = {
   sm: 480
}

export default Object.keys(breakpoints).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})
