function Hero() {
    const handleGetStarted = () => {
        try {
            alert('Implementar início do cadastro');
        } catch (error) {
            reportError(error);
        }
    };

    const handleLearnMore = () => {
        try {
            alert('Implementar página sobre o serviço');
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <section className="hero-section relative h-[80vh] flex items-center" data-name="hero">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
                    alt="Banner" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-transparent"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6" data-name="hero-title">
                        Histórias Bíblicas Ganham Vida
                    </h1>
                    <p className="text-xl text-gray-300 mb-8" data-name="hero-description">
                        Explore nossa coleção de filmes e séries inspirados na Bíblia. 
                        Entretenimento com propósito para toda a família.
                    </p>
                    <div className="space-x-4" data-name="hero-cta">
                        <button 
                            className="px-8 py-3 bg-amber-500 text-slate-900 rounded-lg hover:bg-amber-400 font-semibold"
                            onClick={handleGetStarted}
                        >
                            Comece Agora
                        </button>
                        <button 
                            className="px-8 py-3 border-2 border-gray-300 text-gray-300 rounded-lg hover:border-amber-300 hover:text-amber-300"
                            onClick={handleLearnMore}
                        >
                            Saiba Mais
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
