import embed from '@editorjs/embed'
import table from '@editorjs/table'
import list from '@editorjs/list'
import warning from '@editorjs/warning'
import code from '@editorjs/code'
import link from '@editorjs/link'
import image from '@editorjs/image'
import raw from '@editorjs/raw'
import header from '@editorjs/header'
import quote from '@editorjs/quote'
import marker from '@editorjs/marker'
import checklist from '@editorjs/checklist'
import inlineCode from '@editorjs/inline-code'
import delimiter from '@editorjs/delimiter'
import simpleImage from '@editorjs/simple-image'
import paragraph from '@editorjs/paragraph'
import { http } from 'api/http'

export const editorTools = {
  embed,
  table,
  list,
  warning,
  code,
  link,
  image: {
    class: image,
    config: {
      endpoints: {
        byFile: 'http://localhost:5000/api/upload/image',
      },
      uploader: {
        async uploadByFile(file: File) {
          const formData = new FormData()
					formData.append('image', file)

          return http('/upload/image', 'POST', formData).then((res) => {
            return {
              success: 1,
              file: {
                url: res.url,
              },
            }
          })
        },
      },
    },
  },
  raw,
  header,
  quote,
  marker,
  checklist,
  inlineCode,
  delimiter,
  simpleImage,
  paragraph: {
    class: paragraph,
    inlineToolbar: true,
  },
}
