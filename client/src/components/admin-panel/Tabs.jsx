import { useState } from "react"

const Tabs = ({ options, onItemClick }) => {

    const [filtersTab, setFiltersTab] = useState(true)

    const handleClick = (item) => {
        onItemClick(item)
    }

    const toggleFiltersTab = () => {
        setFiltersTab(!filtersTab)
    }

    return (
        <nav className="border-b border-b-gray-400 mb-2 py-2">
            <button onClick={toggleFiltersTab} className="md:hidden bg-primary w-full font-semibold py-1 text-white">{!filtersTab ? "Mostrar" : "Ocultar"} filtros</button>
            <div className={`flex flex-col md:py-2 md:block ${!filtersTab && "hidden"} overflow-hidden`}>
                <button onClick={() => { handleClick("") }} className="border-b-2 border-b-gray-50 px-4 hover:border-b-2 hover:border-b-primary">Todos</button>
                {options.map((option, index) => (
                    <button onClick={() => { handleClick(option) }} className="border-b-2 border-b-gray-50 px-4 hover:border-b-2 hover:border-b-primary" key={index}>{option}</button>
                ))}
            </div>
        </nav>
    )
}

export default Tabs