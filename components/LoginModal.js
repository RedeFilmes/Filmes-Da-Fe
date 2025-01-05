function LoginModal({ onClose, onSwitchToRegister }) {
    const [formData, setFormData] = React.useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            console.log('Login:', formData);
            onClose();
        } catch (error) {
            reportError(error);
            alert('Erro ao fazer login. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" data-name="login-modal">
            <div className="bg-slate-800 p-6 rounded-lg max-w-md w-full mx-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Entrar</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-white"
                        disabled={isLoading}
                    >
                        Fechar
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-300 mb-2">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded bg-slate-700 text-white"
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-2">Senha</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded bg-slate-700 text-white"
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-amber-500 text-slate-900 rounded hover:bg-amber-400 disabled:opacity-50"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-gray-400">
                        Não tem uma conta?{' '}
                        <button
                            onClick={onSwitchToRegister}
                            className="text-amber-500 hover:text-amber-400"
                            disabled={isLoading}
                        >
                            Cadastre-se
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
