import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavButton } from './NavButton';


export function NavBar () {

    const [navBackground, setNavBackground] = useState(false)

    const changeBackground = () => {
        window.scrollY > 80 ? setNavBackground(true) : setNavBackground(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
        return () => window.removeEventListener('scroll', changeBackground)
    },[])
    

    let navStyling = `flex justify-between fixed top-0 w-screen ${navBackground === true ? 'text-black' : 'text-white'} ${navBackground === true ? 'bg-white' : 'bg-black'} transition-colors duration-700 p-4`

    return (
        <div className={navStyling}>
            <div className='text-4xl'>Michael Kazenel</div>
            <div className='flex justify-between'>
                <NavButton name='Home'/>
                <NavButton name='Tutoring'/>
                <NavButton name='Testimonials'/>
                <NavButton name='About Me'/>
                <NavButton name='Contact Me'/>
            </div>
        </div>
    );
}
