import Link from 'next/link';
import { useSearchParams } from "next/navigation";


const NavTrail = () => {
  const searchParams = useSearchParams();
  const MenuItems = searchParams.get("menuItems");


  return (
    <div className='w-full h-40 grid grid-cols-12 items-center px-5'>
      <div className="col-span-1"></div>
        <div className="md:col-span-6 col-span-8 flex flex-col md:ml-3  pl-5 "> 
        <h2 className='font-semibold text-xl pb-2'>Catalog </h2>
      {/* Links to other pages */}
      <div>
        <ol className='list-none flex space-x-2'>
        <Link href="/home"> <li className='flex items-center text-gray-500 hover:text-underline hover:cursor-pointer ho
        ver:text-primary'>Home /</li> </Link> 
          <li className='flex items-center text-primary hover:text-underline hover:cursor-pointer '>{MenuItems}  </li>
   
        </ol>
      </div> 
        </div>
        <div className='w-full col-span-1 md:grid-span-2 '> 
             
        </div>  
    </div>
  );
};

export default NavTrail;
