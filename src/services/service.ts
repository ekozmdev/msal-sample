import axios from 'axios'
import { AxiosPromise, AxiosRequestConfig } from 'axios'
import { MsGraphMeResponse } from '../types/MsGraphMeResponse'

export const getMsGraphMe = (
  accessToken: string
): AxiosPromise<MsGraphMeResponse> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://graph.microsoft.com/v1.0/me',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }
  return axios(config)
}
