import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image 
                        src="https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=300" 
                        alt="" 
                        fill 
                        sizes="25vw" 
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" 
                    />
                    <Image 
                        src="https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=300" 
                        alt="" 
                        fill 
                        sizes="25vw" 
                        className="absolute object-cover rounded-md" 
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">Rs: 150/-</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-stardm text-stardm py-2 px-4 text-xs w-max hover:bg-stardm hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image 
                        src="https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=300" 
                        alt="" 
                        fill 
                        sizes="25vw" 
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" 
                    />
                    <Image 
                        src="https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=300" 
                        alt="" 
                        fill 
                        sizes="25vw" 
                        className="absolute object-cover rounded-md" 
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">Rs: 150/-</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-stardm text-stardm py-2 px-4 text-xs w-max hover:bg-stardm hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image 
                        src="https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=300" 
                        alt="" 
                        fill 
                        sizes="25vw" 
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" 
                    />
                    <Image 
                        src="https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=300" 
                        alt="" 
                        fill 
                        sizes="25vw" 
                        className="absolute object-cover rounded-md" 
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">Rs: 150/-</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-stardm text-stardm py-2 px-4 text-xs w-max hover:bg-stardm hover:text-white">Add to Cart</button>
            </Link>
        </div>
    )
}

export default ProductList;