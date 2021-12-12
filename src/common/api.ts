import axios, { AxiosInstance } from 'axios'

export const GITHUB_API_ENDPOINT: string = 'https://api.github.com'

const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
  })
  instance.interceptors.request.use(
    (config) => {
      if (['post', 'put', 'patch'].includes(config.method || '')) {
        config.headers['Content-Type'] = 'application/json'
      }

      return config
    },
    (error) => {
      Promise.reject(error)
    }
  )

  return instance
}

const createApi = (axiosInstance: AxiosInstance) => {
  return {
    get: axiosInstance.get,
    post: axiosInstance.post,
    delete: axiosInstance.delete,
  }
}

const githubClient = createAxiosInstance(GITHUB_API_ENDPOINT)
const githubApi = createApi(githubClient)

export { githubApi }
