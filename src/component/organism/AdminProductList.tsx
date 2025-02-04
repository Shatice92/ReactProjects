import React, { useEffect, useState } from 'react'
import AdminPanelProductTable from '../molecules/AdminPanelProductTable';
function AdminProductList() {
      const [productList, setProductList] = useState();
      //dikkat useeffect -constructor 
      useEffect(() => {
            fetch("http://localhost:9090/product/get-all").then(data => data.json()).then(res => setProductList(res.data));
      }, []);

      return (
            <div className="col-xl-12">
                  <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center gap-1">
                              <h4 className="card-title flex-grow-1">All Product List</h4>

                              <a href="product-add.html" className="btn btn-sm btn-primary">
                                    Add Product
                              </a>

                              <div className="dropdown">
                                    <a href="#" className="dropdown-toggle btn btn-sm btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false">
                                          This Month
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">

                                          <a href="#!" className="dropdown-item">Download</a>

                                          <a href="#!" className="dropdown-item">Export</a>

                                          <a href="#!" className="dropdown-item">Import</a>
                                    </div>
                              </div>
                        </div>
                        <div>
                              <div className="table-responsive">
                                    <AdminPanelProductTable productList={productList} />
                              </div>

                        </div>
                        <div className="card-footer border-top">
                              <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-end mb-0">
                                          <li className="page-item"><a className="page-link" href="javascript:void(0);">Previous</a></li>
                                          <li className="page-item active"><a className="page-link" href="javascript:void(0);">1</a></li>
                                          <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
                                          <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
                                          <li className="page-item"><a className="page-link" href="javascript:void(0);">Next</a></li>
                                    </ul>
                              </nav>
                        </div>
                  </div>
            </div>
      )
}

export default AdminProductList