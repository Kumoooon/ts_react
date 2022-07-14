import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Home} from "../pages/Home";
import {Store} from "../pages/Store";
import {About} from "../pages/About";
import {faBasketShopping} from "@fortawesome/pro-light-svg-icons";
import React from "react";

export function Navbar() {
    let navigate = useNavigate()
    return (
        <div>
            <div className=" h-16 w-full p-4 text-xl shadow-sm">
                <div className="inline-block text-3xl" onClick={() => {
                    navigate("/")
                }}>Home
                </div>
                <div className="inline-block ml-14" onClick={() => {
                    navigate("/store")
                }}>Store
                </div>
                <div className="inline-block ml-14" onClick={() => {
                    navigate("/about")
                }}>About
                </div>
                <div className="inline-block hover:bg-blue-600 relative left-36 rounded w-7"><FontAwesomeIcon icon={faBasketShopping}
                                                                                 className=" text-2xl"
                                                                                 onClick={() => {
                                                                                     console.log(1)
                                                                                 }}/><div className="absolute left-5 top-3.5 text-sm text-violet-700">3</div>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/store" element={<Store/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<div>어허...</div>}/>
            </Routes>

        </div>
    )
}
