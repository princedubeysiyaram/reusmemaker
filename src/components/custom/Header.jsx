import React from 'react'
import { Button } from '../ui/button'
import { Link, Outlet } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'


function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-3 px-5 flex justify-between shadow-md'>
            <img src='/logo.svg' className='cursor-pointer' width={100} height={100} />

            {isSignedIn ?
                <div className='flex gap-2 items-center'>
                    <Link to={'/dashboard'}>
                        <Button variant="outline">Dashboard</Button>
                    </Link>
                    <UserButton />
                </div> :
                <Link to={'/authentication/sign-in'}>
                    <Button>Get started</Button>
                </Link>
            }

        </div>
    )
}

export default Header