// 写请求
import request from 'umi-request';
export const getRemoteList = async() => {
  return request('/api/todolist', {
    method: 'get'
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}