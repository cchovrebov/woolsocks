import { store } from 'redux/store'

import { initialState } from 'features/GithubIssues/githubSlice'

const mockStore = {
  githubReducer: initialState,
}

describe('Store test', () => {
  it('Initial test is correct', async () => {
    expect(store.getState()).toEqual(mockStore)
  })
})
