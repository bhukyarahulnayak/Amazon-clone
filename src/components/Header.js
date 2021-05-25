import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline"

function Header() {
    return (
        <header>
            {/* top nev */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                {/* search */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer  ">
                    <button class="w-10 h-10 p-2 flex items-center rounded-l-md bg-gray-300 text-black focus:outline-none" type="submit">All</button>
                    <input className="p-2 h-full w-6 flex-grow flex-shrink focus:outline-none px-4 " type="text" />
                    <SearchIcon className="h-10 p-2 bg-yellow-400 hover:bg-yellow-500 rounded-r-md " />
                </div>
                {/* right hand side */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link">
                        <p>Hello Rahul Nayak</p>
                        <p className="font-extrabold md:text-sm">Account & lists </p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Cart</p>
                    </div>
                </div>
            </div>
            {/* bottom nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm ">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p>
                <p className="link">Best Sellers</p>
                <p className="link">Mobiles</p>
                <p className="link">Prime</p>
                <p className="link">Fashion</p>
                <p className="link">New Releases</p>
                <p className=" hidden lg:inline-flex link ">Electronics</p>
                <p className=" hidden lg:inline-flex link ">Customer Service</p>
                <p className=" hidden lg:inline-flex link ">Today's Deals</p>
                <p className=" hidden lg:inline-flex link">Amazon pay</p>
            </div>
        </header>
    )
}
export default Header