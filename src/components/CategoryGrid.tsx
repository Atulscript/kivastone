import React, { useEffect, useState } from 'react';
import { insforge } from '../lib/insforge';

interface Category {
    id: string;
    name: string;
    slug: string;
    image_url: string;
}

const CategoryGrid: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            const { data, error } = await insforge.database.from('categories').select('*');
            if (data) setCategories(data as Category[]);
            if (error) console.error('Error fetching categories:', error);
            setLoading(false);
        };

        fetchCategories();
    }, []);

    if (loading) return <div className="text-center py-20">Loading our collection...</div>;

    return (
        <section id="products">
            <div className="container">
                <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Collection</h2>
                    <div style={{ width: '60px', height: '2px', background: 'var(--color-primary)', margin: '0 auto' }}></div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {categories.map((cat) => (
                        <div key={cat.id} className="fade-in" style={{
                            position: 'relative',
                            height: '450px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <img
                                src={cat.image_url}
                                alt={cat.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.8s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                right: '0',
                                padding: '2.5rem',
                                background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'space-between'
                            }}>
                                <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{cat.name}</h3>
                                <span style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--color-primary)' }}>VIEW ALL</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
