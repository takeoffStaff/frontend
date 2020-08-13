export const actions = {
  setAppReady: (status: boolean) =>
    ({
      type: '[APP] SET_APP_READY',
      payload: { status },
    } as const),
}
