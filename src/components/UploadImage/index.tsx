import React, { useState, useCallback, useEffect } from 'react'
import { Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { UploadChangeParam } from 'antd/lib/upload'
import { UploadFile } from 'antd/lib/upload/interface'
import { Form } from 'antd'
import { IImage } from 'types/common'

interface IProps {
  initialValue: IImage | null
}

const UploadImage: React.FC<IProps> = ({ initialValue }) => {
  function beforeUpload(file: File) {
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

  const [loading, setLoading] = useState<boolean>(false)
  const [url, setUrl] = useState<string>()

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

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  )

  return (
    <Form.Item initialValue={initialValue && initialValue.id} getValueFromEvent={handleChange} name="image">
      <Upload
        name="image"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        headers={{ Authorization: `Bearer ${localStorage.getItem('token')}` }}
        beforeUpload={beforeUpload}
        action="api/upload/images"
        onChange={handleChange}
      >
        {url ? <img src={url} alt="alt" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    </Form.Item>
  )
}

export default UploadImage
