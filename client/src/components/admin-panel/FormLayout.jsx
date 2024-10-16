import Footer from "../ui/Footer"
import Navbar from "../ui/Navbar"

const FormLayout = ({ children }) => {
    return (

        <div className="flex flex-col min-h-svh">
            <div className="flex-grow">
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>


    )
}

export default FormLayout