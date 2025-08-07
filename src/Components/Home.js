import React from "react";

function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-light text-dark text-center p-5 mb-5 shadow-sm">
                <div className="container">
                    <h1 className="display-4 fw-bold">🪶 Welcome to My React App</h1>
                    <p className="lead mt-3">
                        A modern Single Page Application built with React and React Router.
                    </p>
                    <a href="/signup" className="btn btn-primary btn-lg mt-3">
                        Get Started
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mb-5">
                <h2 className="text-center mb-4">✨ Features</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card p-4 shadow-sm h-100 text-center">
                            <h3>⚡ Fast</h3>
                            <p>Built with React for seamless performance and speed.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card p-4 shadow-sm h-100 text-center">
                            <h3>🎨 Beautiful</h3>
                            <p>Styled with Bootstrap to give a clean, responsive design.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card p-4 shadow-sm h-100 text-center">
                            <h3>🔗 Easy Navigation</h3>
                            <p>Navigate between pages instantly using React Router.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="bg-primary text-white text-center p-5">
                <h2>🚀 Ready to Explore?</h2>
                <p className="mb-4">Sign up today and unlock the full experience!</p>
                <a href="/signup" className="btn btn-light btn-lg">
                    Join Now
                </a>
            </section>
        </div>
    );
}

export default Home;

