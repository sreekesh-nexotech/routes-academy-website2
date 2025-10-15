import { apiCall } from "./apiService";

export interface ContactFormData { // Adjust fields as necessary
  name: string;
  mobile_no: string;
}

export interface ContactResponse {  // Adjust fields based on actual API response
  message: string;
  status: 'success' | 'error';
}

export async function submitContactForm(data: ContactFormData): Promise<ContactResponse> {
  try {
    const response = await apiCall<ContactResponse>('create_lead_api', 'POST', data);  // Replace 'api-endpoint' with the actual endpoint
    return response;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}