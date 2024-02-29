import allProducts from "@/data/allProducts";
import { BsCart2, BsHeart } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PopularProducts = () => {
  const ProductRouter = useRouter();

  const PopProducts = allProducts.slice(0, 5);

  const handleAddToCartClick = (index) => {
    ProductRouter.push(`/cart?username=admin&PopProduct=${index}`);
  };

  const productItems = [];
  for (let i = 1; i < PopProducts.length; i++) {
    const item = PopProducts[i];
    productItems.push(
      <div
        key={i}
        className="bg-white p-4 rounded hover:cursor-pointer border hover:shadow-lg"
        onClick={() => handleAddToCartClick(i)}
      >
        <Image
          src={item.img}
          height={250}
          width={250}
          layout="responsive"
          alt={item.name}
        />
        <p className="text-sm text-gray-500 mb-3 h-10 py-2">{item.name}</p>
        <div className="flex justify-between mb-3">
          <p className="text-sm font-semibold">{item.price}</p>
          <p>
            <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
          </p>
        </div>
        <button
          onClick={() => handleAddToCartClick(i)}
          className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary"
        >
          Add to cart <BsCart2 className="mx-2" />
        </button>
      </div>,
    );
  }

  return (
    <div className="grid grid-cols-12 bg-gray-100 pt-5 ">
      <div className="md:col-span-2 col-span-1 "></div>
      <div className="md:col-span-8 col-span-10">
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {productItems}
        </div>
      </div>
      <div className="md:col-span-2 col-span-1 "></div>
    </div>
  );
};

export default PopularProducts;
