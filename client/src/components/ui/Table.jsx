const Table = ({ columns, data }) => {
    return (
        <div className="overflow-x-scroll">
            <table className="border w-full">
                <thead className="bg-primary text-white">
                    <tr>
                        {columns && columns.map((col, index) => (
                            <th className="border text-left p-2" key={index}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((cell, index) => (
                                <td className="border p-2 bg-white" key={index}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table