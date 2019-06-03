import axios from 'axios';

const http = axios.create();

http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://www.baidu.com/' : 'http://localhost:3000/'; // 基准url地址
http.defaults.timeout = 10000; // 超过这个时间点请求还没有完成，那么就报错。

// 5. 做响应的拦截
http.interceptors.response.use(response => {
  return response.data;
})

// 6. 不要忘了暴露
export default http;
