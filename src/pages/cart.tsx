import ProductCard, { product } from "@/components/ProductCard";
import useCart from "@/hooks/useCart"

export default function Cart() {
    const { cartItems } = useCart();
    return (
        <main className="mt-20">
            <div className='px-5 md:grid grid-cols-3 gap-2'>
                {cartItems.map((product: product) => <ProductCard product={product} />)}
            </div>
        </main>
    )
}