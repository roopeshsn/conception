import { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "@chakra-ui/color-mode"
import theme from "../theme"
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
