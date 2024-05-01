import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown,FaChevronUp } from "react-icons/fa";


const CategoryFilter = () => {

    const router = useRouter();

    const handleMenuItemClick = (menuItem) => {
        router.push(`/catalog?username=admin&menuItems=${menuItem}`);
      };
    
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

      const [CategoryVisible, setCategoryVisible] = useState(false);
    
      const toggleCategory = () => {
        setCategoryVisible(!CategoryVisible);
      };
    return (
        <div>
           <div className="accordion">
              <div className="accordion-section">
                <div
                  role="button"
                  tabIndex={0}
                  className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
                  onClick={toggleCategory}
                  onKeyPress={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      toggleCategory();
                    }
                  }}
                >
                  <h2 className="font-semibold"> Categories </h2>
                  {CategoryVisible ? (
                    <FaChevronDown className="mt-1 hover:cursor-pointer" />
                  ) : (
                    <FaChevronUp className="mt-1 hover:cursor-pointer" />
                  )}
                </div>
                <div
                  className={`accordion-content p-2 transition duration-300 flex flex-col items-start ${
                   CategoryVisible ? "" : "hidden"
                  }`}
                >
                  {menuItems.map((item, index) => (
          <button
            className="text-sm text-black text-center py-2 rounded-lg hover:text-blue-900 cursor-pointer"
            key={index}
            onClick={() => handleMenuItemClick(item)}
          >
            {item}
          </button>
        ))}
                  </div>
                
              </div>
            </div>
        </div>
    );
}

export default CategoryFilter;