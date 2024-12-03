import React, { useEffect, useState,useMemo } from 'react'
import axios from 'axios'
import AdminSidebar from '../pages/AdminSidebar'
import Pagination from './Pagination'
import email from '../assets/images/email.svg'
import { func } from 'prop-types'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useDispatch } from 'react-redux'
import { getUserLength } from '../app/reducers/AdminDataSlice'
export default function User() {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [search,setSearch]=useState("")
    const [filterData,setFilteredData]=useState([])
    const [open, setOpen] = useState(false);
 
    const dispatch=useDispatch()

    const PageSize = 10;
    const currentTableData = useMemo(() => 
      {
      const firstPageIndex = (currentPage - 1) * PageSize;
      console.log("this is firstpage index",firstPageIndex);
      
      const lastPageIndex = firstPageIndex + PageSize;
      console.log("this is last page index",lastPageIndex);
      
  
      return filterData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filterData]);
  
    useEffect(()=>{

    getAlluser()
 
  },[])

    function getAlluser(){
    
        axios.get("http://localhost:1234/auth/getalluser")
            .then(response => {
                setData(response.data)
                setFilteredData(response.data)
                console.log(response.data);
                const adminCount = response.data.filter(user => user.role === "admin").length;
                console.log("hi hu admincount",adminCount);
                
                const userCount = response.data.length - adminCount
              // console.log(userCount);
              console.log(userCount,"this is me user count");
              const totalCount=adminCount+userCount
              console.log(adminCount,"this is me user count");

              dispatch(getUserLength({totalCount,adminCount,userCount}))
              
                setLoading(false)
            })
            .catch(error => {

                console.log(error);
                
            })

          


       
    }
    

    function DoEmail(){
      let mailBody="hi this is mail body"
     let subject="hi this is mail subject"
      axios.post("http://localhost:1234/email",{mailBody,subject})
          .then(response => {
              setData(response.data)
              console.log(response.data);
              alert("hi")
              setLoading(false)
              setOpen(false)
          })
          .catch(error => {

              console.log(error);
              
          })

     
  }
    if(loading)
    {
    return  <div>loading...</div>
    }
const handleSearch=()=>{
if(search.trim()==""){
  setFilteredData(data)
}
else{
const filter=  data.filter((val)=>{
    return val.username.toLowerCase().includes(search.toLowerCase())
  })
  setFilteredData(filter)
}
setCurrentPage(1)
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
  <input type="text" name="" id="" className='bg-gray  rounded w-[250px] relative top-[0.2px] right-[95px] h-10 border-slate-800	 border-solid border-2 rounded ' placeholder='search by username' onChange={(e)=>setSearch(e.target.value)} />
  <button type="button" className='btn text-zinc-50 p-1 border-black bg-cyan-500 border-[2px] rounded-1xl h-9.5 relative right-[90px] mb-1' onClick={handleSearch}>search</button>
  <table className='border-collapse h-[500px] w-[1200px] border border-green-800 table-auto mt-[10px]'>
   
    <th>userId</th>
    <th>username</th>
    <th>email</th>
  <th>phone_number</th>
    <th>email</th>
    <th>orderCount</th>
    {
    

    currentTableData.map((detail,key)=>
        { return (
          <tr className="bg-gray-50 text-center " key={key}>
          <td > {detail.userId}</td>
          <td>{detail.username}</td>
         <td>{detail.email}</td>
         <td>{detail.phone_number}</td>
         <td>{detail.email}</td>
         <td>{detail.orderCount}</td>
          </tr>

        )})
      

      
    }
    </table>
    <Popup open={open} onClose={() => setOpen(false)} closeOnDocumentClick>
                <div className="modal-container h-[400px] relative left-[200px] w-[320px]">
                    <div className="container modal  ">
                        <h2 className="text-extrabold text-1xl">Subject</h2>
                  <input type='text' placeholder='subject' className='w-[400px] border-2 border-black'/>
                        <br />
                        <h2 className="text-extrabold text-1xl">Mail Body</h2>
                  <input type='text' placeholder='email body' className='h-[100px] w-[400px] border border-black'/>
                        <br />
                        <button
                            type="button"
                          className="btn text-zinc-50 p-1 border-black bg-cyan-500 border-[2px] rounded-1xl my-1"
                            onClick={DoEmail}
                        >
                            send
                        </button>
                    </div>
                </div>
            </Popup>
    <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
    
    </div>
   
    </>
  )
}
