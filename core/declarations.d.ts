declare module '*.svg' {
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}

declare module 'react-native-argon2'

declare module '@react-native-community/netinfo/jest/netinfo-mock'
