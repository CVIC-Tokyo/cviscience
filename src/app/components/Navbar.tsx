'use client'

import React, { useEffect, useState } from "react";

const Navbar: React.FC<NavbarProps> = () => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const [showShadow, setShowShadow] = useState<boolean>(false);
    const [language, setLanguage] = useState<string>('en');

    useEffect(() => {
        const handleShadow = () => {
            if (window?.scrollY >= 90) {
                setShowShadow(true);
            } else {
                setShowShadow(false);
            }
        };
        window.addEventListener("scroll", handleShadow);

        return () => {
            window.removeEventListener("scroll", handleShadow);
        }
    }, []);

    const handleLanguage = () => {
        if (language === "en") {
            setLanguage("ja");
        } else setLanguage("en");
    }

    const handleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-[100] ${showShadow ? `shadow-lg bg-opacity-75` : ''}`}
        >
        </div>
    )

}

export default Navbar;