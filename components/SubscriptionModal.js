function SubscriptionModal({ onClose }) {
    const [selectedPlan, setSelectedPlan] = React.useState(null);
    const [isProcessing, setIsProcessing] = React.useState(false);

    const handleSubscribe = async (plan) => {
        try {
            setIsProcessing(true);
            setSelectedPlan(plan);

            const mp = await initMercadoPago();
            if (!mp) {
                throw new Error('Erro ao inicializar Mercado Pago');
            }

            const preference = await createPreference(subscriptionPlans[plan]);
            if (!preference) {
                throw new Error('Erro ao criar preferência de pagamento');
            }

            const checkout = mp.checkout({
                preference: {
                    id: preference.id
                },
                render: {
                    container: '.checkout-button',
                    label: 'Pagar',
                }
            });

        } catch (error) {
            reportError(error);
            setIsProcessing(false);
            alert('Erro ao processar pagamento. Tente novamente.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" data-name="subscription-modal">
            <div className="bg-slate-800 p-6 rounded-lg max-w-md w-full mx-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Escolha seu Plano</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-white"
                        disabled={isProcessing}
                    >
                        Fechar
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="border border-amber-500 rounded-lg p-4 hover:bg-slate-700 cursor-pointer">
                        <button 
                            className="w-full text-left"
                            onClick={() => handleSubscribe('monthly')}
                            disabled={isProcessing}
                        >
                            <h3 className="text-xl font-semibold mb-2">Plano Mensal</h3>
                            <p className="text-gray-300 mb-2">Acesso ilimitado por 1 mês</p>
                            <p className="text-2xl text-amber-500">R$ 19,90</p>
                        </button>
                        <div className="checkout-button mt-2"></div>
                    </div>

                    <div className="border border-amber-500 rounded-lg p-4 hover:bg-slate-700 cursor-pointer">
                        <button 
                            className="w-full text-left"
                            onClick={() => handleSubscribe('annual')}
                            disabled={isProcessing}
                        >
                            <h3 className="text-xl font-semibold mb-2">Plano Anual</h3>
                            <p className="text-gray-300 mb-2">Acesso ilimitado por 12 meses</p>
                            <p className="text-2xl text-amber-500">R$ 199,90</p>
                            <p className="text-sm text-amber-300">Economize R$ 38,80</p>
                        </button>
                        <div className="checkout-button mt-2"></div>
                    </div>
                </div>

                {isProcessing && (
                    <div className="mt-4 text-center text-gray-300">
                        Processando pagamento...
                    </div>
                )}
            </div>
        </div>
    );
}
