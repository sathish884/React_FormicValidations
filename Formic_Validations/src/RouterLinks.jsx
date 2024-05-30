import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import CreateBooks from './Books_Components/CreateBooks';
import CreateUsers from './User_Components/CreateUsers';

function RouterLinks() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/create-books' element={<CreateBooks />}></Route>
                <Route path='/create-users' element={<CreateUsers />}></Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default RouterLinks