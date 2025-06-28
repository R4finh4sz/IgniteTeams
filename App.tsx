import { ThemeProvider } from "styled-components"; 
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import { theme } from "@theme/index";

import { Groups } from "@screens/Groups";

export default function app(){
  return (
<ThemeProvider theme={theme}>
<Groups />
</ThemeProvider>

  )
}