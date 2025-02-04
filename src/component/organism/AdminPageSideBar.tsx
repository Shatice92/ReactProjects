import React from 'react'

function AdminPageSideBar() {
    return (

        <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-warning sidebar">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-dark list-group-item-action active py-3">
                    <span className="fa fa-fw fa-dashboard"></span> ADMIN PANEL
                </a>

                <a href="#" className="list-group-item list-group-item-dark list-group-item-action"><span className="fa fa-fw fa-dashboard"></span> Products <span className="badge badge-dark badge-pill pull-right"></span></a>
                <a href="#" className="list-group-item list-group-item-dark list-group-item-action"><span className="fa fa-fw fa-dashboard"></span> Categories <span className="badge badge-dark badge-pill pull-right"></span></a>
                <a href="#" className="list-group-item list-group-item-dark list-group-item-action"><span className="fa fa-fw fa-dashboard"></span> Users <span className="badge badge-dark badge-pill pull-right"></span></a>
                <a href="#" className="list-group-item list-group-item-dark list-group-item-action"><span className="fa fa-fw fa-dashboard"></span> Orders <span className="badge badge-dark badge-pill pull-right"></span></a>
                <a href="http://localhost:3000/add-product" className="list-group-item list-group-item-dark list-group-item-action"><span className="fa fa-fw fa-dashboard"></span> Add Product <span className="badge badge-dark badge-pill pull-right"></span></a>
            </div>

        </nav>
    )
}

export default AdminPageSideBar