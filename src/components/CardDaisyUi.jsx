import { useContext, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CardContext";

// eslint-disable-next-line react/prop-types
function CardDaisyUi({ product, title, description, img, price, rate, id }) {
    // ✅ تفكيك القيم بشكل صحيح من `CartContext`
    const { Cart, addToCart } = useContext(CartContext);

    // ✅ تحديث `handleAddToCart` ليستخدم `addToCart` من السياق
    const handleAddToCart = (product) => {
        addToCart(product);
    };
    console.log(Cart)
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="flex justify-center">
            <div data-aos="flip-left" className="card card-compact bg-base-100 max-w-72 shadow-xl">
                <figure className="w-72 h-[270px]">
                    <img className="w-full" src={img} alt="Product" loading="lazy" />
                </figure>
                <div className="flex flex-col p-3 gap-3">
                    <h2 className="line-clamp-1 card-title">{title}</h2>
                    <p className="line-clamp-2">{description}</p>
                    <div className="flex items-center justify-start gap-1">
                        <p className="font-bold">{rate}</p>
                        <FaStar className="text-yellow-300" />
                    </div>
                    <div className="flex items-center justify-between text-xl">
                        <p className="flex-grow-0 font-bold">{price} $</p>
                        {/* ✅ إصلاح `onClick` بإضافة `() =>` */}
                        <RiShoppingCart2Fill onClick={() => handleAddToCart(product)} />
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/product/${id}`}>
                            <button className="btn btn-primary">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDaisyUi;
