import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools';
const overrides = {
  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`,
    body: `'Plus Jakarta Sans', sans-serif`,
  }
}

const light ={
  textColor: '#1A202C',
  bodyBg: '#FFF9F7',
}

const dark ={
  textColor: '#FFFFFF',
  bodyBg: '#1A202C',
}

const customStyles = {
  global:
  (props)=>({
    body: {
      bg: mode(light.bodyBg, dark.bodyBg)(props)
    }
  })
}

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme({ fonts: overrides.fonts, config, styles: customStyles })

export default theme
