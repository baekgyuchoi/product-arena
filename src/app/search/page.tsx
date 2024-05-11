import ProductTagSelection from '@/src/components/categories/ProductTagSelection';
import prisma from '../helper/db';
import SearchContainer from '@/src/components/search/SearchContainer';
import SearchResultsContainer from '@/src/components/search/SearchResultsContainer';




export default async function SearchPage({ searchParams }: {
    searchParams?: { [key: string]: string | null};
    })
{
    const search_query = searchParams?.q;


    return (
        <div className='flex flex-col items-center justify-center'>
            <div>
                <h1 className='mt-16 font-medium italic'>Search Results for "{search_query}"</h1>
            </div>
            <SearchResultsContainer search_query={search_query!} />
        </div>
    );
};

