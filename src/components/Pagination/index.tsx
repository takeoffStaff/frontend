import React, { useCallback, useEffect } from 'react'
import { actions } from 'store/pagination/actions'
import { Pagination as AntPagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from 'types/store'

const Pagination: React.FC = () => {
  const dispatch = useDispatch()
  const { currentPage, totalItems, perPage } = useSelector((store: IStore) => store.pagination)

  useEffect(() => {
    return () => {
      dispatch(actions.setCurrentPage(1))
    }
  }, [dispatch])

  const onChange = useCallback(
    (page: number) => {
      dispatch(actions.setCurrentPage(page))
    },
    [dispatch]
  )

  return (
    <AntPagination
      style={{ marginTop: 'auto' }}
      current={currentPage}
      pageSize={perPage}
      total={totalItems}
      onChange={onChange}
    />
  )
}

export default Pagination
