import { ThemeContext } from '@emotion/core'
import { css } from '@emotion/core'
export const globalStyles = css`
/* http://meyerweb.com/eric/tools/css/reset/
v2.0 | 20110126
License: none (public domain)
*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  /* stylelint-disable-next-line */
  font: inherit;
  vertical-align: baseline;
}

/* Added to Fix Footer to bottom of viewport */
html,
body {
  background: #FAFAFA;
  height: 100%;
  overflow: auto;
}

.siteRoot {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
body > .siteRoot > #fullScreen {
  height: 100%;
}
.siteContent {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
}
footer {
  width: 100%;
}

.fullScreen {
  display: block;
}

.minimized {
  display: none !important;
}

/* End Fix to Place Footer on Bottom of Viewport */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

@media screen and (min-width: 35em) {
  html {
    margin-right: calc(-100vw + 100%);
    overflow: hidden;
  }
}

ol,
ul,
li {
  list-style: circle;
}

blockquote,
q {
  quotes: none;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
box-sizing: border-box;
}

body {
  line-height: 1;
  font-size: 100%;
  font-variant-ligatures: none;
  text-rendering: optimizeLegibility;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  font-weight: 400;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

button,
input,
textarea,
select {
  font-family: inherit;
  font-size: inherit;
  background: none;
  border: none;
  appearance: none;
  border-radius: 0;
  resize: none;
  &:invalid {
    box-shadow: none;
  }
  &:focus {
    outline: 5px auto #5e9ed6;
    outline: 5px auto -webkit-focus-ring-color;
  }
}

body:not(.user-is-tabbing) button:focus,
body:not(.user-is-tabbing) input:focus,
body:not(.user-is-tabbing) select:focus,
body:not(.user-is-tabbing) textarea:focus,
body:not(.user-is-tabbing) a:focus {
  outline: none;
}

p {
  margin: 0 auto;
  line-height: 1.6;
}

h1,
h2,
h3 {
  line-height: 1.25;
  margin: 0 0 1rem 0;
}


  h1 {
      font-size: 2em;
      @media (min-width: ${props => props.theme.responsive.small}) {
      font-size: 2.8em;
  }
  }
  h2 {
      font-size: 1.8em;
      font-weight: 700;
  }
  h3 {
      font-size: 1.3em;
  }
  h1,
  h2 {
    text-transform: uppercase;
    font-weight: 300;
    text-align: left;
    margin: 0 0 .5em 0;
    line-height: 1.2;
    font-family: ${props => props.theme.fonts.header};
  }

  h3 {
    text-transform: lowercase;
    font-weight: 300;
    text-align: left;
    margin: 0 0 .5em 0;
    line-height: 1.2;
    font-family: ${props => props.theme.fonts.header};
  }

  h2 {
    font-weight: 500;
  }
`
