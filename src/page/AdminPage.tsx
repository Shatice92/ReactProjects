import React from 'react'
import AdminPageSideBar from '../component/organism/AdminPageSideBar'
import AdminPageProductTable from '../component/molecules/AdminPageProductTable'
import AdminPageDashBoard from '../component/organism/AdminPageDashBoard'

function Adminpage() {
    return (
        <div>
            <header>

            </header>

            <div className="container-fluid">
                <div className="row">
                   <AdminPageSideBar />

                    <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
                        <h1>Dashboard</h1>

                        <AdminPageDashBoard />

                        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                       
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="btn-group pull-right mb-2" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary mr-2">Print</button>
                            <button type="button" className="btn btn-success mr-2">Export</button>
                        </div>
                        
                        <div className="table-responsive ">
                            <AdminPageProductTable productList={[]} />
                        </div>


                    </main>
                </div>
            </div>
        </div>
    )
}

export default Adminpage