import TextBox from '../models/TextBox'

export interface CanvasProperties {
  texts: Array<TextBox>
  height: number
  width: number
  image: Promise<HTMLImageElement>
  scale: number
}

export interface TextCustomization {
  value: any
  textId: string
  type: string
}

export interface Line {
  x: number
  y: number
  value: string
  lineHeight: Function
  lineWidth: Function
}
