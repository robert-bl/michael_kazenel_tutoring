import * as React from 'react';

export interface NavButtonProps {
    name: string
}

export function NavButton ({ name }: NavButtonProps) {
    return (
        <div className='mx-4 my-auto'>
            {name}
        </div>
    );
}
