import React, { useState } from "react";

function Cart() {
    const [show, setShow] = useState(false);
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "North wolf bag",
            price: 9000,
            image: "https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png",
            details: [
                { key: "Height", value: "10 inches" },
                { key: "Color", value: "Black" },
                { key: "Composition", value: "100% calf leather" },
            ],
        },
        {
            id: 2,
            name: "Luxe Signature Ring",
            price: 9000,
            image: "https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller2.png",
            details: [
                { key: "Height", value: "10 inches" },
                { key: "Color", value: "Black" },
                { key: "Composition", value: "100% calf leather" },
            ],
        },
        {
            id: 3,
            name: "Luxe Signature Shoes",
            price: 9000,
            image: "https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller1.png",
            details: [
                { key: "Height", value: "10 inches" },
                { key: "Color", value: "Black" },
                { key: "Composition", value: "100% calf leather" },
            ],
        },
    ]);

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    return (
        <>
            <div>
                          </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style> <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </>
    );
}

export default Cart;