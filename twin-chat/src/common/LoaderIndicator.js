import React from "react";
import { css } from "@emotion/react";

const LoaderIndicator = () => {
  return (
    <div css={loaderStyles}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const loaderStyles = css`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export default LoaderIndicator;

// import React from "react";
// import { css } from "@emotion/react";

// const LoaderIndicator = () => {
//   return (
//     <div css={loaderStyles}>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//     </div>
//   );
// };

// const loaderStyles = css`
//   display: inline-block;
//   position: relative;
//   width: 80px;
//   height: 80px;
//   div {
//     box-sizing: border-box;
//     display: block;
//     position: absolute;
//     width: 64px;
//     height: 64px;
//     margin: 8px;
//     border: 8px solid #fff;
//     border-radius: 50%;
//     animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
//     border-color: #fff transparent transparent transparent;
//   }
//   div:nth-child(1) {
//     animation-delay: -0.45s;
//   }
//   div:nth-child(2) {
//     animation-delay: -0.3s;
//   }
//   div:nth-child(3) {
//     animation-delay: -0.15s;
//   }
//   @keyframes lds-ring {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;

// export default LoaderIndicator;
