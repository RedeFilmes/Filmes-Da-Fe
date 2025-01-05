function Header({ onLogin, onSubscribe, onToggleSidebar }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="bg-slate-900 shadow-lg" data-name="header">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-4" data-name="logo-section">
                        <button 
                            onClick={onToggleSidebar}
                            className="text-gray-300 hover:text-amber-300"
                            data-name="sidebar-toggle"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                        <h1 className="text-2xl font-bold text-amber-300 cursor-pointer" onClick={() => window.location.href = '/'}>
                            Filmes da Fé
                        </h1>
                    </div>
                    
                    <div className="hidden md:flex space-x-8" data-name="desktop-menu">
                        <a href="#" className="nav-link text-gray-300 hover:text-amber-300">Início</a>
                        <a href="#" className="nav-link text-gray-300 hover:text-amber-300">Filmes</a>
                        <a href="#" className="nav-link text-gray-300 hover:text-amber-300">Séries</a>
                        <a href="#" className="nav-link text-gray-300 hover:text-amber-300">Premium</a>
                    </div>

                    <div className="hidden md:flex items-center space-x-4" data-name="auth-buttons">
                        <button 
                            className="px-4 py-2 text-gray-300 hover:text-amber-300"
                            onClick={onLogin}
                        >
                            Entrar
                        </button>
                        <button 
                            className="px-4 py-2 bg-amber-500 text-slate-900 rounded-lg hover:bg-amber-400"
                            onClick={onSubscribe}
                        >
                            Assinar Agora
                        </button>
                    </div>

                    <button 
                        className="md:hidden text-gray-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        data-name="mobile-menu-button"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </nav>

                {isMenuOpen && (
                    <div className="md:hidden mt-4" data-name="mobile-menu">
                        <a href="#" className="block py-2 text-gray-300 hover:text-amber-300">Início</a>
                        <a href="#" className="block py-2 text-gray-300 hover:text-amber-300">Filmes</a>
                        <a href="#" className="block py-2 text-gray-300 hover:text-amber-300">Séries</a>
                        <a href="#" className="block py-2 text-gray-300 hover:text-amber-300">Premium</a>
                        <div className="mt-4 space-y-2">
                            <button 
                                className="block w-full px-4 py-2 text-gray-300 hover:text-amber-300"
                                onClick={onLogin}
                            >
                                Entrar
                            </button>
                            <button 
                                className="block w-full px-4 py-2 bg-amber-500 text-slate-900 rounded-lg hover:bg-amber-400"
                                onClick={onSubscribe}
                            >
                                Assinar Agora
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
