import React, { useEffect, useState } from 'react'
import { IAdminProductList } from '../../model/IAdminProductList'
import { Icon } from "@iconify/react";

function AdminPageProductTable(props: { productList: IAdminProductList[] }) {
    const list = props.productList;
    const [productList, setProductList] = useState<IAdminProductList[]>([]);

    useEffect(() => {
        fetch("http://localhost:9090/product/get-all")
            .then(response => response.json())
            .then(res => {
                console.log(res); // Konsolda veriyi kontrol et
                setProductList(res.data || res); // Eğer res.data yoksa, direkt res'i kullan
            })
            .catch(error => console.error("Veri çekme hatası:", error));
    }, []);
    
    return (
        <div>
            <table className="table table-hover table-bordered table-striped">
                <thead className="thead-dark ">
                    <h2 className="text-left">Product List Table</h2>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((product, index) => {
                            return (

                                <tr>
                                    <td>
                                        <div className="form-check ms-1">
                                            <input type="checkbox" className="form-check-input" id="customCheck2" />
                                            <label className="form-check-label" >&nbsp;</label>
                                        </div>
                                  
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                                                <img src={product.thumbnailUrl} alt="" className="avatar-md" />
                                            </div>
                                            <div>
                                                <a href="#!" className="text-dark fw-medium fs-15">{product.name}</a>
                                                <p className="text-muted mb-0 mt-1 fs-13"><span>Size : </span>{product.sizes} </p>
                                            </div>
                                        </div>

                                    </td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.categoryName}</td>
                                    <td className="w-24">
                                        <a href="#" className="btn btn-sm btn-success" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                                            <span className="fa fa-pencil"></span>
                                        </a>
                                        <a href="#" className="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                                            <span className="fa fa-trash"></span>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="d-flex gap-2">
                                            <a href="#!" className="btn btn-light btn-sm"><Icon icon="solar:eye-broken" className="align-middle fs-18" /> </a>
                                            <a href="#!" className="btn btn-soft-primary btn-sm"><Icon icon="solar:pen-2-broken" className="align-middle fs-18" /> </a>
                                            <a href="#!" className="btn btn-soft-danger btn-sm"><Icon icon="solar:trash-bin-minimalistic-2-broken" className="align-middle fs-18" /></a>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdminPageProductTable