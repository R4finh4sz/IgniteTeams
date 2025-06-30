import { ThemeProvider } from "styled-components"; 
import { StatusBar } from "react-native";
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import { Loading } from "src/Components/Loading";

import theme from "src/theme";

import { Groups } from "@screens/Groups";

export default function app(){
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});


  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      />
    {fontsLoaded? <Groups /> : <Loading/> }
    </ThemeProvider>

  )
}