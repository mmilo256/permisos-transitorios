const Heading = ({ variant, children, align }) => {

    let heading;
    let textAlign;
    const headingStyles = "font-bold text-gray-900 font-robotoSlabs leading-snug"


    switch (variant) {
        case "h1":
            heading = <h1 className={`${textAlign} py-5 text-3xl md:text-4xl ${headingStyles} ${align}`}>{children}</h1>
            break;
        case "h2":
            heading = <h2 className={`${textAlign} py-4 text-2xl md:text-3xl ${headingStyles} ${align}`}>{children}</h2>
            break;
        case "h3":
            heading = <h3 className={`${textAlign} py-3 text-xl md:text-2xl ${headingStyles} ${align}`}>{children}</h3>
            break;
        case "h4":
            heading = <h3 className={`${textAlign} py-2 text-lg md:text-xl ${headingStyles} ${align}`}>{children}</h3>
            break;
        default:
            heading = <h3>{children}</h3>
            break;
    }

    return heading
}

export default Heading