import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [selectedFilter, setSelectedFilter] = React.useState("");

    return (
        <GlobalContext.Provider
            value={{
                selectedFilter,
                setSelectedFilter,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
