import React, { useState } from "react";
import Image from "next/image";
import { BsHeart, BsCart2 } from "react-icons/bs";

const ProductDescriptions = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
      <div>
        <div className="my-8 flex flex-col justify-center lg:mx-[100px] mx-[10px] mt-[50px]">
          <div className="flex border-b border-gray-200 mb-5 pb-2 ">
            <button
                onClick={() => handleTabClick(1)}
                className={`px-4 py-2 mr-2 ${activeTab === 1 ? "text-black font-semibold text-md" : "text-gray-500"}`}
            >
              Product Description
            </button>
            <button
                onClick={() => handleTabClick(2)}
                className={`px-4 py-2 ${activeTab === 2 ? "text-black font-semibold text-md" : "text-gray-500"}`}
            >
              Warranties
            </button>
            <button
                onClick={() => handleTabClick(3)}
                className={`px-4 py-2 ${activeTab === 3 ? "text-black font-semibold text-md" : "text-gray-500"}`}
            >
              Returns & Exchanges
            </button>
          </div>

          <div className="mt-4 ml-3">
            {activeTab === 1 && (
                <div>
                  <p className="mb-5 lh-4 text-gray-500 text-sm">
                    ProductDescriptions - Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Pretium aenean pharetra magna ac placerat
                    vestibulum lectus mauris. Nunc non blandit massa enim nec dui
                    nunc mattis. Cras tincidunt lobortis feugiat vivamus at augue
                    eget arcu. Tempor id eu nisl nunc mi.
                  </p>

                  <p className="mb-5 lh-4 text-gray-500 text-sm">
                    Sed enim ut sem viverra aliquet. Quis auctor elit sed vulputate
                    mi sit. Morbi non arcu risus quis varius quam quisque. Molestie
                    nunc non blandit massa enim nec. Sit amet est placerat in
                    egestas erat. Mauris in aliquam sem fringilla ut morbi. Urna
                    neque viverra justo nec. Augue ut lectus arcu bibendum. Sagittis
                    vitae et leo duis ut diam quam. Dui nunc mattis enim ut.
                    Ultrices neque ornare aenean euismod elementum nisi quis
                    eleifend. Ullamcorper malesuada proin libero nunc consequat
                    interdum varius. Odio aenean sed adipiscing diam donec
                    adipiscing tristique.
                  </p>

                  <p className="mb-5 lh-4 text-gray-500 text-sm">
                    Duis convallis convallis tellus id interdum velit laoreet id
                    donec. Fringilla est ullamcorper eget nulla facilisi. Auctor eu
                    augue ut lectus arcu bibendum at. Massa tincidunt dui ut ornare.
                    Morbi quis commodo odio aenean. Sit amet porttitor eget dolor
                    morbi non arcu risus. Dapibus ultrices in iaculis nunc sed.
                    Etiam tempor orci eu lobortis elementum nibh tellus. Pretium
                    quam vulputate dignissim suspendisse in est ante in. In cursus
                    turpis massa tincidunt dui ut ornare lectus sit. Euismod
                    elementum nisi quis eleifend. Feugiat in fermentum posuere urna
                    nec tincidunt. Eget velit aliquet sagittis id consectetur purus
                    ut faucibus pulvinar. Turpis egestas pretium aenean pharetra
                    magna ac placerat vestibulum. Facilisis sed odio morbi quis.
                    Malesuada fames ac turpis egestas maecenas pharetra.
                  </p>
                </div>
            )}
            {activeTab === 2 && (
                <div>
                  <p className="mb-5 lh-4 text-gray-500 text-sm">
                    Warranties - Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Pretium aenean pharetra magna ac placerat vestibulum
                    lectus mauris. Nunc non blandit massa enim nec dui nunc mattis.
                    Cras tincidunt lobortis feugiat vivamus at augue eget arcu.
                    Tempor id eu nisl nunc mi.
                  </p>

                  <p className="mb-5 lh-4 text-gray-500 text-sm">
                    Sed enim ut sem viverra aliquet. Quis auctor elit sed vulputate
                    mi sit. Morbi non arcu risus quis varius quam quisque. Molestie
                    nunc non blandit massa enim nec. Sit amet est placerat in
                    egestas erat. Mauris in aliquam sem fringilla ut morbi. Urna
                    neque viverra justo nec. Augue ut lectus arcu bibendum. Sagittis
                    vitae et leo duis ut diam quam. Dui nunc mattis enim ut.
                    Ultrices neque ornare aenean euismod elementum nisi quis
                    eleifend. Ullamcorper malesuada proin libero nunc consequat
                    interdum varius. Odio aenean sed adipiscing diam donec
                    adipiscing tristique.
                  </p>

                  <p className="mb-5 lh-4 text-gray-500 text-sm">
                    Duis convallis convallis tellus id interdum velit laoreet id
                    donec. Fringilla est ullamcorper eget nulla facilisi. Auctor eu
                    augue ut lectus arcu bibendum at. Massa tincidunt dui ut ornare.
                    Morbi quis commodo odio aenean. Sit amet porttitor eget dolor
                    morbi non arcu risus. Dapibus ultrices in iaculis nunc sed.
                    Etiam tempor orci eu lobortis elementum nibh tellus. Pretium
                    quam vulputate dignissim suspendisse in est ante in. In cursus
                    turpis massa tincidunt dui ut ornare lectus sit. Euismod
                    elementum nisi quis eleifend. Feugiat in fermentum posuere urna
                    nec tincidunt. Eget velit aliquet sagittis id consectetur purus
                    ut faucibus pulvinar. Turpis egestas pretium aenean pharetra
                    magna ac placerat vestibulum. Facilisis sed odio morbi quis.
                    Malesuada fames ac turpis egestas maecenas pharetra.
                  </p>
                </div>
            )}
            {activeTab === 3 && (
                <div>
                  <p className="mb-5 lh-4 text-gray-500 text-sm">
                    Returns and Exchages Content - Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Pretium aenean pharetra magna ac
                    placerat vestibulum lectus mauris. Nunc non blandit massa enim
                    nec dui nunc mattis. Cras tincidunt lobortis feugiat vivamus at
                    augue eget arcu. Tempor id eu nisl nunc mi.
                  </p>

                  <p className="mb-5 lh-4 text-gray-500 text-sm">
                    Sed enim ut sem viverra aliquet. Quis auctor elit sed vulputate
                    mi sit. Morbi non arcu risus quis varius quam quisque. Molestie
                    nunc non blandit massa enim nec. Sit amet est placerat in
                    egestas erat. Mauris in aliquam sem fringilla ut morbi. Urna
                    neque viverra justo nec. Augue ut lectus arcu bibendum. Sagittis
                    vitae et leo duis ut diam quam. Dui nunc mattis enim ut.
                    Ultrices neque ornare aenean euismod elementum nisi quis
                    eleifend. Ullamcorper malesuada proin libero nunc consequat
                    interdum varius. Odio aenean sed adipiscing diam donec
                    adipiscing tristique.
                  </p>

                  <p className="mb-5 lh-4 text-gray-500 text-sm">
                    Duis convallis convallis tellus id interdum velit laoreet id
                    donec. Fringilla est ullamcorper eget nulla facilisi. Auctor eu
                    augue ut lectus arcu bibendum at. Massa tincidunt dui ut ornare.
                    Morbi quis commodo odio aenean. Sit amet porttitor eget dolor
                    morbi non arcu risus. Dapibus ultrices in iaculis nunc sed.
                    Etiam tempor orci eu lobortis elementum nibh tellus. Pretium
                    quam vulputate dignissim suspendisse in est ante in. In cursus
                    turpis massa tincidunt dui ut ornare lectus sit. Euismod
                    elementum nisi quis eleifend. Feugiat in fermentum posuere urna
                    nec tincidunt. Eget velit aliquet sagittis id consectetur purus
                    ut faucibus pulvinar. Turpis egestas pretium aenean pharetra
                    magna ac placerat vestibulum. Facilisis sed odio morbi quis.
                    Malesuada fames ac turpis egestas maecenas pharetra.
                  </p>
                </div>
            )}
          </div>
        </div>
        {/* {"end of Tabbed Interface"} */}
        <div className="pl-[110px] pt-[50px] bg-gray-100">
          <h1 className="text-3xl ml-5 text-primary align-center font-bold cursor-pointer hover:underline">
            {" "}
            Related Products{" "}
          </h1>{" "}
        </div>
        <div className="grid grid-cols-12 gap-4 bg-gray-100 pt-[25px] pb-[50px]">
          <div className="col-span-1"></div>
          <div className="col-span-10 grid md:grid-cols-4 grid-cols-2 justify-evenly gap-5">
            <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:shadow-lg">
              <Image
                  src="/Hardware04.jpg"
                  height={100}
                  width={100}
                  alt="Hardware Image"
                  layout="responsive"
              />
              <p className="text-sm text-gray-500 mb-3 h-10">
                {" "}
                Stainless Steel Bathroom Hardware WWG17220{" "}
              </p>
              <div className="flex justify-between mb-3">
                <p className="text-sm font-semibold"> Product Price </p>
                {/* Heart Icon */}
                <p>
                  {" "}
                  <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
                </p>
              </div>
              <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
                Add to cart <BsCart2 className="mx-2" />
                {/* Cart Icon */}
              </button>
            </div>
            <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:shadow-lg">
              <Image
                  src="/Hardware01.jpg"
                  height={100}
                  width={100}
                  alt="Hardware Image"
                  layout="responsive"
              />
              <p className="text-sm text-gray-500 mb-3 h-10">
                {" "}
                Stainless Steel Bathroom Hardware{" "}
              </p>
              <div className="flex justify-between mb-3">
                <p className="text-sm font-semibold"> Product Price </p>
                {/* Heart Icon */}
                <p>
                  {" "}
                  <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
                </p>
              </div>
              <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
                Add to cart <BsCart2 className="mx-2" />
                {/* Cart Icon */}
              </button>
            </div>
            <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:shadow-lg">
              <Image
                  src="/Hardware02.jpg"
                  height={100}
                  width={100}
                  alt="Hardware Image"
                  layout="responsive"
              />
              <p className="text-sm text-gray-500 mb-3 h-10">
                {" "}
                Exposed Door Closer Series{" "}
              </p>
              <div className="flex justify-between mb-3">
                <p className="text-sm font-semibold"> Product Price </p>
                {/* Heart Icon */}
                <p>
                  {" "}
                  <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
                </p>
              </div>
              <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
                Add to cart <BsCart2 className="mx-2" />
                {/* Cart Icon */}
              </button>
            </div>
            <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:shadow-lg">
              <Image
                  src="/Hardware03.jpg"
                  height={100}
                  width={100}
                  alt="Hardware Image"
                  layout="responsive"
              />
              {/* <StaticImage src="../ProductImages/Hardware03.jpg"></StaticImage> */}
              <p className="text-sm text-gray-500 mb-3 h-10">
                {" "}
                Intelligent Door Lock N6700{" "}
              </p>
              <div className="flex justify-between mb-3">
                <p className="text-sm font-semibold"> Product Price </p>
                {/* Heart Icon */}
                <p>
                  {" "}
                  <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
                </p>
              </div>
              <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
                Add to cart <BsCart2 className="mx-2" />
                {/* Cart Icon */}
              </button>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
  );
};

export default ProductDescriptions;