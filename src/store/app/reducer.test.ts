import { actions } from './actions'
import { reducer } from './reducer'

const state = {
  ready: false
}

it('ready should be true', () => {
  const action = actions.setAppReady(true)
  const newState = reducer(state, action)
  expect(newState.ready).toBe(true)
})