import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-size: 62.5%;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none!important;
  }
  input:-webkit-autofill {
      -webkit-box-shadow:0 0 0 50px #0d1223 inset; /* Change the color to your own background color */
      box-shadow: transparent;
      -webkit-text-fill-color: #fff;
  }

  @font-face {
    font-family: 'Rajdhani-Regular';
    src: local('Rajdhani-Regular'), url("../assets/fonts/Rajdhani-Regular.ttf") format('truetype');
  }
  @font-face {
    font-family: 'Rajdhani-Medium';
    src: local('Rajdhani-Medium'), url("../assets/fonts/Rajdhani-Medium.ttf") format('truetype');
  }
  @font-face {
    font-family: 'Rajdhani-SemiBold';
    src: local('Rajdhani-SemiBold'), url("../assets/fonts/Rajdhani-SemiBold.ttf") format('truetype');
  }
  @font-face {
    font-family: 'Rajdhani-Bold';
    src: local('Rajdhani-Bold'), url("../assets/fonts/Rajdhani-Bold.ttf") format('truetype');
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Rajdhani-Regular', serif;
  }
  .container {
    width: 100%;
    max-width: 1184px;
    margin: 0 auto;
    padding: 30px 30px 0 30px;
  }
  .safeArea {
    padding: 80px 0 0 0;
  }
  .sidebarOpen {
    margin-left: 220px;
    width: calc(100% - 220px);
  }
  .sidebarClosed {
    margin-left: 80px;
    width: calc(100% - 80px);
  }
  @media only screen and (max-width: 576px) {
    .safeArea {
      padding: 60px 0;
    }
    .sidebarOpen {
      margin-left: 0px;
      width: 100%;
    }
    .sidebarClosed {
      margin-left: 0px;
      width: 100%;
    }
    .container {
      padding: 15px 15px 0 15px;
    }
  }
  .regular {
    font-family: 'Rajdhani-Regular';
  }
  .medium {
    font-family: 'Rajdhani-Medium';
  }
  .semibold {
    font-family: 'Rajdhani-SemiBold';
  }
  .bold {
    font-family: 'Rajdhani-Bold';
  }

  // HELLPERS
  .textCenter {
    text-align: center
  }
  .animate {
    transition: 0.3s ease;
  }
  .pointer {
    cursor: pointer;
  }
  .relative {
    position: relative;
  }

  // FLEXBOX
  .flex {
    display: flex;
  }
  .flexSpaceCenter {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flexNullCenter {
    display: flex;
    align-items: center;
  }
  .flexColumn {
    flex-direction: column;
  }
  .flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // FONT SIZES
  .font11 {
    font-size: 1.1rem;
  }
  .font12 {
    font-size: 1.2rem;
  }
  .font13 {
    font-size: 1.3rem;
  }
  .font14 {
    font-size: 1.4rem;
  }
  .font15 {
    font-size: 1.5rem;
  }
  .font18 {
    font-size: 1.8rem;
  }
  .font20 {
    font-size: 2.0rem;
  }
  .font25 {
    font-size: 2.5rem;
  }
  .font30 {
    font-size: 3.0rem;
  }
  .font40 {
    font-size: 4.0rem;
  }
  // BORDER RADIUS
  .radius8 {
    border-radius: 1rem;
  }
  .radius6 {
    border-radius: 0.6rem;
  }

  // ANIMATION
  .moveLabelUp {
    animation-name: moveLabelUpAnimation;
    animation-duration: 0.3s;
  }
  @keyframes moveLabelUpAnimation {
    from {top: 10px;}
    to {top: -5px;}
  }

  // SPACING
  .margin20-0 {
    margin: 20px 0;
  }


  // Spinner
  .spinner {
    width:20px;
    height:15px;
    --c:linear-gradient(currentColor 0 0);
    background: 
      var(--c) 0%   50%,
      var(--c) 50%  50%,
      var(--c) 100% 50%;
    background-size:4px 100%;
    background-repeat: no-repeat;
    animation:spinner 1s infinite linear;
  }
  @keyframes spinner {
      33%{background-size:4px 10% ,4px 100%,4px 100%}
      50%{background-size:4px 100%,4px 10% ,4px 100%}
      66%{background-size:4px 100%,4px 100%,4px 10% }
  }

  // Scrolbar
  ::-webkit-scrollbar {
      width: 5px;
  }
  ::-webkit-scrollbar-thumb {
      background-color: #ADAECD;
  }


`;
