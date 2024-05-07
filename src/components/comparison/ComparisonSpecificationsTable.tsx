
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../components/ui/accordion"
  

type Specification = {
    name: string;
    value: string;
};


interface ComparisonSpecificationsTableProps {
    specification_1: Specification[];
    specification_2: Specification[];
}

const ComparisonSpecificationsTable: React.FC<ComparisonSpecificationsTableProps> = (props) => {
    const { specification_1, specification_2 } = props;
    let specs_set_1 = new Set()
    let specs_filtered_1: {name:string, value:string}[] = []
    for (let spec of specification_1) {
      if(specs_set_1.has(spec.name)) {
        continue
      }
      specs_set_1.add(spec.name)
      specs_filtered_1.push(spec)
    }

    let specs_set_2 = new Set()
    let specs_filtered_2: {name:string, value:string}[] = []
    for (let spec of specification_2) {
      if(specs_set_2.has(spec.name)) {
        continue
      }
      specs_set_2.add(spec.name)
      specs_filtered_2.push(spec)
    }
 
    return (
        <section className="mt-4 md:px-16 mb-12 w-full hidden lg:block">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <h2 className="text-xl font-semibold">Specifications:</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='flex gap-1 '>
                            <table className="table-auto border w-full text-sm">
                                <tbody>
                                {specs_filtered_1.map(({ name, value }, index) => {
                                    if (name === 'Customer Reviews' || name === "Unit Count" || name === "Date First Available" || name === "Item Dimensions  LxWxH") {
                                    return null
                                    }
                                    
                                    return (
                                    <tr key={index} className="bg-white border-b">
                                    <td className="px-4 py-2 font-medium">{name}</td>
                                    <td className="px-4 py-2">{value}</td>
                                    </tr>
                                )}
                                )}
                                </tbody>
                            </table>
                        
                            <table className="table-auto border w-full text-sm">
                                <tbody>
                                {specs_filtered_2.map(({ name, value }, index) => {
                                    if (name === 'Customer Reviews' || name === "Unit Count" || name === "Date First Available" || name === "Item Dimensions  LxWxH") {
                                    return null
                                    }
                                    
                                    return (
                                    <tr key={index} className="bg-white border-b">
                                    <td className="md:px-4 py-2 font-medium">{name}</td>
                                    <td className="md:px-4 py-2">{value}</td>
                                    </tr>
                                )}
                                )}
                                </tbody>
                            </table>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
                
        </section>
    );
};

export default ComparisonSpecificationsTable;