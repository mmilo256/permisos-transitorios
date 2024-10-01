import { useRef } from "react"

const Search = ({ onSearch }) => {

    const searchValue = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(searchValue.current.value)
        searchValue.current.value = ""
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full gap-4" action="">
            <input ref={searchValue} className="h-10 border border-slate-400 p-1 w-full focus:outline-blue-400" type="text" />
            <input className="bg-primary h-10 text-white w-52" type="submit" value="Buscar" />
        </form>
    )
}

export default Search