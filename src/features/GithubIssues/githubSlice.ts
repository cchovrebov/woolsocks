/* eslint-disable max-lines */
import { createSlice } from '@reduxjs/toolkit'

import { githubApi } from 'common/api'

export interface Organization {
  avatar_url: string
  description: string
  events_url: string
  hooks_url: string
  id: number
  issues_url: string
  login: string
  members_url: string
  node_id: string
  public_members_url: string
  repos_url: string
  url: string
}

export interface GithubState {
  isLoading: boolean
  errorMessage: string
  accessToken: string
  organizations: Organization[] | null
  repositories: any
  organization: string
  repository: string
  issues: any[] | null
}

export const initialState: GithubState = {
  isLoading: false,
  errorMessage: '',
  accessToken: '',
  organizations: null,
  organization: '',
  repositories: null,
  repository: '',
  issues: undefined,
}

export const githubSlice = createSlice({
  name: 'githubSlice',
  initialState,
  reducers: {
    updateError: (state, action) => {
      state.errorMessage = action.payload
    },
    updateFormValues: (state, action) => {
      state[action.payload.field] = action.payload.value
    },
    updateOrganizations: (state, action) => {
      state.organizations = action.payload
    },
    updateRepositories: (state, action) => {
      state.repositories = action.payload
    },
    updateIssues: (state, action) => {
      state.issues = action.payload
    },
    updateLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const {
  updateFormValues,
  updateError,
  updateOrganizations,
  updateRepositories,
  updateIssues,
  updateLoading,
} = githubSlice.actions

export function fetchGitRepos(data: {
  accessToken: string
  organization: string
}) {
  return githubApi.get<void>(`/orgs/${data.organization}/repos`, {
    headers: {
      Authorization: `token ${data.accessToken}`,
      Accept: 'application/vnd.github.v3+json',
    },
  })
}

export function fetchGitOrg(data: { accessToken: string }) {
  return githubApi.get<void>('/user/orgs', {
    headers: {
      Authorization: `token ${data.accessToken}`,
      Accept: 'application/vnd.github.v3+json',
    },
  })
}

export function fetchIssuesByRepo(data: {
  accessToken: string
  repository: string
  owner: string
}) {
  return githubApi.get<void>(`/repos/${data.owner}/${data.repository}/issues`, {
    headers: {
      Authorization: `token ${data.accessToken}`,
      Accept: 'application/vnd.github.v3+json',
    },
  })
}

export default githubSlice.reducer
