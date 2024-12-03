import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ProductFetch from '../components/ProductFetch'

export default function AddProduct() {
    const [file, setFile] = useState(null);
    const [open, setOpen] = useState(false);
    const [refresh,setRefresh]=useState(false)

    const [formData, setFormData] = useState({
        productname: "",
        description: "",
        price: "",
        gender: "",
        category: "",
    });

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
                setRefresh(true)
                console.log(refresh);
                
              
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
    useEffect(()=>{},[refresh])
  

    return (
        <div className="mt-[70px]" id="modal-btn">
            <button
                type="button"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg fixed"
                onClick={() => setOpen(true)} 
            >
                Add Product
            </button>

          
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
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg mt-3 ml-[80px]"
                            onClick={handleUpload}
                        >
                            Upload
                        </button>
                    </div>
                </div>
            </Popup>
        </div>
    );
}
