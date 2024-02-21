import { useRouter } from 'next/navigation';

const menuItems = [
  "Door and Window",
  "Flooring",
  "Tile Products",
  "Smart Devices",
  "Outdoor Lighting",
  "Safety Products",
  "Pipeline",
  "LED Screen",
  "Others",
];

const Menu = () => {
  const router = useRouter();

  const handleMenuItemClick = (menuItem) => {
    router.push(`/catalog?username=admin&menuItems=${menuItem}`);
  };

  return (
    <nav className="w-full py-1 px-1const handleMenuItemClick = (menuItem) => {
      router.push(`/home/catalog?username=admin&${menuItem.toLowerCase().replace(/\s+/g, '-')}`);
    }; z-10 bg-primary md:grid hidden grid-cols-12">
      <div className="col-span-1"> </div>
      <div className="col-span-10 grid grid-cols-9 justify-evenly ml-5">
        {menuItems.map((item, index) => (
          <button
            className="col-span-1 text-xs text-white text-center py-2 rounded-lg hover:text-gray-200 cursor-pointer"
            key={index}
            onClick={() => handleMenuItemClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="col-span-1"> </div>
    </nav>
  );
};

export default Menu;
