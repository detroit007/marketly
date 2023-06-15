"use client"

import { NextStudio } from 'next-sanity/studio';
import configClient from "@/sanity.config";

const AdminPage = () =>{
    return(
        <NextStudio config={configClient} />
    )
}

export default AdminPage;