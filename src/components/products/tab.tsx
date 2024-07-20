import { GetAllProduct } from "@/servic/product";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Product } from "@/types/product";
import { ProductEmpty } from "./empty";
import { ProductItem } from "./item";
//import { products } from '@/data/products';

type Tab = {
    title: string;
    value: string;
    products: Product[];
}

export const ProductsTab = async () => {
    const pruducts = await GetAllProduct();

    const tabs: Tab[] = [
        {
            title: 'Sushi',
            value: 'sushi',
            products: pruducts.filter(item => item.category === 'sushi')
        },
        {
            title: 'Temaki',
            value: 'temaki',
            products: pruducts.filter(item => item.category === 'temaki')
        },
        {
            title: 'Combinados',
            value: 'pack',
            products: pruducts.filter(item => item.category === 'pack')
        },
        {
            title: 'Bebidas',
            value: 'beverage',
            products: pruducts.filter(item => item.category === 'beverage')
        },
    ]

    return(
        <Tabs  defaultValue="sushi">
            <TabsList className="flex">
                {tabs.map(item => (
                    <TabsTrigger
                        key={item.value}
                        value={item.value}
                        className="flex-1"
                    >{item.title}</TabsTrigger>
                ))}                
            </TabsList>

            {tabs.map(item => (
                <TabsContent key={item.value} value={item.value} className="mt-6">
                    {item.products.length > 0 &&
                        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {item.products.map(product => (
                                <ProductItem key={product.id} item={product}/>
                            ))}
                        </div>
                    }
                    {item.products.length === 0 && <ProductEmpty/>}
                </TabsContent>
            ))}
            
        </Tabs>
    );
}


/*
<TabsTrigger className="flex-1" value="tab1">Tab 1</TabsTrigger>
<TabsTrigger className="flex-1" value="tab2">Tab 2</TabsTrigger>
*/
/*
<TabsContent value="tab1" className="mt-6">
    Conteúdo da Tab 1
</TabsContent>
<TabsContent value="tab2" className="mt-6">
    Conteúdo da Tab 2
 </TabsContent>
*/