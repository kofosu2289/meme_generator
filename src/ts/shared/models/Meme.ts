export default class Meme {
  public id: number
  public name: string
  public url: string
  public width: number
  public height: number
  public box_count: number

  constructor(meme: any) {
    this.id = meme.id
    this.name = meme.name
    this.url = meme.url
    this.width = meme.width
    this.height = meme.height
  }
}