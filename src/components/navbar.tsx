import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Article, Close, School, Storefront, Verified } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Navbar() {


    return (

        <header>
            <nav className="navbar">
                <Link href={'/'}>
                    <blockquote className="text-2xl m-4 font-semibold italic text-center text-white">
                        Project <span className="before:block ml-1 before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-400 relative inline-block">
                            <span className="relative text-black">İzmir</span>
                        </span>
                    </blockquote>

                </Link>
            </nav>
        </header>
    );
}

export default Navbar;