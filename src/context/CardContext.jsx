import { createContext, useEffect, useState } from "react";

// إنشاء السياق
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

// مزود `CartProvider`
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const [Cart, setCart] = useState([]);

    // تحميل السلة من localStorage عند تحميل الصفحة
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // تحديث التخزين المحلي
    const updateLocaleStorage = (updatedCart) => {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // إضافة منتج إلى السلة
    const addToCart = (product) => {
        const existingProduct = Cart.find((item) => item.id === product.id);

        let updatedCart;

        if (existingProduct) {
            updatedCart = Cart.map((item) =>
                item.id === product.id ? { ...item, quantite: item.quantite + 1 } : item
            );
        } else {
            updatedCart = [...Cart, { ...product, quantite: 1 }];
        }

        updateLocaleStorage(updatedCart);
        setCart(updatedCart);
    };

    // زيادة الكمية
    const increment = (id) => {
        const updatedCart = Cart.map((item) =>
            item.id === id ? { ...item, quantite: item.quantite + 1 } : item
        );
        updateLocaleStorage(updatedCart);
        setCart(updatedCart);
    };

    // تقليل الكمية
    const decrement = (id) => {
        let updatedCart = Cart.map((item) =>
            item.id === id ? { ...item, quantite: item.quantite - 1 } : item
        );

        // إزالة العناصر ذات الكمية 0
        updatedCart = updatedCart.filter((item) => item.quantite > 0);

        updateLocaleStorage(updatedCart);
        setCart(updatedCart);
    };

    // إفراغ السلة
    const clear = () => {
        setCart([]);
        updateLocaleStorage([]);
    };

    return (
        <CartContext.Provider value={{ Cart, addToCart, increment, decrement, clear }}>
            {children}
        </CartContext.Provider>
    );
};
