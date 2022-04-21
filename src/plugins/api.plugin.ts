
import Axios, { type AxiosInstance, type AxiosResponse } from "axios";
import type { ApiResponse } from "@/types/api";
import queryString from "query-string";
import type { Brand, Category, CategoryDetail, Characteristic, EquipmentCreation, EquipmentItem, EquipmentItemDetail, EquipmentQuery } from "@/types/data";
import { inject, type InjectionKey, type Plugin } from 'vue';
import { useMock } from '@/composables/useMock';

// localstorage

class ApiServices {
  constructor(public instance: AxiosInstance) {}

  // public login() {
  //   return this.instance.get("/api/login").then((res) => {
  //     setToken(res.data.token);
  //   })
  // }

  public getBrands() {
    return this.instance.get<ApiResponse<Brand[]>>("/api/Brands");
  }

  public getCategories () {
    return this.instance.get<ApiResponse<Category[]>>("/api/Categories");
  }

  public getCategoryDetails () {
    return this.instance.get<ApiResponse<CategoryDetail[]>>("/api/CategoryDetails");
  }

  public getCharacteristics () {
    return this.instance.get<ApiResponse<Characteristic[]>>("/api/Characteristics", );
  }

  public getPublishedEqpt(query: EquipmentQuery) {
    return this.instance.get<ApiResponse<{ count: number, eqptList: EquipmentItem[], }>>("/api/PublishedEqpt", {
      params: query,
      paramsSerializer: params => {
        return queryString.stringify(params);
      }
    });
  }

  public getPublishedEqptDetail(id: EquipmentItem["publishedEqptId"]) {
    return this.instance.get<ApiResponse<EquipmentItemDetail>>(`/api/PublishedEqpt/${id}`);
  }

  public postPublishedEqpt(postdata: EquipmentCreation) {
    return this.instance.post<ApiResponse<null>>("/api/PublishedEqpt", postdata);
  }
}

export class ApiError extends Error {
  constructor(message: string, public response: AxiosResponse) {
    super(message);

    // add elk...
  }
}

const apiProviderKey: InjectionKey<ApiServices> = Symbol.for('api-provider-key');

export function useApi() {
  return inject(apiProviderKey)!;
}

export default {
  install(app) {
    const api = Axios.create({
      baseURL: "/kon",
    });

    // // token example
    // api.interceptors.request.use((request) => {
    //   if (getToken()) {
    //     request.headers['CSRT_TOKEN'] = getToken();
    //   }
    // })

    api.interceptors.response.use((response) => {
      if (response.data.status !== 200) {
        throw new ApiError("Status is not 200", response);
      }

      return response;
    }, (error) => {
      throw error;
    });

    useMock(api);

    const apiServices =  new ApiServices(api);

    app.provide(apiProviderKey, apiServices);
  }
} as Plugin;