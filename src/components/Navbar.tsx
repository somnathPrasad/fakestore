import Link from "next/link";

export default function Navbar(){
    return(
        <div className="bg-orange-400 w-full py-3 rounded-b-md shadow-xl fixed top-0 flex justify-between px-10 items-center">
            <h1 className="text-center text-white font-medium text-3xl">Fake Store</h1>
            <Link className="text-center text-white font-medium" href={"/cart"}>Cart</Link>
        </div>
    )
}