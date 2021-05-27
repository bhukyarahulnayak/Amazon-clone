import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems,selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter"
import { useSession } from "next-auth/client";

function Checkout() {
    const items = useSelector(selectItems);
    const [session] = useSession();
    const total = useSelector(selectTotal);
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="lg:flex  max-w-screen-2xl bg-gray-200  p-2 mx-auto">
                <div className="flex-grow p-5 space-y-5 mx-2 my-1 shadow-sm bg-white">

                    <p className="text-2xl font-bold ">
                        {items.length === 0 ? 'Your Amazon Basket is empty.' : 'Shopping Basket'}
                    </p>

                    {items.map((item, i) => (
                        <CheckoutProduct
                            key={i}
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            description={item.description}
                            image={item.image}
                            hasPrime={item.hasPrime}
                        />
                    ))}
                </div>
                {/* Right */}
                <div className="flex flex-col bg-white p-10 mx-2 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap ">Subtotal ({items.length} items):{" "}
                            <span className="font-bold">
                                    <Currency quantity={total} currency="INR"/>
                                </span>
                            </h2>
                            <button disabled={!session} className={`button mt-2 ${!session && " from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                                {!session ? "Sign in to checkout" : "proceed to checkout"}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}
export default Checkout;
