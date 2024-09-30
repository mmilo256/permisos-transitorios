import { MdFirstPage } from "react-icons/md";
import { MdLastPage } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {

    const goToFirstPage = () => {
        setCurrentPage(1)
    }
    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1)
        }
    }
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1)
        }
    }
    const goToLastPage = () => {
        setCurrentPage(totalPages)
    }

    return (
        <div className="flex gap-1 justify-center">
            <button onClick={goToFirstPage} ><MdFirstPage /></button>
            <button onClick={goToPrevPage} ><MdNavigateBefore /></button>
            <p>{currentPage} de {totalPages}</p>
            <button onClick={goToNextPage} ><MdNavigateNext /></button>
            <button onClick={goToLastPage} ><MdLastPage /></button>
        </div>
    )
}

export default Pagination