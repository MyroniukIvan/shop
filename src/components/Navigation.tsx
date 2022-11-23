import React from 'react'
import {
    Link,
} from "react-router-dom";

export function Navigation() {
    return (<nav className="h-[50px] flex justify-between px-5 bg-emerald-800 items-center text-white">
            <span className="font-bold">React 2022</span>

            <span>
        <Link to="/" className="mr-8">Products</Link>
        <Link to="/about" className="mr-4">About</Link>
      </span>
        </nav>)
}