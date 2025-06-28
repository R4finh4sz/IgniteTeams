import 'styled-components/native';
import { MyTheme } from '@theme/index';

declare module 'styled-components/native' {
  export interface DefaultTheme extends MyTheme {}
}