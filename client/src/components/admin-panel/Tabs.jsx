const Tabs = ({ options, onItemClick }) => {

    const handleClick = (item) => {
        onItemClick(item)
    }

    return (
        <nav className="border-b border-b-gray-400 mb-2 py-2">
            {options.map((option, index) => (
                <button onClick={() => { handleClick(option.value) }} className="border-b-2 border-b-gray-50 px-4 hover:border-b-2 hover:border-b-primary" key={index}>{option.label}</button>
            ))}
        </nav>
    )
}

export default Tabs