const buildOptions = (data) => {
  const options = {};

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'content-type': 'application/json'
    };
  }

  const token = localStorage.getItem('accessToken');

  if (token) {
    options.headers = {
      ...options.headers,
      'X-Authorization': token
    };
  }

  return options;
};

const request = async (method, url, data) => {
  const response = await fetch(url, {
    ...buildOptions(data),
    method,
  });

  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
};

// export const get = request.bind(null, 'GET'); // same as below
export const get = (url) => request('GET', url);
// export const post = request.bind(null, 'POST'); // same as below
export const post = (url, data) => request('POST', url, data);
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');

