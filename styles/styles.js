import emotion from 'emotion/dist/emotion.umd.min.js';

const { css } = emotion;

const brandColor = '#3e4346';
const fontFamilySansSerif = "'Inter', sans-serif";


export const myName = css`
  color: ${brandColor};
  max-width: 800px;
  -webkit-font-feature-settings: "ss03","zero","cv08","cv11" 1;
  font-feature-settings: "ss03","zero","cv08","cv11" 1;
  font-size: 5vw;
  line-height: 1.1em;
  line-height: .9em;
  margin: .2em 0 .6em;
  font-weight: 900;
`;

export const para = css`
  font-size: 16px;
`
export const headerText = css`
  max-width: 800px;
`
export const myDescription = css`
  margin-top: 30px;
  font-size: 1.2em;
  line-height: 1.6em;
`

export const link = css`
  font-weight: 600;
  color: #f74646;
  border-bottom: 4px solid #f7464696;
  /* text-decoration: underline;
  text-decoration-style: wavy; */
`
