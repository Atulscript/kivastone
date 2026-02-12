import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=2500&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginTop: '-5rem'
        }}>
            <div className="container text-center fade-in">
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1.5rem' }}>
                    Timeless Elegance <br /> In Every Slab
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-accent)', maxWidth: '700px', margin: '0 auto 2.5rem', opacity: 0.8 }}>
                    Sourcing the world's finest natural stones and quartz to transform your space into a masterpiece.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <a href="#products" className="btn btn-filled">Explore Collection</a>
                    <a href="#contact" className="btn">Book a Consult</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
