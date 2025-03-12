 import React, { useEffect, useState } from "react";
import "./CineVibeLogo.scss";
import { Link } from "react-router-dom";
 
const CineVibeLogo = () => {
    const text = "Star  ZZ";
    const [visibleLetters, setVisibleLetters] = useState([]);
    const [showTag, setShowTag] = useState(false);
 
    useEffect(() => {
        text.split("").forEach((_, index) => {
            setTimeout(() => {
                setVisibleLetters((prev) => [...prev, index]);
                if (index === text.length - 1) {
                    setTimeout(() => setShowTag(true), 500);
                }
            }, index * 500);
        });
    }, []);
 
    return (
        <div className="logo-container">
            <div className="logo-text">
                {text.split("").map((letter, index) => (
                    <span
                        key={index}
                        className={`letter ${visibleLetters.includes(index) ? "visible" : ""}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {letter}
                    </span>
                ))}
            <Link to="/signup"><p className="entertainment-text">SignUp</p></Link>
            <Link to="/Login"><p className="Tx">Login</p></Link>



            </div>
        </div>
    );
};
 
export default CineVibeLogo;
 
 
 