import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { store } from 'redux/store'

import App from './App'

describe('App.js test', () => {
  it('App snapshot match', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
