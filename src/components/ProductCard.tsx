import useCart from "@/hooks/useCart";
import useToast from "@/hooks/useToast";
import Image from "next/image";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react"

export type product = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: { rate: number, count: number };
    title: string;
}

const AddButton = ({ onClick }: { onClick: MouseEventHandler }) => {
    return (
        <button onClick={onClick} className="bg-green-400 text-center rounded-md px-3 py-3 w-full hover:bg-green-500">
            <p className="text-xl font-medium">ADD TO CART</p>
        </button>
    )
}
const RemoveButton = ({ onClick }: { onClick: MouseEventHandler }) => {
    return (
        <div onClick={onClick} className="bg-red-400 text-center rounded-md px-3 py-3 w-full">
            <p className="text-xl font-medium">REMOVE</p>
        </div>
    )
}

export default function ProductCard({ product }: { product: product }) {
    const { setCartItems } = useCart();
    const { pathname } = useRouter();
    const notify = useToast();
    const onAdd = ()=>{
        notify(()=>"item added")
        setCartItems(prev => [...prev, product])
    }
    return (
        <div className="bg-white my-5 py-3 px-3 rounded-md border border-slate-300 shadow-lg flex flex-col justify-between">
            <div
                className="grid grid-cols-3 "
            >
                <div className="rounded-md mr-5 w-full h-full">
                    <Image
                        alt={product.title}
                        src={product.image}
                        width={150}
                        height={150}
                        className="rounded-md"
                    />
                </div>
                <div className="col-span-2 px-5 flex flex-col justify-between">
                    <div>
                        <p className="text-2xl font-medium">{product.title}</p>
                        <p className="line-clamp-2">{product.description}</p>
                    </div>
                    <p className="text-2xl font-medium">&#x20b9; {product.price}</p>
                </div>
            </div>
            <div className="flex flex-row mt-2 gap-2">
                {pathname === "/cart" && <RemoveButton onClick={() => setCartItems(prev => prev.filter(item => item.id !== product.id)
                )} />}
                {pathname === "/" && <AddButton onClick={onAdd} />}
            </div>
        </div>
    )
}