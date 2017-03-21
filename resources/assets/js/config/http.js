/**
 * http请求过滤
 */

require('./require');

// axios
axios.interceptors.request.use(function (config) {
	config.headers = Object.assign(config.headers,{'X-CSRF-TOKEN': Laravel.csrfToken});
	return config;
}, function (error) {
	return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});