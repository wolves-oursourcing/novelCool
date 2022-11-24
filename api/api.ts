import { isEmpty } from 'lodash';
import { IResponseErrorHandle, Config, KeyConfigLocal, RESPONSE_STATUS } from './configs';
const _responseConfig = async (response: Response) => {
  if (response.status === RESPONSE_STATUS.SUCCESS || response.status === RESPONSE_STATUS.CREATE_SUCCESS) {
    return await response.json();
  }

  // handle error
  try {
    const result: IResponseErrorHandle = await response.json();
    throw Error(result.message);
  } catch (error: any) {
    throw Error(error.message ? error.message : 'Máy chủ gặp lỗi. Vui lòng liên hệ quản trị viên');
  }
  // if (response.status === RESPONSE_STATUS.NOT_FOUND)
  //   throw Error('Máy chủ không phản hồi. Vui lòng liên hệ quản trị viên');
  // if (response.status === RESPONSE_STATUS.INTERVAL_SERVER) {
  //   const result = await response.json();
  //   throw Error(result.error_description);
  // }
};

const postService = async <T>(url: string, body: object, isAuthorization = true, isFormData = false): Promise<T> => {
  try {
    const headers: any = isFormData ? {} : { Accept: 'application/json', 'Content-Type': 'application/json' };
    if (isAuthorization) {
      headers.Authorization = `Bearer ${localStorage.getItem(KeyConfigLocal.TOKEN)}`;
    }
    const requestInit: any = { method: 'POST', headers };
    if (body)
      if (isFormData) requestInit.body = body;
      else requestInit.body = JSON.stringify(body);

    const response = await fetch(`${Config.URL_API}${url}`, requestInit);
    console.log(response);

    return await _responseConfig(response);
  } catch (error: any) {
    console.log(error);
    //showToast(error.message, "error");
    throw error;
  }
};

const getService = async <T>(url: string, params?: any, body?: object | null, isAuthorization = true): Promise<T> => {
  try {
    const headers: any = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    if (isAuthorization) {
      headers.Authorization = `Bearer ${localStorage.getItem(KeyConfigLocal.TOKEN)}`;
    }
    const requestInit: any = { method: 'GET', headers };
    if (body) requestInit.body = JSON.stringify(body);
    let queryString = '';
    const paramsData: string[] = [];
    if (params && !isEmpty(params)) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '')
          paramsData.push(`${key}=${params[key].toString() || ''}`);
      });
    }
    queryString = paramsData.length ? `?${paramsData.join('&')}` : '';
    const response = await fetch(`${Config.URL_API}${url}${encodeURI(queryString)}`, requestInit);
    return await _responseConfig(response);
  } catch (error: any) {
    // showToast(error.message, "error");
    throw error;
  }
};

const deleteService = async <T>(url: string): Promise<T> => {
  try {
    const headers: any = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: `Bearer ${localStorage.getItem(KeyConfigLocal.TOKEN)}`
    };
    const requestInit: any = { method: 'DELETE', headers };

    const response = await fetch(`${Config.URL_API}${url}`, requestInit);
    console.log(response);

    return await _responseConfig(response);
  } catch (error: any) {
    console.log(error);
    // showToast(error.message, "error");
    throw error;
  }
};

const patchService = async <T>(url: string, body: object): Promise<T> => {
  try {
    const headers: any = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: `Bearer ${localStorage.getItem(KeyConfigLocal.TOKEN)}`
    };

    const requestInit: any = { method: 'PATCH', headers };
    requestInit.body = JSON.stringify(body);

    const response = await fetch(`${Config.URL_API}${url}`, requestInit);
    console.log(response);

    return await _responseConfig(response);
  } catch (error: any) {
    console.log(error);
    // showToast(error.message, "error");
    throw error;
  }
};

export default { postService, getService, deleteService, patchService };
