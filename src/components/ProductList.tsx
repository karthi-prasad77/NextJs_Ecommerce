import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";

interface ProductListProps {
    categoryId: string,
    limit?: number
}

const PRODUCTS_PER_PAGE = 20;

const ProductList: React.FC<ProductListProps> = async ({categoryId, limit}) => {

    const wixClient = await wixClientServer();

    console.log(categoryId)

    const res = await wixClient.products.queryProducts().find();

    console.log(res)

    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            {res.items.map((product: products.Product) => (

                <Link href={"/" + product.slug} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]" key={product._id}>
                    <div className="relative w-full h-80">
                        <Image 
                            src={product.media?.mainMedia?.image?.url || "/product.png"} 
                            alt="" 
                            fill 
                            sizes="25vw" 
                            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" 
                        />
                        {product.media?.items && (
                            <Image
                                src={product.media?.items[1]?.image?.url || "/product.png"}
                                alt=""
                                fill
                                sizes="25vw"
                                className="absolute object-cover rounded-md"
                            />
                        )}
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">{product.name}</span>
                        <span className="font-semibold">Rs: {product.price?.price}</span>
                    </div>

                    <div className="text-sm text-gray-500">My Description</div>
                    <button className="rounded-2xl ring-1 ring-stardm text-stardm py-2 px-4 text-xs w-max hover:bg-stardm hover:text-white">Add to Cart</button>
                </Link>
            ))}
        </div>
    )
}

export default ProductList;