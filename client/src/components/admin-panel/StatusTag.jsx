const StatusTag = ({ variant }) => {

    let tagStyles

    switch (variant) {
        case "rechazada":
            tagStyles = "bg-red-300 text-red-900 text-sm px-2 py-1 rounded-full"
            break;
        case "aprobada":
            tagStyles = "bg-green-300 text-green-900 text-sm px-2 py-1 rounded-full"
            break;
        default:
            tagStyles = "bg-yellow-300 text-yellow-900 text-sm px-2 py-1 rounded-full"
            break;
    }
    return (
        <span className={tagStyles}> {variant}</span >
    )
}

export default StatusTag