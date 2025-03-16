import { FaAngleDoubleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ComCart from '../components/ComCart'
import { useContext } from 'react'
import { CartContext } from '../context/CardContext'

function Cart() {
    const { Cart , clear} = useContext(CartContext);
    
    return (
        <div className='mt-[120px] flex flex-col items-center mb-[40px]'>
            <div className=''>
                <Link to="/" className='absolute left-2 top-[125px] text-2xl'><FaAngleDoubleLeft /></Link>
                <h1 className='md:text-4xl mb-6 text-2xl font-bold font-serif'><span className='text-yellow-700'>Cart</span></h1>
            </div>   
            <div className='flex flex-wrap justify-center items-center gap-10'>
                <div className='px-4'>
                    <div>
                        <p className='py-2 w-fit px-6 bg-gray-300 font-bold'>All Items: {Cart.length}</p>
                    </div>
                    <div>
                        <p onClick={()=> clear()} className='py-2 mt-5 w-fit px-6 bg-gray-300 font-bold'>Clear Cart</p>
                    </div>
                    <div>
                        {Cart.map((item, index) => (
                            <ComCart 
                                key={index} 
                                title={item.title} 
                                id={item.id} 
                                price={item.price}  // ✅ تصحيح هنا
                                quantite={item.quantite} 
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <div className='p-5 shadow-lg flex flex-col gap-2 cursor-pointer items-center'>
                        <p>Total Price: {Cart.reduce((acc, item) => acc + item.price * item.quantite, 0)}$</p>
                        <div className='py-2 px-4 bg-gray-400 font-bold btn'>Check Now</div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Cart;
