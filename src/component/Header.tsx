import React from 'react';
import Button from '../component/Button';
import Summarize from './Summarize';
import '../assets/tailwind.css';

interface HeaderProps {

    header: string;
}

const Header: React.FC<HeaderProps> = ({header }) => {
    return (
        <>
            <div className="sticky top-0 z-50" style={{ backgroundColor: 'black', color: 'white', padding: '13px 5px', cursor: 'grabbing', fontWeight: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p className="m-0 ml-1 text-base">{header}</p>
                </div>
            </div>
           
        </>
    );
};

export default Header;
