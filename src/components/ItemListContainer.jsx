import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

export default function Promesas() {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState(0);
    const [error, setError] = useState('');
    
    useEffect(() => {
        let promesasProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res([
                    {id: 100, name: 'zapato nike' , price: 100},
                    {id: 100, name: 'cartera nike' , price: 150},
                    {id: 100, name: 'zapato adidas' , price: 200},
                ]);
            }, 2000);
        });

            
        promesasProductos
            .then((res) => {
                setProductos(res);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
        }, []);
    return (
        <div>
            <p>Loading: {loading ? 'Loading...' : 'fin'}</p>
            <p>Error: {error ? error : null}</p>
            <ItemList />
        </div>
    );
}