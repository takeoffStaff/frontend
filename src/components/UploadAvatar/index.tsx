import React, { useState } from 'react'
import { Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { http } from 'api/http'
import { UploadChangeParam } from 'antd/lib/upload'
import { UploadFile, RcCustomRequestOptions } from 'antd/lib/upload/interface'

const UploadAvatar: React.FC = () => {

  const customRequest = async (data: RcCustomRequestOptions) => {
    let formData = new FormData()
    formData.append('image', data.file)
    console.log(data.file, 'file')
    return await http('/upload/image', 'POST', formData, { 'Content-Type': 'multipart/form-data' }).then((response: any) => {
      console.log(response, 'response')
    })
  }

  function beforeUpload(file: File) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }

  const [loading, setLoading] = useState<boolean>(false)
  const [url, setUrl] = useState<string | null>(null)

  const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      setLoading(false)
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  )
  return (
    <Upload
      name="image"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      beforeUpload={beforeUpload}
      customRequest={customRequest}
      onChange={handleChange}
    >
      {url ? <img src={url} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    </Upload>
  )
}

export default UploadAvatar
