import React from 'react';
import HeaderAdmin from "@/app/admin/HeaderAdmin";
import CreatePage from "@/app/admin/[route]/create/CreatePage";

const Page = () => {
    return (
        <div className="h-screen">
            <HeaderAdmin />
            <CreatePage/>
        </div>
    );
};

export default Page;