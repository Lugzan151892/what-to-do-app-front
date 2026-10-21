/* eslint-disable @typescript-eslint/no-explicit-any */
interface IRequestOptions {
  method: 'GET' | 'POST'
  query?: Record<string, string | number>
  headers?: Record<string, string>
  body?: Record<string, any>
}

const BASE_URL = '/';

const isFileOrBlob = (value: unknown): value is File | Blob => {
  return (
    (typeof File !== undefined && value instanceof File)
    || (typeof Blob !== undefined && value instanceof Blob)
  );
};

const buildSeparateData = (payload: Record<string, any>) => {
  const objToJson: Record<string, any> = {};
  const files: Array<{ key: string, file: File | Blob }> = [];

  for (const [key, value] of Object.entries(payload)) {
    if (value === undefined || value === null) {
      continue;
    }

    if (isFileOrBlob(value)) {
      files.push({ key, file: value });
    }
    else if (Array.isArray(value) && value.length > 0 && value.every(e => isFileOrBlob(e))) {
      value.forEach((item) => {
        if (isFileOrBlob(item)) {
          files.push({ key, file: item });
        }
      });
    }
    else {
      objToJson[key] = value;
    }
  }

  return { data: objToJson, files };
};

const buildHybridbody = (payload: Record<string, any>): FormData => {
  const { data, files } = buildSeparateData(payload);
  const formData = new FormData();

  if (Object.keys(data).length > 0) {
    formData.append('data', JSON.stringify(data));
  }

  files.forEach(({ key, file }) => {
    formData.append(key, file);
  });

  return formData;
};

export class Api {
  static request(path: string, options: IRequestOptions) {
    let url = `${BASE_URL}${path}`;
    const { body, headers = {}, method } = options;
    const finalHeaders: Record<string, string> = { ...headers };
    let finalBody: string | FormData = '';

    if (options.query) {
      const searchParams = new URLSearchParams();
      Object.entries(options.query).forEach(([key, value]) => {
        searchParams.append(key, String(value));
      });

      url += `?${searchParams.toString()}`;
    }

    if (body && typeof body === 'object') {
      const { files } = buildSeparateData(body);

      if (files.length > 0) {
        finalBody = buildHybridbody(body);
        delete finalHeaders['Content-Type'];
      }
      else {
        finalBody = JSON.stringify(body);
        finalHeaders['Content-Type'] = 'application/json';
      }
    }

    return fetch(url, {
      method,
      headers: finalHeaders,
      ...(finalBody && method !== 'GET' ? { body: finalBody } : {}),
    });
  }

  static get(path: string, query: Record<string, string | number>) {
    return this.request(path, { method: 'GET', query });
  }

  static post(path: string, body: Record<string, any>) {
    return this.request(path, { method: 'POST', body });
  }
}
