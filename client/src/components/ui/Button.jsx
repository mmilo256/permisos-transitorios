import { NavLink } from 'react-router-dom'

// Componente Button que puede ser un botón o un enlace estilizado
const Button = ({ children, variant = "primary", type = "button", href, onClick, disabled, fullWidth }) => {
    // Determina los estilos del botón según el tipo de variante
    let buttonStyles;
    switch (variant) {
        case "primary":
            buttonStyles = `bg-primary hover:bg-primaryHover disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-3 px-5 font-bold ${fullWidth && "w-full text-center"}`
            break
        case "secondary":
            buttonStyles = `bg-white hover:bg-blue-50 border border-primary text-primary py-3 px-5 font-bold ${fullWidth && "w-full text-center"}`
            break
    }

    // Renderiza un enlace o un botón según el tipo especificado
    return (
        type === "link"
            ? <NavLink disabled={disabled} to={href} className={`block transition-colors ${buttonStyles}`}>
                <span className='underline'>{children}</span>
            </NavLink>
            : <button disabled={disabled} onClick={onClick} type='button' className={`block max-w-fit transition-colors ${buttonStyles}`}>
                <span className='underline'>{children}</span>
            </button>
    )
}

export default Button
