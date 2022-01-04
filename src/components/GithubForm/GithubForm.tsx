import React from 'react'
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'

import { Organization } from 'features/GithubIssues/githubSlice'

import './githubForm.css'

interface Props {
  onChange: (value: string, field: string) => void
  onSubmit: () => void
  accessToken: string
  organizations: Organization[] | undefined
  organization: string
  repositories: any[]
  repository: string
}

const GithubForm = ({
  onChange,
  onSubmit,
  accessToken,
  organizations,
  organization,
  repositories,
  repository,
}: Props) => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="github-form"
      data-testid="github-form"
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="component-error">Access token</InputLabel>
        <Input
          type="password"
          className="github-form-accessToken"
          data-testid="github-form-accessToken"
          onChange={(e) => onChange(e.target.value, 'accessToken')}
          value={accessToken}
          aria-describedby="component-error-text"
        />
      </FormControl>
      {organizations?.length && (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Select organization
          </InputLabel>
          <Select
            labelId="github-form-accessToken-label"
            data-testid="github-form-organizations"
            value={organization}
            onChange={(e) => onChange(e.target.value, 'organization')}
            label="Select organization"
          >
            {organizations.map((item: Organization) => (
              <MenuItem key={item.id} value={item.login}>
                {item.login}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      {repositories?.length && (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="repositories-label">Select repository</InputLabel>
          <Select
            labelId="repositories-label"
            data-testid="github-form-repositories"
            value={repository}
            onChange={(e) => onChange(e.target.value, 'repository')}
            label="Select repository"
          >
            {repositories.map((item: any) => (
              <MenuItem key={item.id} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      <Button
        disabled={!!organizations?.length}
        onClick={onSubmit}
        variant="contained"
        data-testid="github-form-button"
      >
        Fetch
      </Button>
    </Box>
  )
}

export default GithubForm
