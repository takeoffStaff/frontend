import React, { useCallback } from 'react'
import { Button } from 'antd'
import { redirect } from 'helpers/redirect'

const ArticlesPage: React.FC = () => {
  const goToCreateArticle = useCallback(() => {
    redirect('/articles/create')
  }, [])

  return (
    <div>
      <Button onClick={goToCreateArticle}>Создать статью</Button>
    </div>
  )
}

export default ArticlesPage
