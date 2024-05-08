import prisma from '../helper/db';
import SearchContainer from '@/src/components/search/SearchContainer';


async function getCategories() {
    const categories = await prisma.productCategories.findMany();
    return categories;
}

export default async function SearchPage() {

    const categories_from_db = await getCategories();
    const categories = categories_from_db.map((category) => {
        return {
            name: category.name,
            slug: category.slug,
            categoryId: category.id
        }
    })

    return (
        <>
         
            <div className='h-full flex items-center' >
                <SearchContainer categories={categories}/>
            </div>
           
            {/* <div className="flex flex-col items-center justify-center min-h-screen py-12">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Product Comparison Tool</h1>
                <form onSubmit={handleSearch} className="space-y-6">
                    <div className="flex gap-4 w-full bg-black">
                        
                        <input
                            type="text"
                            placeholder="Enter Product A"
                            className="form-input px-4 py-3 rounded-lg shadow-sm border-gray-300 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            value={productA}
                            onChange={(e) => setProductA(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Enter Product B"
                            className="form-input px-4 py-3 rounded-lg shadow-sm border-gray-300 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            value={productB}
                            onChange={(e) => setProductB(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Compare
                    </button>
                </form>
            </div> */}
        </>
    );
};

