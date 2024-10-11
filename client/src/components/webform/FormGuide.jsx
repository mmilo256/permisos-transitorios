import Button from "../ui/Button"
import Container from "../ui/Container"
import Heading from "../ui/Heading"

const FormGuide = () => {
    return (
        <Container>
            <Heading variant="h1">Solicitud de Autorización <br /> Especial Transitoria</Heading>
            <Heading variant="h3">Instrucciones</Heading>
            <ul className="list-disc list-inside mb-3">
                <li>La solicitud debe efectuarse con a lo menos <strong>5 días hábiles de anticipación</strong> de la actividad.</li>
                <li>La solicitud será <strong>evaluada por la Dirección de Administración Municipal.</strong> </li>
                <li>Las autorizaciones se entregarán por un <strong>máximo de 3 días.</strong> </li>
                <li>Una vez finalizada la actividad, la persona u organización solicitante cuando corresponda, <strong>deberá rendir e informar a la Dirección de Desarrollo Comunitario el uso de los fondos recaudados en dicha actividad,</strong> con un <strong>plazo máximo de 30 días corridos.</strong> </li>
                <li><strong>No podrán otorgarse permisos transitorios</strong> a personas naturales u organizaciones que mantengan <strong>rendiciones pendientes con el municipio.</strong></li>
                <li><strong>No podrán otorgarse más de tres autorizaciones</strong> especiales transitorias a una <strong>misma persona natural o jurídica</strong> para el expendio de bebidas alcohólicas, durante el periodo de <strong>un año calendario</strong>. Las autorizaciones que se otorguen en fiestas patrias, navidad, año nuevo y cuando se realicen actividades de promoción turística y cultural de la comuna, <strong>no se considerarán para el límite de autorizaciones señaladas.</strong></li>
                <li>La limpieza y seguridad serán a cargo de los organizadores.</li>
            </ul>
            <Heading variant="h3">Requisitos</Heading>
            <p className="mb-3">Antes de continuar con la solicitud, asegúrese de contar con los siguientes <strong>antecedentes digitalizados:</strong></p>
            <ul className="list-disc list-inside mb-3">
                <li>Cédula de identidad del presidente de la organización</li>
                <li>RUT Tributario, en caso de organizaciones</li>
                <li>Certificado de vigencia de persona jurídica</li>
                <li>Documento que acredite la ocupación legal del recinto donde se realizará la actividad</li>
                <li>Declaración jurada simple que el presidente de la organización no está afecto a prohibiciones del artículo n°4 ley 19.925 de alcoholes (sólo si la autorización es con venta y consumo de alcohol)</li>
                <li>Certificado de antecedentes para fines especiales del presidente de la organización (sólo si la autorización es con venta y consumo de alcohol)</li>
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