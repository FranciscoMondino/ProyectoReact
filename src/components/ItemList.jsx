import React, { useState, useEffect } from 'react';
import Item from './Item';

export default function ItemList() {
    const [productos, setProductos] = useState(0);
    {productos.map((item) => (
        <Item />
    ))}
}