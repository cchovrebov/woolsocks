import React from 'react'
import { render } from '@testing-library/react'

import DataTable from './DataTable'

const mockData = [
  {
    title: 'My title',
    comment: 'My Comment',
    state: 'State',
    user: 'My user name',
  },
]

const issuesColumns = {
  title: 'title',
  comment: 'comment',
  state: 'state',
  user: 'user',
}

const createElement = () => {
  return render(<DataTable data={mockData} columns={issuesColumns} />)
}

describe('GithubForm Recently created', () => {
  it('Renders correctly', async () => {
    const { asFragment } = createElement()
    expect(asFragment()).toMatchSnapshot()
  })
})
