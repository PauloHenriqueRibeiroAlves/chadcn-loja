import { useCartStore } from "@/stores/card-store";
import { useCheckoutStore } from "@/stores/checkout-store";

export const genereteMessage = () => {
    //pegar os dados do usuário e do carrinho
    const { name, address } = useCheckoutStore(state => state);
    const { cart } = useCartStore(state => state);
    //lista de produtos na mesnagem
    let orderProducts = [];
    for(let item of cart) {
        orderProducts.push(`${item.quantity}x ${item.product.name}`);
    }

    return `**Dados do cliente**
    Nome: ${name}
    Endereço: ${address.street}, ${address.number}, (${address.complement})
    ${address.district}, ${address.city}/${address.state}
    ------
    **Pedido**
    ${orderProducts.join("/n")} `;
}