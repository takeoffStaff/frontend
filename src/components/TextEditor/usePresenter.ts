import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from 'types/store'
import { actions } from 'store/editor/actions'

export const usePresenter = () => {
  const blocks = useSelector((store: IStore) => store.article.data && store.article.data.blocks)

  const dispatch = useDispatch()

  useEffect(() => {
    if (blocks) {
      dispatch(actions.setEditorBlocks(blocks))
    } else {
      dispatch(actions.setEditorBlocks([]))
    }

    return () => {
      if (blocks) {
        dispatch(actions.destroyEditorBlocks())
      }
    }
  }, [dispatch, blocks])

  const onData = useCallback(
    (data) => {
      dispatch(actions.setEditorBlocks(data.blocks))
    },
    [dispatch]
  )

  const onFocus = useCallback(() => {
    dispatch(actions.setContentReadyStatus(false))
  }, [dispatch])

  const onBlur = useCallback(() => {
    dispatch(actions.setContentReadyStatus(true))
  }, [dispatch])

  return { blocks, onData, onFocus, onBlur }
}