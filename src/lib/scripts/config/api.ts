interface API {
  get: (route: string, headers?: Record<string, string>) => Promise<any>
  post: (route: string, body: Record<string, unknown>, headers?: Record<string, string>) => Promise<any>
  put: (route: string, body: Record<string, unknown>, headers?: Record<string, string>) => void
  delete: (route: string, body: Record<string, unknown>, headers?: Record<string, string>) => void
}

interface ResParams {
  status?: 500 | 400 | 401
  body?: Promise<Response>
  headers?: Record<string, string>
  error?: string
}


export const Res = async ({ status, body, headers, error = '' }: ResParams): Promise<Response> => {
  if (status && status !== 200) {
    return new Response(JSON.stringify({ error: error }), {
      status,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  } else {
    return new Response(body ? JSON.stringify(body) : '', {
      status: 200,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }
};

export const api: API = {
  get: async (route: string, headers?: Record<string, string>) => {
    const res = await fetch(route, { ...headers, credentials: 'include' });
    return await res.json();
  },
  post: async (route: string, body: Record<string, unknown>, headers?: Record<string, string>) => {
    const res = await fetch(route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include',
        ...headers
      },
      body: JSON.stringify(body),
    });
  },
  put: async (route: string, body: Record<string, unknown>, headers?: Record<string, string>) => {
    await fetch(route, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(body),
      credentials: 'include'
    });
  },
  delete: async (route: string, body: Record<string, unknown>, headers?: Record<string, string>) => {
    await fetch(route, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(body),
      credentials: 'include'
    });
  },
};
