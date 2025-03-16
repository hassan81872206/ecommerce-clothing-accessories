import { useContext } from 'react'
import logo from '../assets/logo2.jpg'
import { CartContext } from '../context/CardContext'

// eslint-disable-next-line react/prop-types
function ComCart({ id, title, price, quantite }) {
  const { increment, decrement } = useContext(CartContext);

  return (
    <div className='flex my-2 justify-center items-center border border-gray-300'>
      <div className='max-w-[150px] min-w-[150px]'>
        <img src={logo} alt="" />
      </div>
      <div className='flex flex-col max-w-[900px] gap-3 p-4'>
        <p>{title}</p>
        <p className='font-bold text-red-500'>{price} $</p>
        <p>
          <span onClick={() => decrement(id)} className='inline-block px-2 bg-gray-400 cursor-pointer'>-</span>
          <span className='inline-block mx-2'>{quantite}</span>
          <span onClick={() => increment(id)} className='inline-block px-2 bg-gray-400 cursor-pointer'>+</span>
        </p>
      </div>
    </div>
  )
}

export default ComCart;
