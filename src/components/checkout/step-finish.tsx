import { useCheckoutStore } from "@/stores/checkout-store";
import { Button } from "../ui/button";
import Link from "next/link";
import { genereteMessage } from "@/lib/generete-message";

export const StepFinish = () => {
    //para pegar o nome da pessoa
    const { name } = useCheckoutStore(state => state);
    //montando a mesangem
    const message = genereteMessage();
    const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`;
    return (
        <div className="text-center flex flex-col gap-3">
            <p>Perfeito <strong>{name}</strong>!</p>
            <p>Agora envie seu pedido para o nosso Whatsapp para concluir.
                Nosso atendente irá guiar oandamento do seu pedido.
            </p>
            <Button>
                <Link target="_blank" href={linkZap}>Enviar para o Whatsapp</Link>
            </Button>
        </div>
    );
}