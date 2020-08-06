export const actions = {
  setLoading: (status: boolean) =>
    ({
      type: '[APP] SET_LOADING',
      payload: { status },
    } as const),
}
