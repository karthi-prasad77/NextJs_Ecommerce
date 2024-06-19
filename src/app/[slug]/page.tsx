import Add from "@/components/Add";
import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/* IMAGE */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages />
            </div>
            {/* TEXTS */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">Product Name</h1>
                <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi obcaecati ut, nemo cupiditate labore earum quod qui harum ipsum voluptatibus delectus animi deserunt tenetur veniam, sed maiores officia, fuga provident.</p>
                <div className="h-[2px] bg-gray-100" />
                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-gray-500 line-through">Rs: 200/-</h3>
                    <h2 className="font-medium text-2xl">Rs: 150/-</h2>
                </div>
                <div className="h-[2px] bg-gray-100" />
                <CustomizeProduct />
                <Add />
                <div className="h-[2px] bg-gray-100" />
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus repellendus quasi magnam suscipit? Sed repudiandae ex odio illum inventore obcaecati ipsam perspiciatis error. Dicta eos eum neque enim reiciendis.</p>
                </div>
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus repellendus quasi magnam suscipit? Sed repudiandae ex odio illum inventore obcaecati ipsam perspiciatis error. Dicta eos eum neque enim reiciendis.</p>
                </div>
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus repellendus quasi magnam suscipit? Sed repudiandae ex odio illum inventore obcaecati ipsam perspiciatis error. Dicta eos eum neque enim reiciendis.</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePage;