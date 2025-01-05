function Footer() {
    const handleNewsletter = (e) => {
        try {
            e.preventDefault();
            const email = e.target.elements.email.value;
            alert(`Implementar inscrição na newsletter para: ${email}`);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <footer className="bg-slate-900 py-12" data-name="footer">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div data-name="footer-about">
                        <h3 className="text-xl font-bold text-amber-300 mb-4">Filmes da Fé</h3>
                        <p className="text-gray-400">
                            Sua plataforma de streaming de conteúdo cristão.
                        </p>
                    </div>
                    <div data-name="footer-links">
                        <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-amber-300">Início</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-300">Filmes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-300">Séries</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-300">Premium</a></li>
                        </ul>
                    </div>
                    <div data-name="footer-support">
                        <h4 className="text-lg font-semibold mb-4">Suporte</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-amber-300">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-300">Contato</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-300">Ajuda</a></li>
                        </ul>
                    </div>
                    <div data-name="footer-newsletter">
                        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                        <p className="text-gray-400 mb-4">
                            Receba novidades e lançamentos.
                        </p>
                        <form className="space-y-2" onSubmit={handleNewsletter}>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Seu e-mail"
                                className="w-full px-4 py-2 rounded bg-slate-800 text-gray-300"
                                required
                            />
                            <button 
                                type="submit"
                                className="w-full px-4 py-2 bg-amber-500 text-slate-900 rounded hover:bg-amber-400"
                            >
                                Inscrever
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-gray-400">
                    <p>&copy; 2024 Filmes da Fé. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
