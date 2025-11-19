import { apiClient } from "./config";

export interface SendOTPRequest {
  phoneNumber: string;
  isRegister: boolean;
}

/**
 * Formatea el número de teléfono agregando el prefijo "52" si no lo tiene
 * Esto se hace de forma transparente para el usuario
 */
function formatPhoneNumberForAPI(phoneNumber: string): string {
  // Limpiar el número (solo dígitos)
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Si ya tiene el prefijo 52, retornarlo tal cual
  if (cleaned.startsWith("52")) {
    return cleaned;
  }

  // Si no tiene el prefijo, agregarlo
  return `52${cleaned}`;
}

export interface SendOTPResponse {
  details: {
    businessMeaning: string;
  };
  responseData: {
    messaging_product: string;
    contacts: Array<{
      input: string;
      wa_id: string;
    }>;
    messages: Array<{
      id: string;
      message_status: string;
    }>;
  };
  status: boolean;
}

export interface ValidateOTPRequest {
  phoneNumber: string;
  otpCode: string;
}

export interface ValidateOTPResponse {
  details: {
    businessMeaning: string;
  };
  responseData: boolean;
  status: boolean;
}

export const otpService = {
  async sendOTP(
    phoneNumber: string,
    isRegister: boolean = false
  ): Promise<SendOTPResponse> {
    // Formatear el número agregando el prefijo "52" de forma transparente
    const formattedPhone = formatPhoneNumberForAPI(phoneNumber);

    const response = await apiClient.post<SendOTPResponse>(
      "/atan/notification/wa",
      {
        phoneNumber: formattedPhone,
        isRegister,
      }
    );
    return response.data;
  },

  async validateOTP(
    phoneNumber: string,
    otpCode: string
  ): Promise<ValidateOTPResponse> {
    // Formatear el número agregando el prefijo "52" de forma transparente
    const formattedPhone = formatPhoneNumberForAPI(phoneNumber);

    const response = await apiClient.post<ValidateOTPResponse>(
      "/atan/notification/wa/validate",
      {
        phoneNumber: formattedPhone,
        otpCode,
      }
    );
    return response.data;
  },
};
