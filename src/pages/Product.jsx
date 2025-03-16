import axios from "axios"
import { useEffect, useState } from "react"
import CardDaisyUi from "../components/CardDaisyUi";
// import { CartContext } from "../context/CardContext";

function Product() {
  const [Categories , setCategories] = useState([]);
  const [Products , setProducts] = useState([]) ;
  const [FilterProducts , setFilterProducts] = useState([]) ;
  const [Loading , setLoading] = useState(false) ;
  // const [Cart , setCart] = useContext(CartContext);
  
  useEffect(()=>{
    const getAllCategorie = async() => {
      const res = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(res.data) ;
    }
    getAllCategorie();
  } , [])
  useEffect(() => {
    setLoading(true);
    const getAllProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products") ;
      setProducts(res.data) ;
      setFilterProducts(res.data) ;
      setLoading(false);
    }
    getAllProducts() ;
  } , [])
  const getSearch = (e) => {
    if(e){
      const Filtrage = Products.filter((product) => product.title.toLowerCase().includes(e));
      setFilterProducts(Filtrage) ;
    }else{
      setFilterProducts(Products) ;
    }
  }
  const getFilter = (cat) => {
    if(cat && cat != "All"){
      const Filtrage = Products.filter((product) => product.category == cat) ;
      setFilterProducts(Filtrage) ;
    }else{
      setFilterProducts(Products) ;
    }
  }  
  return (
    <div className='flex flex-col items-center gap-5 mt-[80px] mx-auto mb-9'>
      <h1 className='md:text-4xl my-5 text-2xl font-bold font-serif'><span className='text-yellow-700'>Our </span>Products</h1>
      <div className="flex w-[100%] justify-center gap-3">
        <label className="input w-[60%] md:w-[50%] input-bordered flex items-center gap-2 mb-9">
          <input onChange={(e) => getSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
        <div className="dropdown dropdown-bottom mt-[-5px]">
          <div tabIndex={0} role="button" className="btn m-1">Click</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={()=> getFilter("All")}><a> All </a></li>
            {Categories.map((categorie , index) => (
              <li onClick={()=>getFilter(categorie)} key={index}><a>{categorie}</a></li>
            ))}
          </ul>
        </div>
      </div>
      {Loading? <span className="loading loading-spinner loading-lg"></span>
       : <div className="flex justify-center items-center gap-10 flex-wrap mx-8">
       {FilterProducts.map((product , index ) => (
         <CardDaisyUi product = {product} key={index} id = {product.id} title = {product.title} description= {product.description} img= {product.image} price = {product.price} rate= {product.rating.rate} ></CardDaisyUi>
       ))}
     </div>}
    </div>
  )
}

export default Product
