import useSWR from 'swr';
import { BsCart2, BsHeart } from "react-icons/bs";
import Image from "next/image";
import { fetcher } from '../utils/fetcher'; // Adjust the path as necessary

const PopularProductsUpdated = () => {
  // Use SWR to fetch data
  const { data, error } = useSWR('/products', fetcher);

  if (error) {
    console.error('SWR error:', error);
    return <div>Failed to load</div>;
  }
  if (!data) return <div>Loading...</div>;

  // Limit the number of products to the last 4
  const limitedProducts = data.data.slice(-4);

  const productItems = limitedProducts.map((item, i) => (
    <div
      key={item.id}
      className={`bg-white p-4 rounded hover:cursor-pointer border hover:shadow-lg ${i === limitedProducts.length - 1 && "hidden lg:block"}`}
    >
      <Image src={item.images[0] || "/Hardware02.jpg"} height={250} width={250} alt={item.name} />
      <p className="text-sm text-gray-500 mb-3 h-10 py-2 truncate md:truncate-none">
        {item.name}
      </p>
      <div className="flex justify-between lg:mb-3 lg:pt-1">
        <p className="text-sm font-bold ">{item.min_price}</p>
        <p>
          <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
        </p>
      </div>
      <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md py-3 px-1 lg:p-2 lg:mt-0 mt-3 hidden md:flex items-center justify-center w-full border hover:text-white hover:bg-primary">
        Add to cart <BsCart2 className="mx-2" />
      </button>
    </div>
  ));

  return (
    <div className="grid grid-cols-12 bg-gray-100 pt-1">
      <div className="md:col-span-2 hidden md:flex"></div>
      <div className="md:col-span-8 col-span-12 m-1">
        <div className="lg:p-4 grid grid-cols-3 lg:grid-cols-4 p-3 gap-2">
          {productItems}
        </div>
      </div>
      <div className="md:col-span-2 hidden"></div>
    </div>
  );
};

export default PopularProductsUpdated;
