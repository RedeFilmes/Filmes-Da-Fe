function App() {
    const [showSubscriptionModal, setShowSubscriptionModal] = React.useState(false);
    const [showAboutModal, setShowAboutModal] = React.useState(false);
    const [showLoginModal, setShowLoginModal] = React.useState(false);
    const [showRegisterModal, setShowRegisterModal] = React.useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const handleLoginClick = () => {
        try {
            setShowLoginModal(true);
            setShowRegisterModal(false);
        } catch (error) {
            reportError(error);
        }
    };

    const handleRegisterClick = () => {
        try {
            setShowRegisterModal(true);
            setShowLoginModal(false);
        } catch (error) {
            reportError(error);
        }
    };

    const toggleSidebar = () => {
        try {
            setIsSidebarOpen(!isSidebarOpen);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col" data-name="app">
            <Header 
                onLogin={handleLoginClick}
                onSubscribe={() => setShowSubscriptionModal(true)}
                onToggleSidebar={toggleSidebar}
            />
            
            <Sidebar 
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <main className="flex-grow">
                <Hero />
                <MovieGrid />
            </main>
            
            <Footer />

            {showSubscriptionModal && (
                <SubscriptionModal onClose={() => setShowSubscriptionModal(false)} />
            )}

            {showAboutModal && (
                <AboutModal onClose={() => setShowAboutModal(false)} />
            )}

            {showLoginModal && (
                <LoginModal 
                    onClose={() => setShowLoginModal(false)}
                    onSwitchToRegister={handleRegisterClick}
                />
            )}

            {showRegisterModal && (
                <RegisterModal 
                    onClose={() => setShowRegisterModal(false)}
                    onSwitchToLogin={handleLoginClick}
                />
            )}
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
