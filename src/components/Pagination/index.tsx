import React, { useCallback } from 'react'
import { actions } from 'store/pagination/actions'
import { Pagination as AntPagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from 'types/store'

const Pagination: React.FC = () => {
  const dispatch = useDispatch()

  const { currentPage, totalItems, perPage } = useSelector((store: IStore) => store.pagination)

  const onChange = useCallback(
    (page: number) => {
      dispatch(actions.setCurrentPage(page))
    },
    [dispatch]
  )

  return (
    <AntPagination
      style={{ marginTop: '20px' }}
      current={currentPage}
      pageSize={perPage}
      total={totalItems}
      onChange={onChange}
    />
  )
}

export default Pagination
