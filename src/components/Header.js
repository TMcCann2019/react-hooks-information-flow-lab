import React from "react";

function Header ({isDarkMode, onDarkModeClick}) {
    const handleDarkModeClick = () => {
        onDarkModeClick();
    }

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={handleDarkModeClick}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </header>
    )
}

export default Header;