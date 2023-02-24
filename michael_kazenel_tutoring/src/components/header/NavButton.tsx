import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavButtonProps {
    name: string
    linkUrl: string
}

export function NavButton ({ name, linkUrl }: NavButtonProps) {
    return (
        <div className='mx-4 my-auto'>
            <Link to={linkUrl}>{name}</Link>
        </div>
    );
}
