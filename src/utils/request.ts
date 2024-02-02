import { request } from '@umijs/max';

export const get = (url: string, data: any) => {
  return new Promise((resolve, reject) => {
    request(url, {
      method: 'get',
      params: data,
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
};


export const post = (url: string, data: any) => {
  return new Promise((resolve, reject) => {
    request(url, {
      method: 'post',
      params: data,
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
};