import React from 'react';

const SkeletonGrid = ({ count = 9 }) => {
    return (
        <div style={styles.grid}>
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} style={styles.card}>
                    <div className="shimmer" style={styles.image}></div>
                    <div style={styles.content}>
                        <div className="shimmer" style={styles.title}></div>
                        <div className="shimmer" style={styles.price}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2.5rem',
        padding: '1rem 0',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
    },
    image: {
        width: '100%',
        aspectRatio: '3/4',
        borderRadius: '8px',
        marginBottom: '1rem',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    title: {
        height: '1.2rem',
        width: '80%',
        borderRadius: '4px',
    },
    price: {
        height: '1.2rem',
        width: '40%',
        borderRadius: '4px',
    }
};

export default SkeletonGrid;
