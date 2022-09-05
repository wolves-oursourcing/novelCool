export const Config = {
  URL_API: 'https://sirrista-api.herokuapp.com/'
};

export const RESPONSE_STATUS = {
  SUCCESS: 200,
  CREATE_SUCCESS: 201,
  NOT_FOUND: 404,
  INTERVAL_SERVER: 500,
  FORBIDDEN: 403
};

export const KeyConfigLocal = {
  TOKEN: 'token',
  USER: 'user'
};

export interface IResponseErrorHandle {
  error: string;
  message: string;
  statusCode: number;
}

export interface IResponse {
  status: boolean;
  data: any; // depend on model
  total?: number;
}

export const PER_PAGE = 6;
