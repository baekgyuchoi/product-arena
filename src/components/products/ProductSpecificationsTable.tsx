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


interface ProductSpecificationsTableProps {
    specifications: Specification[];
}

const ProductSpecificationsTable: React.FC<ProductSpecificationsTableProps> = (props) => {
    const { specifications } = props;
    let specs_set = new Set()
    let specs_filtered: {name:string, value:string}[] = []
    for (let spec of specifications) {
      if(specs_set.has(spec.name)) {
        continue
      }
      specs_set.add(spec.name)
      specs_filtered.push(spec)
    }
 
    return (
      <section className="mt-4  mb-12">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h2 className="text-xl font-semibold">Specifications:</h2>
            </AccordionTrigger>
            <AccordionContent>
              <table className="table-auto w-full text-sm">
                <tbody>
                  {specs_filtered.map(({ name, value }, index) => {
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    );
};

export default ProductSpecificationsTable;