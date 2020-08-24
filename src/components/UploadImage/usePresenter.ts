import { useState, useCallback, useEffect } from 'react'
import { message } from 'antd'
import { UploadChangeParam } from 'antd/lib/upload'
import { UploadFile } from 'antd/lib/upload/interface'
import { IImage } from 'types/common'

export const usePresenter = (initialValue: IImage | null) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [url, setUrl] = useState<string>()

  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('Вы должны загрузить JPG/PNG файл!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Изображение должно быть не более 2 мегабайт!')
    }
    return isJpgOrPng && isLt2M
  }

  const handleChange = useCallback((info: UploadChangeParam<UploadFile<IImage>>) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done' && info.file.response) {
      setLoading(false)
      setUrl(info.file.response.url)
      return info.file.response.id
    }
  }, [])

  useEffect(() => {
    if (initialValue) {
      setUrl(initialValue.url)
    }
  }, [initialValue])

  return {
    handleChange,
    url,
    loading,
    beforeUpload,
  }
}