import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "../ui/pagination"



const ProductPagination = () => {
    return (
        <div className="my-4">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                    <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#" isActive>
                        2
                    </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default ProductPagination