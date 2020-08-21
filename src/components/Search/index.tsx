import React, { useCallback, useState, useEffect } from 'react'
import { Input } from 'antd'
import { IRequestParams } from 'types/api'
import { useDispatch } from 'react-redux'
import { useDebounce } from 'hooks/useDebounce.hook'

interface ISearchProps {
  placeholder?: string
  searchAction: (requestParams: IRequestParams) => void
}

const Search: React.FC<ISearchProps> = ({ placeholder, searchAction }) => {

  const [term, setTerm] = useState<string>('')

  const dispatch = useDispatch()
  const debouncedTerm = useDebounce(term, 500)

  useEffect(() => {
    dispatch(searchAction({ search: { title: debouncedTerm } }))
  }, [debouncedTerm, dispatch, searchAction])

  const onSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }, [])

  return (
    <Input onChange={onSearch} placeholder={placeholder} />
  )
}

export default Search
