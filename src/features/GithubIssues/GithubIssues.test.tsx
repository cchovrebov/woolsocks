import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { store } from 'redux/store'

import GithubIssues from './GithubIssues'

const createElement = () => {
  return render(
    <Provider store={store}>
      <GithubIssues />
    </Provider>
  )
}

describe('GithubIssues Recently created', () => {
  it('Renders correctly', async () => {
    const { asFragment } = createElement()
    expect(asFragment()).toMatchSnapshot()
  })

  it('Github form renders', async () => {
    createElement()
    const githubForm = screen.getByTestId('github-form')
    expect(githubForm).toMatchSnapshot()
    expect(!!githubForm).toBeTruthy()
  })
})
