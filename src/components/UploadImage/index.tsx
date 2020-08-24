import React from 'react'
import { Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Form } from 'antd'
import { IImage } from 'types/common'
import { usePresenter } from './usePresenter'

interface IUploadImageProps {
  initialValue: IImage | null
}

const UploadImage: React.FC<IUploadImageProps> = ({ initialValue }) => {

  const { loading, handleChange, beforeUpload, url } = usePresenter(initialValue)

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
