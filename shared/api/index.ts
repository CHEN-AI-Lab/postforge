import type { ApiResponse } from '../types'

const API_BASE = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

interface RequestOptions extends Omit<RequestInit, 'body'> {
  body?: unknown
  params?: Record<string, string>
}

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const { body, params, headers: customHeaders, ...rest } = options

    // Build URL with query params
    const url = new URL(`${this.baseUrl}${endpoint}`)
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value)
      })
    }

    // Build headers
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...customHeaders,
    }

    try {
      const res = await fetch(url.toString(), {
        ...rest,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      })

      const json = await res.json()

      if (!res.ok) {
        return {
          success: false,
          error: json.error || json.message || `HTTP ${res.status}`,
        }
      }

      return { success: true, data: json as T }
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Network error',
      }
    }
  }

  get<T>(endpoint: string, options?: RequestOptions) {
    return this.request<T>(endpoint, { ...options, method: 'GET' })
  }

  post<T>(endpoint: string, body?: unknown, options?: RequestOptions) {
    return this.request<T>(endpoint, { ...options, method: 'POST', body })
  }

  put<T>(endpoint: string, body?: unknown, options?: RequestOptions) {
    return this.request<T>(endpoint, { ...options, method: 'PUT', body })
  }

  patch<T>(endpoint: string, body?: unknown, options?: RequestOptions) {
    return this.request<T>(endpoint, { ...options, method: 'PATCH', body })
  }

  delete<T>(endpoint: string, options?: RequestOptions) {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' })
  }
}

export const api = new ApiClient(API_BASE + '/api')
