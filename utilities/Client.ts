import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { NextRouter } from 'next/router';

export interface ClientType {
  get: (url: string, data: any) => Promise<AxiosResponse>;
  post: (url: string, data: any) => Promise<AxiosResponse>;
  put: (url: string, data: any) => Promise<AxiosResponse>;
  patch: (url: string, data: any) => Promise<AxiosResponse>;
  delete: (url: string, data: any) => Promise<AxiosResponse>;
}

interface MatchKeyValue {
  matchCondition: { [key: string]: any };
  error?: any;
  response?: any;
}
interface MockOptions {
  matchParamsResponse?: MatchKeyValue;
  matchDataResponse?: MatchKeyValue;
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_END_POINT,
  withCredentials: true
});

const createRequest =
  (axiosInstance: AxiosInstance, mockOptions?: MockOptions) =>
  (apiPath: any, requestConfig: any): any => {
    const headers = { ...requestConfig.headers };
    if (mockOptions?.matchParamsResponse && requestConfig.params) {
      const matchParamsCondition = Object.keys(mockOptions.matchParamsResponse.matchCondition).filter(
        key => requestConfig.params[key] && requestConfig.params[key] === requestConfig.params[key]
      );
      if (matchParamsCondition.length > 0) {
        if (mockOptions.matchParamsResponse.error) {
          return Promise.reject({
            response: {
              status: 400,
              data: mockOptions.matchParamsResponse.response
            }
          });
        }
        return Promise.resolve({
          data: mockOptions.matchParamsResponse.response
        });
      }
    }

    return axiosInstance
      .request({
        url: apiPath,
        ...requestConfig,
        params: { ...requestConfig.params },
        headers
      })
      .then(response => {
        return response;
      })
      .catch(error => {
        if (error.response && error.response.status === 500) {
          throw new Error(`Server api call 500 Error ${apiPath}`);
        }
        throw error;
      });
  };
const request = createRequest(instance);

const createClient = (requestInstance: any): ClientType => {
  return {
    get: (apiPath, options = {}): any =>
      requestInstance(apiPath, {
        method: 'get',
        params: options.params,
        data: options.data,
        ...options.config
      }),
    post: (apiPath, options = {}) =>
      requestInstance(apiPath, {
        method: 'post',
        params: options.params,
        data: options.data,
        ...options.config
      }),
    put: (apiPath, options = {}) =>
      requestInstance(apiPath, {
        method: 'put',
        params: options.params,
        data: options.data,
        ...options.config
      }),
    patch: (apiPath, options = {}) =>
      requestInstance(apiPath, {
        method: 'patch',
        params: options.params,
        data: options.data,
        ...options.config
      }),
    delete: (apiPath, options = {}) =>
      requestInstance(apiPath, {
        method: 'delete',
        params: options.params,
        data: options.data,
        ...options.config
      })
  };
};
let router: NextRouter;

const client = createClient(request);
export const useRoutingCollector = (injectedRouter: NextRouter): void => {
  useEffect(() => {
    router = injectedRouter;
  }, []);
};
export default client;
