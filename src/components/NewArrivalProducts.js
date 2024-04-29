import allProducts from "@/data/allProducts";
import { BsCart2, BsHeart } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NewArrivalProducts = () => {
  const ProductRouter = useRouter();

  const PopProducts = allProducts.slice(5, 10);

  const handleAddToCartClick = (index) => {
    ProductRouter.push(`/product?username=admin&PopProduct=${index}`);
  };

  const productItems = [];
  for (let i = 1; i < PopProducts.length; i++) {
    const item = PopProducts[i];
    productItems.push(
      <div
        key={i}
        className={`bg-white p-4 rounded hover:cursor-pointer border hover:shadow-lg ${i === PopProducts.length - 1 && "hidden lg:block"}`}
        onClick={() => handleAddToCartClick(i + 5)} //plus 5 to adjust the index of the product based on the corresponding item clicked
      >
        <Image
          src={item.img}
          height={250}
          width={250}
          layout="responsive"
          alt={item.name}
        />
        <p className="text-sm text-gray-500 mb-3 h-10 pt-2 truncate md:truncate-none">
          {item.name}
        </p>
        <div className="flex justify-between lg:mb-3 lg:pt-1">
          <p className="text-sm font-bold ">{item.price}</p>
          <p>
            <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
          </p>
        </div>
        <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  py-3 px-1 lg:p-2 lg:mt-0 mt-3 flex items-center justify-center w-full border hover:text-white hover:bg-primary ">
          Add to cart <BsCart2 className="mx-2" />
        </button>
      </div>,
    );
  }

  return (
    <div className="grid grid-cols-12 bg-gray-100 pt-1 ">
      <div className="md:col-span-2 hidden md:flex"></div>
      <div className="md:col-span-8 col-span-12 m-1">
        <div className="lg:p-4 grid grid-cols-3 lg:grid-cols-4 p-3 gap-2">
          {productItems}
        </div>
      </div>
      <div className="md:col-span-2 hidden "></div>
    </div>
  );
};

export default NewArrivalProducts;
