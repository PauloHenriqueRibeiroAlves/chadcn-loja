import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export const ProductsTab = () => {
    return(
        <Tabs  defaultValue="tab1">
            <TabsList className="flex">
                <TabsTrigger className="flex-1" value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger className="flex-1" value="tab2">Tab 2</TabsTrigger>
            </TabsList>

            <TabsContent value="tab1" className="mt-6">
                Conteúdo da Tab 1
            </TabsContent>
            <TabsContent value="tab2" className="mt-6">
                Conteúdo da Tab 2
            </TabsContent>
        </Tabs>
    );
}