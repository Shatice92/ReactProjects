import React from 'react'
import { Icon } from "@iconify/react";
import { IAdminProductList } from '../../model/IAdminProductList';
function AdminPanelProductTable(props: {productList?: IAdminProductList[]}) {
    const list = props.productList;
  return (
    <table className="table align-middle mb-0 table-hover table-centered">
    <thead className="bg-light-subtle">
          <tr>
                <th style={{width: '20px'}}>
                      <div className="form-check ms-1">
                            <input type="checkbox" className="form-check-input" id="customCheck1" />
                            <label className="form-check-label" ></label>
                      </div>
                </th>
                <th>Product Name & Size</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Action</th>
          </tr>
    </thead>
    <tbody>
        {
            list?.map(p=>{
                return   <tr>
                <td>
                      <div className="form-check ms-1">
                            <input type="checkbox" className="form-check-input" id="customCheck2" />
                            <label className="form-check-label" >&nbsp;</label>
                      </div>
                </td>
                <td>
                      <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                                  <img src={p.thumbnailUrl} alt="" className="avatar-md" />
                            </div>
                            <div>
                                  <a href="#!" className="text-dark fw-medium fs-15">{p.name}</a>
                                  <p className="text-muted mb-0 mt-1 fs-13"><span>Size : </span>{p.sizes} </p>
                            </div>
                      </div>

                </td>
                <td>$80.00</td>
                <td>
                      <p className="mb-1 text-muted"><span className="text-dark fw-medium">486 Item</span> Left</p>
                      <p className="mb-0 text-muted">155 Sold</p>
                </td>
                <td> Fashion</td>
                <td> <span className="badge p-1 bg-light text-dark fs-12 me-1"><i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i> 4.5</span> 55 Review</td>
                <td>
                      <div className="d-flex gap-2">
                            <a href="#!" className="btn btn-light btn-sm"><Icon icon="solar:eye-broken"  className="align-middle fs-18"/> </a>
                            <a href="#!" className="btn btn-soft-primary btn-sm"><Icon icon="solar:pen-2-broken"  className="align-middle fs-18"/> </a>
                            <a href="#!" className="btn btn-soft-danger btn-sm"><Icon icon="solar:trash-bin-minimalistic-2-broken"  className="align-middle fs-18"/></a>
                      </div>
                </td>
          </tr>

            })
        }
        

    </tbody>
    </table>
  )
}

export default AdminPanelProductTable