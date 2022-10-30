export const Config = {
  URL_API: 'https://api.anime.wildwolves.shop/',
  TOKEN: 'token',
  USER: 'user',
  FACEBOOK_APP_ID: "658430965696356",
  GOOGLE_CLIENT_ID:
      "498077768323-68muh0dflbj8c877e44am51tpvs3deup.apps.googleusercontent.com",
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
