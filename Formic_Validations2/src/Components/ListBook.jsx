import { Rate, Breadcrumb, Space, message, Popconfirm } from 'antd'
import React from 'react';
import './ListBook.css';
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
};
const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
};

function ListBook() {
    return (
        <>
            <div className="container p-5">

                <Breadcrumb className='mb-3' style={{ fontSize: "20px" }}>
                    <Breadcrumb.Item>
                        <Link to="/">Dashboard</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>List of Books</Breadcrumb.Item>
                </Breadcrumb>

                <div className="row">
                    <div className="col-4">
                        <div className="card book-card">
                            <img className='card-img-top' src="https://m.media-amazon.com/images/I/51uFGDj6SQL.jpg" height={200} alt="" />
                            <div className="card-body">
                                <h5 className='card-titler'>Piction Book</h5>
                                <p>Lorem ipsum dolor earum at commodi doloribus magnam cupiditate?</p>
                                <div className='d-flex justify-content-between'>
                                    <Rate allowHalf defaultValue={4} />
                                    <div >
                                        <Space>
                                            <Link to='/edit-book' style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                                                <EditOutlined style={{ fontSize: "20px" }} />&nbsp;
                                            </Link>
                                            <Popconfirm
                                                title="Delete the task"
                                                description="Are you sure to delete this task?"
                                                onConfirm={confirm}
                                                onCancel={cancel}
                                                okText="Yes"
                                                cancelText="No"
                                                className="custom-popconfirm"
                                            >
                                                <DeleteOutlined style={{ fontSize: "20px" }} />
                                            </Popconfirm>

                                        </Space>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card book-card">
                            <img className='card-img-top' src="https://m.media-amazon.com/images/I/910jPjzs9jL._AC_UF1000,1000_QL80_.jpg" height={200} alt="" />
                            <div className="card-body">
                                <h5 className='card-titler'>Piction Book</h5>
                                <p>Lorem ipsum dolor earum at commodi doloribus magnam cupiditate?</p>
                                <div className='d-flex justify-content-between'>
                                    <Rate allowHalf defaultValue={3} />
                                    <div >
                                        <Space>
                                            <Link to='/edit-book' style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                                                <EditOutlined style={{ fontSize: "20px" }} />&nbsp;
                                            </Link>
                                            <DeleteOutlined style={{ fontSize: "20px" }} />
                                        </Space>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card book-card">
                            <img className='card-img-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEjU_BQdN18zz0Kk7HMtZUNtZMD0CE7QChw&s" height={200} alt="" />
                            <div className="card-body">
                                <h5 className='card-titler'>Piction Book</h5>
                                <p>Lorem ipsum dolor earum at commodi doloribus magnam cupiditate?</p>
                                <div className='d-flex justify-content-between'>
                                    <Rate allowHalf defaultValue={4.5} />
                                    <div >
                                        <Space>
                                            <Link to='/edit-book' style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                                                <EditOutlined style={{ fontSize: "20px" }} />&nbsp;
                                            </Link>
                                            <DeleteOutlined style={{ fontSize: "20px" }} />
                                        </Space>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ListBook