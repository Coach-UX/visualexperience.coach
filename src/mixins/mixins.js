import { css } from 'styled-components';

const breakpoints = {
   sm: "max-width: 480px",
   portrait: "orientation: portrait",
   touch: "hover: none"
}

export default Object.keys(breakpoints).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (${breakpoints[label]}) {
         ${css(...args)};
      }
   `
   return acc
}, {})
