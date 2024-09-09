import Button from "../ui/Button"
import Container from "../ui/Container"
import Heading from "../ui/Heading"

const FormLayout = ({ children, title, onClickPrev, onClickNext, btnTextPrev = "Volver", btnTextNext = "Siguiente", isValid = true }) => {
    return (
        // Contenedor principal del formulario

        <Container>
            {/* Título principal del formulario */}
            <Heading variant="h2">Formulario de Solicitud de Autorización Especial Transitoria</Heading>
            {/* Título específico para la sección del formulario */}
            <Heading variant="h3">{title}</Heading>
            {/* Renderiza los campos y componentes hijos del formulario */}
            {children}
            {/* Contenedor para los botones de navegación */}
            <div className="flex gap-2 justify-end border-t border-t-slate-300 mt-6 pt-6">
                {/* Botón para retroceder a la página anterior, si se proporciona la función onClickPrev */}
                {onClickPrev && <Button variant="secondary" type="button" onClick={onClickPrev}>{btnTextPrev}</Button>}
                {/* Botón para avanzar al siguiente paso, si se proporciona la función onClickNext */}
                {onClickNext && <Button disabled={!isValid} variant="primary" type="button" onClick={onClickNext}>{btnTextNext}</Button>}
            </div>
        </Container>

    )
}

export default FormLayout
