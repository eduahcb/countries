export type HttpResponse<T = any> = {
  data: T
  status: number
}

export interface HttpClient {
  get: <T = any > (path: string) => Promise<HttpResponse<T>>
}
