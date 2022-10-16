import { extendTheme } from "@chakra-ui/react"

const overrides = {
  fonts: {
    heading: `'League Spartan', sans-serif`,
    body: `sans-serif`,
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
}

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme({ overrides, config })

export default theme
