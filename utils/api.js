// Frontend API utilities
const mercadoPagoPublicKey = 'TEST-d2c2d2b3-f24c-4b21-a8e5-c1294d53e98f';

async function initMercadoPago() {
    try {
        const mp = new MercadoPago(mercadoPagoPublicKey);
        return mp;
    } catch (error) {
        reportError(error);
        return null;
    }
}

async function createPreference(plan) {
    try {
        const response = await fetch('/api/create_preference', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(plan)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}. description: ${await response.text()}`);
        }
        
        return await response.json();
    } catch (error) {
        reportError(error);
        return null;
    }
}

const subscriptionPlans = {
    monthly: {
        title: "Plano Mensal",
        unit_price: 19.90,
        quantity: 1,
        description: "Acesso ilimitado por 1 mês",
        payment_methods: {
            installments: 1,
            excluded_payment_types: []
        }
    },
    annual: {
        title: "Plano Anual",
        unit_price: 199.90,
        quantity: 1,
        description: "Acesso ilimitado por 12 meses",
        payment_methods: {
            installments: 1,
            excluded_payment_types: []
        }
    }
};

async function verifyPayment(paymentId) {
    try {
        const response = await fetch(`/api/verify_payment/${paymentId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}. description: ${await response.text()}`);
        }
        return await response.json();
    } catch (error) {
        reportError(error);
        return null;
    }
}

async function createSubscription(userId, planType) {
    try {
        const response = await fetch('/api/subscriptions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId,
                planType,
                startDate: new Date().toISOString()
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}. description: ${await response.text()}`);
        }
        
        return await response.json();
    } catch (error) {
        reportError(error);
        return null;
    }
}
