import React from 'react'
import AdminSidebar from '../pages/AdminSidebar'
import { PieChart, BarChart, Pie, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';
import { useSelector } from 'react-redux';

export default function DashboardA() {
  const pieChartData=useSelector((state)=>state.admin.length)
const BarChartData=useSelector((state)=>state.order.order)
console.log(BarChartData);
const newBarChartData = [
  { name: 'Delivered', value: BarChartData.delivered },
  { name: 'Out for Delivery', value: BarChartData.outfordelivery },
  { name: 'Shipped', value: BarChartData.shipped },
  { name: 'Ordered', value: BarChartData.ordred },
  { name: 'Cancelled', value: BarChartData.cancelled }
];
const d1=['Delivered','Out for Delivery','Shipped','Ordered','Cancelled']

  console.log("hi there i am piechartdata",newBarChartData);
  const data1 = [
    { name: 'Total', value: pieChartData.totalCount,fill:"#6439FF" },
    { name: 'Admin', value: pieChartData.adminCount,fill:"#4F75FF"},
    { name: 'User', value: pieChartData.userCount,fill:"#00CCDD" }
  ];  return (
    <>   
     <AdminSidebar/>
    <div className='flex'>
  
      <div className="ml-[250px] mt-[100px] p-[20px] flex-1">
      <h1 className='text-3xl'>  User Distribution Chart</h1>
<PieChart width={400} height={400}>
                            <Pie 
                                data={data1} 
                                dataKey="value" 
                                nameKey="name" 
                                cx="50%" 
                                cy="50%" 
                                outerRadius={150}
                                fill="#8884d8"
                            >
                   {data1.map((entry, index) => (
  <div key={`entry-${index}`}>  
    {entry}   
    {console.log(entry.fill)}
    
    <Cell key={`cell-${index}`} fill={entry.fill} />
    
  </div>
))}
                            </Pie>
                            <Tooltip formatter={(value, name) => [`${value}`, `${name}`]} />
                        </PieChart>
                        <div>
                          {
                            data1.map((entry,index)=>(
                              <div key={`entry-${index}`} className='relative border-2 w-[70px] bottom-[400px] '>
                                <p className='h-1 p-1 m-1 relative bottom-[4px]'>
                                  {entry.name}
                                </p>
                                <p className='h-4 w-1 relative bottom-[8px] border' style={{backgroundColor:entry.fill}} >

                                </p>
                              </div>
                            ))
                          }
                        </div>


 
  </div>
  

  <div className='pt-[100px] pr-[120px]'>
  <BarChart width={400} height={400} data={newBarChartData} barSize={40} >
                            <XAxis dataKey="name"/>
                            <YAxis allowDecimals={false}/>
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#6A1B9A" />
                        </BarChart>
  </div>
    </div></>
  )
}
