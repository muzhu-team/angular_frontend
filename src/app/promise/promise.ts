
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

// const baseUrl = '127.0.0.1:8000';

const options = {
  headers: new HttpHeaders()
};

@Injectable()
export class HttpRequestService {
  constructor(private http: HttpClient) {
  }

  public async doRequest(params: any) {
    if (params.url === '' || params.url === undefined) {
      throw (new Error('request url is missing'));
    }
    if (params.method === 'post' || params.method === 'POST') {
      return await this.doPost(params);
    } else if (params.method === 'patch' || params.method === 'PATCH') {
      return await this.doPatch(params);
    } else if (params.method === 'get' || params.method === 'GET') {
      return await this.doGet(params);
    } else if (params.method === 'delete' || params.method === 'DELETE') {
      return await this.doDelete(params);
    } else if (params.method === 'put' || params.method === 'PUT') {
      return await this.doPut(params);
    }
  }

  public async doPost(params) {
    const url =  params.url;
    return await this.http.post(url, params.data, options).toPromise();
  }

  public async doPatch(params) {
    const url =  params.url;
    return await this.http.patch(url, params.data, options).toPromise();
  }

  public async doGet(params) {
    const url =  params.url;
    const requestOption = {
      params: undefined,
      headers: undefined,
      responseType: undefined
    };
    if (params.data !== undefined) {
      requestOption.params = new HttpParams({fromObject: params.data});
    }
    if (params.response !== undefined) {
      requestOption.responseType = params.response;
    }

    return await this.http.get(url, requestOption).toPromise();
  }

  public async doDelete(params) {
    const url =  params.url;
    const requestOption = {
      params: undefined,
      headers: undefined
    };
    if (params.data !== undefined) {
      requestOption.params = new HttpParams({fromObject: params.data});
    }
    return await this.http.delete(url, requestOption).toPromise();
  }

  public async doPut(params) {
    const url = params.url;
    return await this.http.put(url, params.data, options).toPromise();
  }

}
