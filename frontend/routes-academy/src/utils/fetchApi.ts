export async function fetchApi<T>(
  endpoint: string,
  method: string = 'GET',
  body?: object | null
): Promise<T> {
  const url = `/api/${endpoint}`;  

  const options: RequestInit = {  
    method,
    headers: {  // Add necessary headers here
      'Content-Type': 'application/json',
      'Authorization': `token ${process.env.CRM_API_KEY}:${process.env.CRM_API_SECRET}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error in fetchApi for ${url}:`, error);
    throw error;
  }
}
