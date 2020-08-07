export const actions = {
  setLoading: (status: boolean) =>
    ({
      type: '[APP] SET_LOADING',
      payload: { status },
    } as const),

  setAppReady: (status: boolean) =>
    ({
      type: '[APP] SET_APP_READY',
      payload: { status },
    } as const),
}
