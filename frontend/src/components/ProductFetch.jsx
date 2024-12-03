
import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import Pagination from "./Pagination";
import AddProduct from "./AddProduct";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const ProductFetch = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const PageSize = 4;
  const [isEditing, setIsEditing] = useState(null);
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    productname: "",
    description: "",
    price: "",
    gender: "",
    category: "",
  });
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
        alert("Please select a file.");
        return;
    }

    const data = new FormData();
    data.append("image", file);
    Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
    });

    try {
        const response = await fetch("http://localhost:1234/addProduct", {
            method: "POST",
            body: data,
        });


        if (response.ok) {
            alert("Product added successfully");
fetchProducts()
           
            
          
            setOpen(false);  
        } else {
            alert("Failed to upload");
        }
    } catch (error) {
        console.error(error);
        alert("An error occurred while uploading");
    }
};

const handleInputChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
};
  const currentTableData = useMemo(() => 
    {
    const firstPageIndex = (currentPage - 1) * PageSize;
    console.log("this is firstpage index",firstPageIndex);
    
    const lastPageIndex = firstPageIndex + PageSize;
    console.log("this is last page index",lastPageIndex);
    

    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, products]);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (productId) => {
    console.log('Saving data:', formData);
    axios.post(`http://localhost:1234/editproduct/${productId}`, formData)
      .then((response) => {
        console.log('Product updated:', response.data);
        
        setIsEditing(null);
        fetchProducts()
      })
      .catch((error) => console.error('Error saving product:', error));
  };

  const handleEdit = (product) => {
    setFormData({
      productname: product.productname,
      description: product.description,
      price: product.price,
      gender: product.gender,
      category: product.category,
    });
    console.log(formData);
    const data=formData
    
console.log(data);

    
try{
    axios.post(`http://localhost:1234/editproduct/${product.productId}`,data)
    setIsEditing(product.productId);
    fetchProducts()
}
catch(error){
  console.log(error);
  alert("error while updating")
  
}

  };

  const handleCancel = () => {
    setIsEditing(null);
  };

  const handleDelete = (productId) => {
    axios.delete(`http://localhost:1234/deleteproduct/${productId}`)
      .then((response) => {
        console.log('Product deleted:', response.data);
        setProducts(products.filter((product) => product.productId !== productId));
        fetchProducts()
      })
      .catch((error) => console.error('Error deleting product:', error));
  };
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:1234/fetchproduct");
      if (response.status === 200) {
        setProducts(response.data.data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      alert("Error fetching products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
   

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
  <div className="mt-[70px]" id="modal-btn">
            <button
                type="button"
                className="px-8 py-4 btn text-zinc-50 p-1 border-black bg-cyan-500 border-[2px] rounded-1xl  font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg fixed"
                onClick={() => setOpen(true)} 
            >
                Add Product
            </button></div>
    <div className="pt-16">
      <table className="border-collapse h-[500px] w-[1200px] border border-green-800 table-auto">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {/* {console.log(currentTableData)} */}
    
          {currentTableData?.map((product) => (
            <tr key={product.productId}>
              <td className="px-6 py-4 whitespace-nowrap">{product.productId}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {isEditing === product.productId ? (
                  <input
                    type="text"
                    name="productname"
                    value={formData.productname}
                    onChange={handleChange}
                    className="border p-1"
                  />
                ) : (
                  product.productname
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {isEditing === product.productId ? (
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="border p-1"
                  />
                ) : (
                  product.description
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {isEditing === product.productId ? (
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="border p-1"
                  />
                ) : (
                  product.price
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {isEditing === product.productId ? (
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="border p-1"
                  />
                ) : (
                  product.category
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={product.imageUrl}
                  alt="not found"
                  style={{ width: "50px", height: "80px", objectFit: "cover" }}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {isEditing === product.productId ? (
                  <>
                    <button onClick={() => handleSave(product.productId)} className="text-blue-600 hover:text-blue-900">Save</button>
                    <button onClick={handleCancel} className="ml-2 text-red-600 hover:text-red-900">Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(product)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                    <button onClick={() => handleDelete(product.productId)} className="ml-2 text-red-600 hover:text-red-900">Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Popup open={open} onClose={() => setOpen(false)} closeOnDocumentClick>
                <div className="modal-container h-[400px] relative left-[200px] w-[320px]">
                    <div className="container modal  ">
                        <h2 className="text-extrabold text-2xl">Add New Product</h2>
                  <label htmlFor="productname">ProductName</label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            name="productname"
                            onChange={handleInputChange}
                            value={formData.productname}
                            id="productname"
                            className="border-solid border-slate-800	 border-solid border-2 rounded shadow hover:shadow-lg relative left-[32px]"

                        />
                        <br/>
                      
                                          <label htmlFor="description" className="relative bottom-[15px]">Description</label>

                        <textarea
                            placeholder="Description"
                            name="description"
                            onChange={handleInputChange}
                            value={formData.description}
                            className="border-solid border-slate-800	 border-solid border-2 rounded shadow hover:shadow-lg relative left-[50px] mt-[10px]"
                        ></textarea><br />
                    
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            placeholder="Price"
                            name="price"
                            onChange={handleInputChange}
                            value={formData.price}
                            className="border-solid border-slate-800	 border-solid border-2 rounded shadow hover:shadow-lg relative left-[95px] mt-[10px]"
                        /><br/>
                        <label htmlFor="gender">Gender</label>
                        <input
                            type="text"
                            placeholder="Gender"
                            name="gender"
                            onChange={handleInputChange}
                            value={formData.gender}
        className="border-solid border-slate-800	 border-solid border-2 rounded shadow hover:shadow-lg relative left-[80px] mt-[10px]"
/><br/>
<label htmlFor="category">Category:</label>
                        <input
                            type="text"
                            placeholder="Category"
                            name="category"
                            onChange={handleInputChange}
                            value={formData.category}
                            className="border-solid border-slate-800	 border-solid border-2 rounded shadow hover:shadow-lg relative left-[65px] mt-[10px]"
                        /><br/>
                        <label htmlFor="file" className="relative top-7">Image</label>
                        <input
                            type="file"
                            onChange={(event) => {
                                setFile(event.target.files[0]);
                            }}
                        name="file"
                        className="relative left-[90px] "
                        />
                        <br />
                        <button
                            type="button"
                            className="px-8 py-4 btn text-zinc-50 p-1 border-black bg-cyan-500 border-[2px] rounded-1xl  font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg mt-3 ml-[80px]"
                            onClick={handleUpload}
                        >
                            Upload
                        </button>
                    </div>
                </div>
            </Popup>

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={products.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div></>
  );
};

export default ProductFetch;
