import { ThemeProvider } from "styled-components"; 
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import { Loading } from "src/Components/Loading";

import { theme } from "@theme/index";

import { Groups } from "@screens/Groups";

export default function app(){
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});


  return (
<ThemeProvider theme={theme}>
{!fontsLoaded? <Groups /> : <Loading/> }
</ThemeProvider>

  )
}