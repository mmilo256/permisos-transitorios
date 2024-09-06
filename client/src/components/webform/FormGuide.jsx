import Button from "../ui/Button"
import Container from "../ui/Container"
import Heading from "../ui/Heading"

const FormGuide = () => {
    return (
        <Container>
            <Heading variant="h1">Solicitud de Autorización <br /> Especial Transitoria</Heading>
            <Heading variant="h3">Instrucciones</Heading>
            <p className="mb-3">Antes de continuar con la solicitud, asegúrese de contar con los siguientes antecedentes digitalizados</p>
            <ul className="pl-6 mb-3">
                <li className="list-disc mb-2">Cédula de identidad del presidente de la organización</li>
                <li className="list-disc mb-2">RUT Tributario, en caso de organizaciones</li>
                <li className="list-disc mb-2">Certificado de vigencia de persona jurídica</li>
                <li className="list-disc mb-2">Documento que acredite la ocupación legal del recinto donde se realizará la actividad</li>
                <li className="list-disc mb-2">Declaración jurada simple que el presidente de la organización no está afecto a prohibiciones del artículo n°4 ley 19.925 de alcoholes (sólo si la autorización es con venta y consumo de alcohol)</li>
                <li className="list-disc mb-2">Certificado de antecedentes para fines especiales del presidente de la organización (sólo si la autorización es con venta y consumo de alcohol)</li>
            </ul>
            <p className="mb-3">
                Además, debe descargar el siguiente documento, imprimirlo, obtener la firma del representante legal de su organización, y luego subirlo al formulario junto
                con los demás antecedentes.
            </p>
            <div className="flex justify-center sm:justify-start py-4">
                <Button variant="secondary">Descargar documento</Button>
            </div>
            <p className="my-3">Una vez teniendo todos los documentos digitalizados, puede continuar con la solicitud.</p>
            <div className="ml-auto sm:max-w-48 bg-red-200">
                <Button type="link" fullWidth href="datos-organizacion" variant="primary">Iniciar solicitud</Button>
            </div>
        </Container>
    )
}

export default FormGuide