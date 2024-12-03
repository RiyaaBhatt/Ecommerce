  import React, { useEffect, useState,useMemo } from 'react'
  import axios from 'axios'
  import AdminSidebar from '../pages/AdminSidebar'
  import Pagination from '../components/Pagination'
  import email from '../assets/images/email.svg'
  import { func } from 'prop-types'
  import Popup from 'reactjs-popup';
  import 'reactjs-popup/dist/index.css';
import { useAlert } from 'react-alert'
import { useDispatch } from 'react-redux'
import { getOrderCount } from '../app/reducers/OrderDataSlice'
  export default function Orders() {
      const [data,setData]=useState([])
      const [loading,setLoading]=useState(true)
      const [currentPage, setCurrentPage] = useState(1);
      const [search,setSearch]=useState("")
      const [filterData,setFilteredData]=useState([])
      const [open, setOpen] = useState(false);
      const [checked,setChecked]=useState("")
      const [modal,setmodal]=useState(false)
      const [ProductDetail,setProductDetail]=useState({})
      const [userDetail,setUserDetail]=useState()
      const dispatch=useDispatch()
      
      const PageSize = 10;
      const alert=useAlert()
      const currentTableData = useMemo(() => 
        {
        const firstPageIndex = (currentPage - 1) * PageSize;
        console.log("this is firstpage index",firstPageIndex);
        
        const lastPageIndex = firstPageIndex + PageSize;
        console.log("this is last page index",lastPageIndex);
        
    
        return filterData.slice(firstPageIndex, lastPageIndex);
      }, [currentPage, filterData]);
    
      useEffect(()=>{
      fetchorder()
    },[])
      function fetchorder(){
          axios.get("http://localhost:1234/fetchorder")
              .then(response => {
                  setData(response.data.data)
                  setFilteredData(response.data.data)
                  console.log(response.data.data);
                  const delivered = response.data.data.filter(user => user.status === "delivered").length;
                  const outfordelivery=response.data.data.filter(user => user.status === "out for delivery").length;
                  const shipped=response.data.data.filter(user => user.status === "shipped").length;
                  const ordered=response.data.data.filter(user => user.status === "ordered").length;
                  const cancelled=response.data.data.filter(user => user.status === "cancelled").length;
                  console.log("this is me hi fetch orders");
                  
                  
                  dispatch(getOrderCount({delivered:delivered,outfordelivery:outfordelivery,shipped:shipped,ordred:ordered,cancelled:cancelled}))

                  setLoading(false)
              })
              .catch(error => {

                  console.log(error);
                  
              })

        
      }
      const getUserDetail=async()=>{
        await axios.get("select * from users")
        

      }

    //   function DoEmail(){
    //     let mailBody="hi this is mail body"
    //    let subject="hi this is mail subject"
    //     axios.post("http://localhost:1234/email",{mailBody,subject})
    //         .then(response => {
    //             setData(response.data)
    //             console.log(response.data);
    //             alert("hi")
    //             setLoading(false)
    //             setOpen(false)
    //         })
    //         .catch(error => {

    //             console.log(error);
                
    //         })

      
    // }
  //     if(loading)
  //     {
  //     return  <div>loading...</div>
  //     }
  const handleSearch=()=>{
  if(search.trim()==""){
    console.log("rhis is if of handle search");
    
    setFilteredData(data)
  }
  else{
  const filter= data.filter((val)=>{
    console.log("this is else of filter");
    console.log(val);
    if(val.Name==null)
    {
console.log("hi this is if of  else");
    }
    else{
      return val.Name.toLowerCase().includes(search.toLowerCase())}
    })
    setFilteredData(filter)
  }
  setCurrentPage(1)
  }
  const openproductdetail=async(id)=>{
    console.log("hi this is product detail");
    try{
    const productData= await axios.get(`http://localhost:1234/fetchproduct/${id}`)
    console.log(productData.data.data[0]);
    setProductDetail(productData.data.data[0])
    // alert(productData.data.data[0])
    setmodal(true)
    }
    catch(err){
      console.log(err);
      
    }
    
    
  }
  const getStatusStyle = (status) => {
    switch (status) {
      case 'ordered':
        return { backgroundColor: '#ffaf20', color: 'black' }; // Light gray
      case 'shipped':
        return { backgroundColor: '#ffeb3b', color: 'black' }; // Yellow
      case 'out for delivery':
        return { backgroundColor: '#4caf50', color: 'white' }; // Green
      case 'cancelled':
        return { backgroundColor: '#f44336', color: 'white' }; // Red
      case 'delivered':
        return { backgroundColor: '#03a9f4', color: 'white' }; // Blue
      default:
        return {}; 
    }
  };

  const getAllUserDetail=async()=>{
    try{
    const [data]=axios.get("http://localhost:1234/auth/getalluser")
    console.log("this is me hi ",data.data.length);
    
    dispatch(getOrderCount(data.data.length))
    }
    catch(err){
      alert.show(err)
    }
  }

// function handleChange(detail,e){
//   console.log("hi this is me e.target.value of handlechange",e.target.value);
  
//   setChecked(e.target.value)

//   try{
//     console.log(detail.orderId);
    
//   axios.post(`http://localhost:1234/editorder/${detail.orderId}`,{stauts:e.target.value})
//   alert.show("success")
//   getStatusStyle(e.target.value)
// fetchorder()
// }
//   catch(err){
//     alert(err)
//   }
//   console.log("hi this is handle change");
//   console.log("this is value of argument");
  
//   console.log("value of select",checked);
  


// }
function handleChange(detail, e) {
  const newStatus = e.target.value; 
  console.log("New status selected:", newStatus);

  try {
    console.log("Updating order ID:", detail.orderId);
    
    axios.post(`http://localhost:1234/editorder/${detail.orderId}`, { status: newStatus })
      .then(() => {
        alert.show("Order status updated successfully");
        setFilteredData(prevData => 
          prevData.map(item => 
            item.orderId === detail.orderId ? { ...item, status: newStatus } : item
          )
        );
        console.log("hi this is me admin count");

        const adminCount = filterData.data.filter(user => user.status === "completed").length;
        // console.log("hi this is me admin count",adminCount);
        
        // dispatch(get)
      })
      .catch(err => {
        alert.show("Error updating order status");
        console.error(err);
      });
  } catch (err) {
    alert.show("An error occurred");
    console.error(err);
  }
}
function getUserById(id) {
  try{
  const data=axios.get("http://localhost:1234/auth/getUserById")
  console.log(data);
  }
  catch(err)
  {
    
    console.log(err);
    
  }

}

    return (
      <>
        {/* <AdminSidebar/> */}
      {/* {
          data.map((detail)=>{
  {detail}
          })

      } */}
  <AdminSidebar/>
      <div className='flex'>
    
    <div className="ml-[280px] p-[20px] flex-1 mt-[70px]">
  
    <button type="button" className='btn text-zinc-50 p-1 border-black bg-cyan-500 border-[2px] rounded-1xl  relative left-[1106px] mb-1 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg fixed'   onClick={() => setOpen(true)} >Email all<span className='h-1 inline'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)" className='h-4 m-1 inline'><g id="SVGRepo_bgCarrier" stroke-width="0" ></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" ></path> </g></svg></span></button>  
    <input type="text" name="" id="" className='bg-gray  rounded w-[250px] relative top-[0.2px] right-[95px] h-10 border-slate-800	 border-solid border-2 rounded ' placeholder='search by name' onChange={(e)=>setSearch(e.target.value)} />
   
    <button type="button" className='btn text-zinc-50 p-1 border-black bg-cyan-500 border-[2px] rounded-1xl h-9.5 relative right-[90px] mb-1' onClick={handleSearch}>search</button>
    (click on product id or user id to see the detail of respective)
    <table className='border-collapse h-[500px] w-[1200px] border border-green-800 table-auto mt-[10px]'>
      <th>OrderId</th>
      <th>UserId</th>
      <th>Name</th>
      <th>ProductId</th>
      <th>Order Date</th>
      <th>payment_method</th>
    <th>Delivery Date</th>

    <th>phone_number</th>
    <th>Status</th>
    
      {
      

      currentTableData.map((detail)=>
          { return (
            <tr className="bg-gray-50 text-center ">
              <td>{detail.orderId}</td>
   
            <td > {detail.userId}</td>
            <td>{detail.Name}</td>
            <td className="btn"><button  onClick={()=>openproductdetail(detail.productId)} className='btn border-t-pink-100'>{detail.productId}</button></td>
          <td>{detail.order_date.split("T")[0]}</td>
          <td>{detail.payment_method}</td>
          <td>{detail.delivery_date.split("T")[0]}</td>

          <td>{detail.phone_number}</td>
          
          <td>

            <select name="" id="" style={getStatusStyle(detail.status)} onChange={(e)=>handleChange(detail,e)} value={detail.status}>
               <option value="ordered" style={{"backgroundColor":"blue"}} >ordered</option>
            <option value="shipped">shipped</option>
            <option value="out for delivery">out for delivery</option>
            <option value="delivered" >delivered</option>
            </select>
          </td>
            </tr>

          )})
        

        
      }
      </table>
      <Popup open={modal} onClose={() => setmodal(false)} closeOnDocumentClick>
                  <div className="modal-container h-[400px] relative left-[200px] w-[320px]">
                      <div className="container modal  ">
                        
                       <h1 className='text-3xl font-extrabold'>ProductDetail</h1><hr /> 
                          <div className='pt-12 text-2xl'>
                          <h2>ProductId: {ProductDetail.productId}</h2><hr />
                          <h2>ProductName: {ProductDetail.productName}</h2><hr />
                          <h2>
                            ProductDescription: {ProductDetail.description}
                          </h2><hr />
                          <h2>
                            Price: {ProductDetail.price}
                          </h2><hr />
                          <h2>
                            Category :{ProductDetail.category}
                           
                          </h2><hr />
                          <h2>
                            ProductImage
                           <span><img src={ProductDetail.imageUrl} alt="not found" className='h-12 inline' /></span> 
                            
                            </h2><hr /></div>
                      </div>
                  </div>
              </Popup>
              <Popup open={open} onClose={() => setOpen(false)} closeOnDocumentClick>
                  <div className="modal-container h-[400px] relative left-[200px] w-[320px]">
                      <div className="container modal  ">
                          <h2 className="text-extrabold text-1xl">Subject</h2>
                    <input type='text' placeholder='subject' className='w-[400px] border-2 border-black'/>
                          <br />
                          <h2 className="text-extrabold text-1xl">Mail Body</h2>
                    <input type='text' placeholder='email body' className='h-[100px] w-[400px] border border-black'/>
                          <br />
                          {/* <button
                              type="button"
                            className="btn text-zinc-50 p-1 border-black bg-cyan-500 border-[2px] rounded-1xl my-1"
                              onClick={DoEmail}
                          >
                              send
                          </button> */}
                      </div>
                  </div>
              </Popup>
      <Pagination
          className="pagination-bar"
          currentPage={currentPage}detail
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      
      </div>
    
      </>
    )
  }
