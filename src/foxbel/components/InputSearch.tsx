import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface Props {
    searchTerm: string;
    setSearchTerm: (event: string) => void;
}

export const InputSearch = ({searchTerm, setSearchTerm}: Props) => {
    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full border border-gray-300 rounded-full py-2 pl-3 pr-4"
                placeholder="Buscar..."
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FontAwesomeIcon icon={faSearch} color="gray"/>
            </div>
        </div>
    );
};
