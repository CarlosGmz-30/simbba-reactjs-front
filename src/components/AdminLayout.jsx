import React from 'react'
import { Avatar, Label, Button } from 'flowbite-react';
import { Sidebar } from 'flowbite-react';
import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiOutlineMinusSm,
    HiOutlinePlusSm,
    HiShoppingBag,
    HiTable,
    HiUser,
} from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import logo from '../images/logoSIMBBA-white.png';
import '../assets/styles/AdminLayout.css'


const AdminLayout = () => {
    return (
        <>
            <main>
                <Sidebar aria-label="Sidebar with multi-level dropdown example" className='sidebar bg-blue-600'>

                    <header className='logo'>
                        <img src={logo} alt="Logo" className="w-24 h-auto" width='100px' />
                    </header>

                    <div className='profile'>
                        <Avatar
                            src="https://avatars.dicebear.com/api/avataaars/1.svg"
                            label="Profile"
                            rounded
                            size='xl'
                        />

                        <div className='profile-info'>
                            <div>
                                <Label className="info" htmlFor="email1" value="Administrador" />
                            </div>
                            <div>
                                <Label className="info" htmlFor="email1" value="admin@utez.edu.mx" />
                            </div>
                        </div>


                    </div>

                    <Sidebar.Items className='side-bar'>
                        <Sidebar.ItemGroup >
                            <Sidebar.Item href="#" className='side-bar item'>
                                Ver Usuarios
                            </Sidebar.Item>
                            <Sidebar.Item href="#" className='side-bar item'>
                                Ver Botes
                            </Sidebar.Item>
                            <Sidebar.Item href="#" className='side-bar item'>
                                Histórico
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>

                    <div  className='btn-logout'>
                        <Button
                            type='submit'
                            className='button-logout'
                            id='btn-logout'
                        >
                            CERRAR SESIÓN
                        </Button>
                    </div>
                </Sidebar>

                <section>
                    hola
                </section>
            </main>
        </>
    )
}

export default AdminLayout