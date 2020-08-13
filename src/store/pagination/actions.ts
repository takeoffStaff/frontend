import { IPaginationMeta } from 'types/common'

export const actions = {
  setPagination: (values: IPaginationMeta) =>
    ({
      type: '[PAGINATION] SET_PAGINATION',
      payload: { values },
    } as const),

  setCurrentPage: (currentPage: number) =>
    ({
      type: '[PAGINATION] SET_CURRENT_PAGE',
      payload: { currentPage },
    } as const),
}
