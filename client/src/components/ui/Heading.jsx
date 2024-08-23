const Heading = ({ variant, children, align }) => {

    let heading;
    let textAlign;
    const headingStyles = "font-bold text-gray-900 leading-snug"

    switch (align) {
        case "center":
            textAlign = "text-center"
            break;
        case "right":
            textAlign = "text-right"
            break;
        default:
            textAlign = "text-left"
            break;
    }


    switch (variant) {
        case "h1":
            heading = <h1 className={`${textAlign} py-5 font-robotoSlabs text-4xl ${headingStyles}`}>{children}</h1>
            break;
        case "h2":
            heading = <h2 className={`${textAlign} py-4 font-robotoSlabs text-3xl ${headingStyles}`}>{children}</h2>
            break;
        case "h3":
            heading = <h3 className={`${textAlign} py-3 font-robotoSlabs text-2xl ${headingStyles}`}>{children}</h3>
            break;
        default:
            heading = <h3>{children}</h3>
            break;
    }

    return heading
}

export default Heading