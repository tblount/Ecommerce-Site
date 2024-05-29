// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="homepage">
            <header className="header">
                <h1>Welcome to My Ecommerce Site</h1>
            </header>
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <main className="main-content">
                <section className="hero">
                    <h2>Featured Products</h2>
                    {/* Add content for featured products */}
                </section>
                <section className="about">
                    <h2>About Us</h2>
                    <p>This is an ecommerce site selling various products.</p>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2024 My Ecommerce Site</p>
            </footer>
        </div>
    );
};

export default Home;
