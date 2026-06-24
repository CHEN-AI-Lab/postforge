import en from './en.json'
import zhCN from './zh-CN.json'

const messages = {
  en,
  'zh-CN': zhCN,
} as const

export type MessageKeys = keyof typeof messages
export type Messages = (typeof messages)[MessageKeys]

export default messages
