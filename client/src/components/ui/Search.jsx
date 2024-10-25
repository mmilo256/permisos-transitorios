import { useRef, useState } from "react"
import { FaTimes } from "react-icons/fa";

const Search = ({ onSearch }) => {

    const searchValue = useRef()

    const [searchString, setSearchString] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await onSearch(searchValue.current.value)
        setSearchString(searchValue.current.value)
        searchValue.current.value = ""
    }

    return (
        <form onSubmit={handleSubmit} className="w-full" action="">
            <div className="flex w-full gap-4">
                <input ref={searchValue} className="h-10 border border-slate-400 p-1 w-full focus:outline-blue-400" type="text" />
                <input className="bg-primary hover:bg-primaryHover cursor-pointer transition-colors h-10 text-white w-52" type="submit" value="Buscar" />
            </div>
            {searchString && <button className="bg-slate-300 hover:bg-slate-400 mt-4 p-2 gap-2 flex items-center rounded text-sm"><FaTimes /> <span>Búsqueda: <span className="font-semibold">{searchString}</span></span> </button>}
        </form>
    )
}

export default Search