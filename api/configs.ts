export const Config = {
  URL_API: '',
  TOKEN: 'token',
  USER: 'user',
  FACEBOOK_APP_ID: "509083557433030",
  GOOGLE_CLIENT_ID:
      "787897517316-hj80k3q9acqacr4fqokooi0qvb0md9rl.apps.googleusercontent.com",
  CLIENT_SECRET: "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",
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
