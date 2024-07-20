import { Cart } from "@/types/cart";
import { Product } from "@/types/product";
import { create } from "zustand";

type States = {
    cart: Cart[];
}
type Actions = {
    upsertCartItem: (product: Product, quantity: number) => void;
}

const initialStates: States = {
    cart: []
}
//useCardStore 
export const useCartStore = create<States & Actions>()(set => ({
    ...initialStates,
    upsertCartItem: (product, quantity) => set(state => {
        let newCart = state.cart;
        //adicionando produtos que não tem no carrinho
        let productIndex = newCart.findIndex(item => item.product.id === product.id);
        if(productIndex < 0) {
            newCart.push({ product, quantity: 0 });
            productIndex = newCart.findIndex(item => item.product.id === product.id);
        }
        //função para adicionar itens no carrinho
        newCart[productIndex].quantity += quantity;
        //função para remover o produto do carrinho
        if (newCart[productIndex].quantity <= 0) {
            newCart = newCart.filter(item => item.product.id !== product.id);
        }

        return { ...state, cart: newCart }
    })
}));