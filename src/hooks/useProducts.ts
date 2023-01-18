import { useQuery } from "react-query";

const fetchProducts = async () => {
    const limit = 5;
    const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
    return res.json();
}

const useProducts = () => useQuery(['products'],fetchProducts);

export default useProducts;