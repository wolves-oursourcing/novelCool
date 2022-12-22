export const Config = {
  // URL_API: 'https://api.anime.wildwolves.shop/',
  URL_API: 'https://api.anime.wildwolves.shop/',
  // URL_API: 'http://localhost:3002/',
  TOKEN: 'token',
  USER: 'user',
  FACEBOOK_APP_ID: "658430965696356",
  GOOGLE_CLIENT_ID:
      "498077768323-gb1slr9b4k64o8vse1ds3p0q4979439s.apps.googleusercontent.com",
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
export const ORIGIN_URL = 'https://allfreenovels.net';
export const analyticsId = 'G-S38PZF80KH';
