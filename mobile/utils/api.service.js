import axios from 'axios';

export class APIService {
  constructor() {
    this.fetcher = axios.create({
      baseURL: 'http://localhost:3000/api',
    });
  }

  async get(url) {
    try {
      const raw = await this.fetcher.get(url);
      console.log(raw);
      return raw.data;
    } catch (err) {
      throw err;
    }
  }

  async post(url, data, headers) {
    try {
      const raw = await this.fetcher.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      });
      return raw.data;
    } catch (err) {
      throw err;
    }
  }

  async put(url, data, headers) {
    const token = localStorage.getItem('token');
    try {
      const raw = await this.fetcher.put(url, data, {
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      });
      return raw.data;
    } catch (err) {
      throw err;
    }
  }

  async deleteCall(url, data, headers) {
    try {
      const raw = await this.fetcher.delete(url, {
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        data,
      });
      return raw.data;
    } catch (err) {
      throw err;
    }
  }

  async patch(url, data, headers) {
    try {
      const raw = await this.fetcher.patch(url, data, {
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      });
      return raw.data;
    } catch (err) {
      throw err;
    }
  }
}

export default new APIService();
