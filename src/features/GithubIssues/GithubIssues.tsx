import React, { useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Alert, Collapse, IconButton, LinearProgress } from '@mui/material'
import DataTable from 'components/DataTable/DataTable'
import GithubForm from 'components/GithubForm/GithubForm'
import { find, map } from 'lodash'

import { useAppDispatch, useAppSelector } from 'common/hooks/redux'

import {
  fetchGitOrg,
  fetchGitRepos,
  fetchIssuesByRepo,
  GithubState,
  updateError,
  updateFormValues,
  updateIssues,
  updateLoading,
  updateOrganizations,
  updateRepositories,
} from './githubSlice'

interface IssuesData {
  title: string
  comment: string
  state: string
  user: string
}

const issuesColumns: IssuesData = {
  title: 'title',
  comment: 'comment',
  state: 'state',
  user: 'user',
}

const GithubIssues = () => {
  const dispatch = useAppDispatch()
  const {
    isLoading,
    accessToken,
    organizations,
    organization,
    repositories,
    repository,
    issues,
    errorMessage,
  } = useAppSelector<GithubState>((state) => state.githubReducer)

  useEffect(() => {
    if (organization && !repositories?.length) {
      dispatch(updateLoading(true))
      fetchGitRepos({ accessToken, organization })
        .then((res) => {
          dispatch(updateRepositories(res.data))
          dispatch(updateLoading(false))
          dispatch(updateError(''))
        })
        .catch((err) => {
          dispatch(updateError(err.message))
          dispatch(updateLoading(false))
        })
    }
    if (repository) {
      const repoObt = find(repositories, { name: repository })
      if (repoObt?.owner?.login) {
        dispatch(updateLoading(true))
        fetchIssuesByRepo({
          accessToken,
          repository,
          owner: repoObt?.owner?.login,
        })
          .then((res) => {
            dispatch(updateIssues(res.data))
            dispatch(updateLoading(false))
            dispatch(updateError(''))
          })
          .catch((err) => {
            dispatch(updateError(err.message))
            dispatch(updateLoading(false))
          })
      }
    }
  }, [dispatch, organization, repository, accessToken, repositories])

  const onFormChange = (value: string, field: string) => {
    dispatch(updateFormValues({ value, field }))
  }

  const onSubmit = () => {
    if (!accessToken) {
      dispatch(updateError('Access token field is required'))
    } else {
      dispatch(updateLoading(true))
      fetchGitOrg({ accessToken })
        .then((res) => {
          dispatch(updateOrganizations(res.data))
          dispatch(updateLoading(false))
          dispatch(updateError(''))
        })
        .catch(() => {
          dispatch(updateError('Bad credentials'))
          dispatch(updateLoading(false))
        })
    }
  }

  const formatIssuesData = (rawData: any[]): IssuesData[] => {
    return map(rawData, (item: any) => ({
      title: item.title,
      comment: item.body,
      state: item.state,
      user: item.user.login,
    }))
  }

  return (
    <>
      {isLoading && <LinearProgress />}
      <Collapse in={!!errorMessage}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => dispatch(updateError(''))}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          style={{ margin: '1rem 0' }}
          variant="filled"
          severity="error"
        >
          {errorMessage}
        </Alert>
      </Collapse>
      <GithubForm
        onChange={onFormChange}
        onSubmit={onSubmit}
        accessToken={accessToken}
        organizations={organizations}
        organization={organization}
        repositories={repositories}
        repository={repository}
      />
      {issues && (
        <DataTable data={formatIssuesData(issues)} columns={issuesColumns} />
      )}
    </>
  )
}

export default GithubIssues
