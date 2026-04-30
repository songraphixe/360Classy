export const WHATSAPP_NUMBER = "233247575618";
export const WHATSAPP_DISPLAY = "+233 24 757 5618";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_MESSAGE =
  "Hello 360 Classy Look, I'd like to book an appointment.";
