
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { ProductResult } from '@/src/lib/validators/ProductResult';
import ComparisonTabsContent from './ComparisonTabsContent';





interface ComparisonTabsContainerProps {
    productData_1: ProductResult;
    productData_2: ProductResult;
}

const ComparisonTabsContainer: React.FC<ComparisonTabsContainerProps> = (props) => {
    
    return (
        <section className="mt-4 lg:px-16 mb-12 w-full">
            <Tabs defaultValue="account" className="w-full">
                <TabsList className='w-full'>
                    <TabsTrigger className='w-full' value="account">{props.productData_1.name.slice(0,20) + "..."}</TabsTrigger>
                    <TabsTrigger className='w-full' value="password">{props.productData_2.name.slice(0,20) + "..."}</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <ComparisonTabsContent product_data={props.productData_1}></ComparisonTabsContent>
                </TabsContent>
                <TabsContent value="password">
                    <ComparisonTabsContent product_data={props.productData_2}></ComparisonTabsContent>
                </TabsContent>
            </Tabs>
                
        </section>
    );
};

export default ComparisonTabsContainer;