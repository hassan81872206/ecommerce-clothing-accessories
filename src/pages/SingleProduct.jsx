import axios from 'axios';
import { useEffect, useState } from 'react'
import { FaAngleDoubleLeft, FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom'

function SingleProduct() {
  const [product , setProduct] = useState([]);
  const [loading , setLoading] = useState(false);
  const id = useParams().id;
  useEffect(() => {
    const getProduct = async() => {
      setLoading(true);
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
      setLoading(false)
    }
    getProduct() ;
  } , [id] );
  // console.log(product) ;
  return (
    <div className='mt-[120px] mb-6 flex flex-col items-center'>
      <div>
        <Link to = "/products" className='absolute left-2 text-2xl'><FaAngleDoubleLeft /></Link>
        <h1 className='md:text-4xl mb-6 text-2xl font-bold font-serif'><span className='text-yellow-700'>Details</span> </h1>
      </div>
        {loading? <div><span className="loading loading-dots loading-lg"></span></div> : <div className='flex justify-center flex-wrap mx-8 items-center gap-9'>
          <div className=' w-[200px]'>
            <img src={product?.image} alt="" />
          </div>
          <div className='max-w-[400px] flex flex-col gap-3'>
            <h1 className='font-bold font-serif text-2xl'>{product?.title}</h1>
            <p className='font-light tracking-wide'>{product?.description}</p>
            <div className='flex justify-between font-bold border border-gray-400 p-3'>
              <div className='flex items-center gap-1'>
                <FaStar color='orange' />
                <p>{product?.rating?.rate}</p>
              </div>
              <div>
                <p className='font-extrabold text-yellow-400'>Price : {product?.price}</p>
              </div>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default SingleProduct