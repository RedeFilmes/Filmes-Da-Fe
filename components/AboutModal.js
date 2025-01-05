function AboutModal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center" data-name="about-modal">
            <div className="bg-slate-800 p-6 rounded-lg max-w-2xl w-full mx-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Sobre o Filmes da Fé</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-white"
                    >
                        Fechar
                    </button>
                </div>

                <div className="space-y-4 text-gray-300">
                    <p>
                        O Filmes da Fé é uma plataforma de streaming dedicada a trazer histórias bíblicas à vida através de produções cinematográficas de alta qualidade.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-4">Nossa Missão</h3>
                    <p>
                        Proporcionar entretenimento edificante baseado nas escrituras sagradas, alcançando famílias e indivíduos com mensagens de fé, esperança e amor.
                    </p>

                    <h3 className="text-xl font-semibold mt-4">O que Oferecemos</h3>
                    <ul className="list-disc list-inside">
                        <li>Filmes baseados em histórias bíblicas</li>
                        <li>Séries inspiradoras</li>
                        <li>Documentários sobre a história da fé</li>
                        <li>Conteúdo para todas as idades</li>
                        <li>Qualidade cinematográfica</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4">Valores</h3>
                    <ul className="list-disc list-inside">
                        <li>Fidelidade às escrituras</li>
                        <li>Excelência em produção</li>
                        <li>Acessibilidade</li>
                        <li>Compromisso com a família</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
