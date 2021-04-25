import "@fontsource/ibm-plex-mono/400.css"
import "@fontsource/ibm-plex-mono/700.css"
import "@fontsource/open-sans"
import "@fontsource/biorhyme"
import "@fontsource/ibm-plex-sans"
import "@fontsource/orelega-one"



const myBg = 'linear-gradient(135.31deg, #00113F 8.15%, #4F0051 99.17%);'

export default {

  
  colors: {
    less: '#EDEDED',
    black: '#1E1E2A',
    primary: '#444444',
    secondary: '#CECECE',
    tertiary: '#F3F3F3',
    highlight: '#5E5BF7', 
    link: '#90F660',
    white: '#FAFAFA',
    highlight05: 'rgba(94, 91, 247, 0.05)',
    modes: {
      dark: {
        less: '#EDEDED',
        black: '#1E1E2A',
        primary: '#444444',
        secondary: '#CECECE',
        tertiary: '#F3F3F3',
        highlight: '#5E5BF7',
        link: '#90F660',
        white: '#FAFAFA',
      }
    }
  },  
  gradients: {
    primary: myBg,
  },
  fonts: {
    body:
      'IBM Plex Sans, IBM Plex Mono, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    header: 'Orelega One',
  },
  sizes: {
    maxWidth: '1050px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },

  
}
