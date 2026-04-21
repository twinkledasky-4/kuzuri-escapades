
/**
 * PESAPAL PAYMENT SERVICE
 * Client gateway for interacting with the backend Pesapal relay.
 */

export interface PesapalOrderDetails {
  id?: string;
  currency: string;
  amount: string;
  description: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

class PaymentService {
  private readonly BASE_URL = '/api/pesapal';

  public async submitOrder(orderDetails: PesapalOrderDetails) {
    try {
      const response = await fetch(`${this.BASE_URL}/submit-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderDetails }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details || 'Failed to submit order to Pesapal');
      }

      return await response.json();
    } catch (error) {
      console.error("[PaymentService] Submission Error:", error);
      throw error;
    }
  }

  public async getTransactionStatus(orderTrackingId: string) {
    try {
      const response = await fetch(`${this.BASE_URL}/transaction-status?orderTrackingId=${orderTrackingId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch transaction status');
      }
      return await response.json();
    } catch (error) {
      console.error("[PaymentService] Status Error:", error);
      throw error;
    }
  }
}

export const paymentService = new PaymentService();
