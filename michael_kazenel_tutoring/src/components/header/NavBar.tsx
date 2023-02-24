import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavButton } from './NavButton';


export function NavBar () {

    const [navOpaque, setNavOpaque] = useState<boolean>(true)

    const changeBackground = () => {
        window.scrollY > 80 ? setNavOpaque(false) : setNavOpaque(true)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
        return () => window.removeEventListener('scroll', changeBackground)
    },[])
    

    let navStyling:string = `flex justify-between fixed top-0 w-screen bg-white ${navOpaque === true ? 'text-white' : 'text-black'} ${navOpaque === true ? 'bg-opacity-0' : 'bg-white'} ${navOpaque === true ? 'bg-opacity-0' : 'bg-white'} transition-colors duration-700 p-4 z-10`

    return (
        <div className={navStyling}>
            <div className='text-4xl'>Michael Kazenel</div>
            <div className='flex justify-between'>
                <NavButton name='Home' linkUrl='/'/>
                <NavButton name='Tutoring' linkUrl='/tutoring'/>
                <NavButton name='Testimonials' linkUrl='/testimonials'/>
                <NavButton name='About Me' linkUrl='/about-me'/>
                <NavButton name='Contact Me' linkUrl='/contact'/>
            </div>
        </div>
    );
}
