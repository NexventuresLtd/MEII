const WHATSAPP_PHONE = '250788000000';

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export { WHATSAPP_PHONE };
