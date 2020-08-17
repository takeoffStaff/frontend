import React from 'react'
import { TextEditor } from 'components'
import { ArticleForm } from 'components/forms'

const CreateArticlePage: React.FC = () => {
  return (
    <div>
      <ArticleForm />
      <TextEditor isEmpty />
    </div>
  )
}

export default CreateArticlePage