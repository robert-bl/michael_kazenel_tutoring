import * as React from 'react';
import { NavBar } from './NavBar';

export function Header () {
    return (
        <div>
            <div className='bg-header bg-cover h-80'>
                <div className='pl-40 pt-40 text-4xl'>
                    <div>Hi, I'm Michael Kazenel.</div>
                    <div>I tutor math and physics.</div>
                </div>
            </div>
        </div>
    );
}
