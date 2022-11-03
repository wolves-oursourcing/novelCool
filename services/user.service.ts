import { KeyConfigLocal } from './../api/configs';
import { get } from 'lodash';
import api from '../api/api';
export type LoginForm = {
  email: string;
  password: string;
};

export type SignUpForm = {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
};

export interface IUserInfo {
  email: string;
  password?: string;
  access_token?: string;
  userId?: number;
  firstName: string;
  fullName: string;
  id: number;
  isActive: false;
  isCreateContent: true;
  isReferred: false;
  job: string;
  jobTitle: string;
  lastName: string;
  phoneNumber: string;
  referralId: string;
}

export const login = async (param: LoginForm) => {
  const response = await api.postService<IUserInfo>('auth/login', param, false, false);
  return response;
};

export const signUp = async (param: SignUpForm) => {
  console.log('param :>> ', param);
  const response = await api.postService<IUserInfo>('auth/signup', { ...param }, false, false);
  return response;
};

export const patchUser = async (id: string, data: any) => {
  const response = await api.patchService(`users/${id}`, data);
  return response;
};

export const getUserInfo = async (id: number) => {
  const response = await api.getService<IUserInfo>(`users/${id}`, null, null, true);
  return response;
};

export const loginSocial = async (param: any) => {
  const response = await api.postService<IUserInfo>('auth/social/login', param, false, false);
  return response;
};

export const getCurrentUser = (): IUserInfo => {
  try {
    const user = localStorage.getItem(KeyConfigLocal.USER);
    const data: IUserInfo = JSON.parse(user);
    return data;
  } catch (e) {
    console.log('Failed to get current user data :>> ', e);
  }
};
