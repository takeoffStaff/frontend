export interface IHeaderBlock {
  type: 'header'
  data: {
    level: number
    text: string
  }
}

export interface IParagraphBlock {
  type: 'paragraph'
  data: {
    text: string
  }
}

export interface IListBlock {
  type: 'list'
  data: {
    style: 'ordered' | 'unordered'
    items: string[]
  }
}

export interface ICodeBlock {
  type: 'code'
  data: {
    code: string
  }
}

export interface IImageBlock {
  type: 'image'
  data: {
    file: {
      url: string
    }
    caption: boolean
    withBorder: boolean
    stretched: boolean
    withBackground: boolean
  }
}

export type BlocksType = Array<IHeaderBlock | IParagraphBlock | IListBlock | ICodeBlock | IImageBlock>
