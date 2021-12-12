import React from 'react'
import { render, screen } from '@testing-library/react'

import GithubForm from './GithubForm'

const onSubmit = () => jest.fn()
const onChange = (value: string, field: string) => jest.fn()

const initialValues = {
  repository: '',
  repositories: null,
  organization: '',
  organizations: null,
  accessToken: '',
}

const mockOrgs = [
  {
    login: 'mockOrganization',
    id: 74097201,
    node_id: 'anfgkoashokgfhaskofgh',
    url: 'mockUrl',
    repos_url: 'mockUrl',
    events_url: 'mockUrl',
    hooks_url: 'mockUrl',
    issues_url: 'mockUrl',
    members_url: 'mockUrl',
    public_members_url: 'mockUrl',
    avatar_url: 'mockUrl',
    description: '',
  },
]

const mockRepo = [
  {
    id: 310822650,
    node_id: 'MDEwOlJlcG9zaXRvcnkzMTA4MjI2NTA=',
    name: 'sv-shop-mobile-app',
    full_name: 'sell-visions/sv-shop-mobile-app',
    private: true,
    owner: {
      login: 'sell-visions',
      id: 74097201,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjc0MDk3MjAx',
      avatar_url: 'https://avatars.githubusercontent.com/u/74097201?v=4',
      gravatar_id: '',
      url: 'mockUrl/users/sell-visions',
      html_url: 'https://github.com/sell-visions',
      followers_url: 'mockUrl/users/sell-visions/followers',
      following_url: 'mockUrl/users/sell-visions/following{/other_user}',
      gists_url: 'mockUrl/users/sell-visions/gists{/gist_id}',
      starred_url: 'mockUrl/users/sell-visions/starred{/owner}{/repo}',
      subscriptions_url: 'mockUrl/users/sell-visions/subscriptions',
      organizations_url: 'mockUrl/users/sell-visions/orgs',
      repos_url: 'mockUrl/users/sell-visions/repos',
      events_url: 'mockUrl/users/sell-visions/events{/privacy}',
      received_events_url: 'mockUrl/users/sell-visions/received_events',
      type: 'Organization',
      site_admin: false,
    },
    html_url: 'mockUrlsv-shop-mobile-app',
    description: null,
    fork: false,
    url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app',
    forks_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/forks',
    keys_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/keys{/key_id}',
    collaborators_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/collaborators{/collaborator}',
    teams_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/teams',
    hooks_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/hooks',
    issue_events_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/issues/events{/number}',
    events_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/events',
    assignees_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/assignees{/user}',
    branches_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/branches{/branch}',
    tags_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/tags',
    blobs_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/git/blobs{/sha}',
    git_tags_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/git/tags{/sha}',
    git_refs_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/git/refs{/sha}',
    trees_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/git/trees{/sha}',
    statuses_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/statuses/{sha}',
    languages_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/languages',
    stargazers_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/stargazers',
    contributors_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/contributors',
    subscribers_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/subscribers',
    subscription_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/subscription',
    commits_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/commits{/sha}',
    git_commits_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/git/commits{/sha}',
    comments_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/comments{/number}',
    issue_comment_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/issues/comments{/number}',
    contents_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/contents/{+path}',
    compare_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/compare/{base}...{head}',
    merges_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/merges',
    archive_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/{archive_format}{/ref}',
    downloads_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/downloads',
    issues_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/issues{/number}',
    pulls_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/pulls{/number}',
    milestones_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/milestones{/number}',
    notifications_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/notifications{?since,all,participating}',
    labels_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/labels{/name}',
    releases_url: 'mockUrl/repos/sell-visions/sv-shop-mobile-app/releases{/id}',
    deployments_url:
      'mockUrl/repos/sell-visions/sv-shop-mobile-app/deployments',
    created_at: '2020-11-07T10:48:16Z',
    updated_at: '2020-11-07T10:48:16Z',
    pushed_at: '2020-11-07T10:48:17Z',
    git_url: 'git://github.com/sell-visions/sv-shop-mobile-app.git',
    ssh_url: 'git@github.com:sell-visions/sv-shop-mobile-app.git',
    clone_url: 'mockUrlsv-shop-mobile-app.git',
    svn_url: 'mockUrlsv-shop-mobile-app',
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: false,
    is_template: false,
    topics: [],
    visibility: 'private',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
]

const createElement = ({
  repository,
  repositories,
  organization,
  organizations,
  accessToken,
}) => {
  return render(
    <GithubForm
      repository={repository || ''}
      repositories={repositories || null}
      organization={organization || ''}
      organizations={organizations || null}
      accessToken={accessToken || ''}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  )
}

describe('<GithubForm /> test', () => {
  it('should match the snapshot', async () => {
    const element = createElement(initialValues)
    expect(element.asFragment()).toMatchSnapshot()
  })

  it('should have an access token field', () => {
    createElement(initialValues)
    const accessTokenField = screen.getByTestId('github-form-accessToken')
    expect(!!accessTokenField).toBeTruthy()

    const formButton = screen.getByTestId('github-form-button')
    expect(formButton).toBeEnabled()
  })

  it('should show a organizations select if org list exist', () => {
    createElement({
      ...initialValues,
      accessToken: 'mockAccessToken',
      organizations: mockOrgs,
    })
    const orgsSelect = screen.getByTestId('github-form-organizations')
    expect(!!orgsSelect).toBeTruthy()

    const formButton = screen.getByTestId('github-form-button')
    expect(formButton).toBeDisabled()
  })

  it('should show a repositories select if repos list exist', () => {
    createElement({
      ...initialValues,
      accessToken: 'mockAccessToken',
      organizations: mockOrgs,
      organization: 'mockOrganization',
      repositories: mockRepo,
    })
    const repoSelect = screen.getByTestId('github-form-repositories')
    expect(!!repoSelect).toBeTruthy()

    expect(!!repoSelect).toBeTruthy()
    const formButton = screen.getByTestId('github-form-button')
    expect(formButton).toBeDisabled()
  })
})
