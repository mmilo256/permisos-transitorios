import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getApplicationById } from "../../services/webFormServices"
import ApplicationState from "./ApplicationState"
import Container from "../ui/Container"
import Heading from "../ui/Heading"
import { formatDate } from "../../utils/utils"
import { BACKEND_URL } from "../../constants/constants"
import RejectModal from "./RejectModal"

import { sendEmail } from "../../services/emailServices"

const ApplicationDetail = () => {

    const { id } = useParams()
    const [data, setData] = useState({})

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const getApplication = async () => {
            const application = await getApplicationById(id)
            setData(application)
        }
        getApplication()
    }, [id])

    const sendRejectEmail = async (reason) => {
        const emails = [data.org_email, data.owner_email]
        const template = `
        <div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; background-color: #f9fafb; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
    <div style="background-color: #0F69C4; color: white; padding: 10px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1>Notificación de Solicitud</h1>
    </div>
    <div style="padding: 20px; background-color: white; border-radius: 0 0 8px 8px;">
        <h2>Estimado/a:</h2>
        <p>Gracias por su solicitud. Lamentamos informarle que su solicitud ha sido rechazada.</p>
        <p><strong>Motivo del rechazo:</strong></p>
        <p>${reason}</p>
        <p>Si tiene alguna pregunta, no dude en ponerse en contacto con nosotros.</p>
        <p>Atentamente,<br /> Ilustre Municipalidad de Chonchi</p>
    </div>
    <div style="text-align: center; font-size: 12px; color: #6b7280; margin-top: 20px;">
        <p>Este es un correo automático, por favor no responda.</p>
    </div>
</div>

        `
        await sendEmail(emails, "SOLICITUD DE PERMISO TRANSITORIO: RECHAZADA", template)
    }



    return (
        <>
            <div className="mt-5">
                <Container>
                    {<div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 gap-y-4">
                        <ApplicationState orgData={data} setIsOpen={setIsOpen} />
                        <div className="bg-white p-2 border col-span-2">
                            <Heading variant="h3">Detalle de la solicitud</Heading>
                            <div className="border-t">
                                <h3 className="my-2 text-2xl text-slate-500 font-semibold">Detalles del permiso</h3>
                                <div className="grid grid-cols-2 gap-2 break-words">
                                    <div className="mb-1">
                                        <p className="font-semibold">Actividad</p>
                                        <p className="capitalize" >{data.activity_name}</p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="font-semibold">Lugar de realización</p>
                                        <p className="capitalize" >{data.place}</p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="font-semibold">Fecha de inicio</p>
                                        <p>{formatDate(data.start_date, 1)} a las {data.start_time}</p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="font-semibold">Fecha de término</p>
                                        <p>{formatDate(data.end_date, 1)} a las {data.end_time}</p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="font-semibold">Consumo y/o venta de alimentos</p>
                                        <p>{data.is_food ? "Si" : "No"}</p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="font-semibold">Consumo y/o venta de alcohol</p>
                                        <p>{data.is_alcohol ? "Si" : "No"}</p>
                                    </div>
                                    <div className="mb-1 col-span-2">
                                        <p className="font-semibold">Descripción de la actividad</p>
                                        <p>{data.description}</p>
                                    </div>
                                    <div className="mb-1 col-span-2">
                                        <p className="font-semibold">Destino de los fondos</p>
                                        <p>{data.purpose}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t mt-2">
                                <h3 className="my-2 text-2xl text-slate-500 font-semibold">Datos de la organización</h3>
                                <div className="grid grid-cols-2 gap-2 break-words">
                                    <div className="mb-1">
                                        <p className="font-semibold">Nombre o razón social</p>
                                        <p className="capitalize" >{data.org_name}</p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="font-semibold">RUT</p>
                                        <p>{data.org_rut}</p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="font-semibold">Teléfono</p>
                                        <p>{data.org_phone}</p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="font-semibold">Correo electrónico</p>
                                        <p>{data.org_email}</p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="font-semibold">Dirección</p>
                                        <p className="capitalize" >{data.org_address}</p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="font-semibold">Tipo de organización</p>
                                        <p className="capitalize" >{data.org_type}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t mt-2">
                                <h3 className="my-2 text-2xl text-slate-500 font-semibold">Datos del representante legal</h3>
                                <div className="grid grid-cols-2 gap-2 break-words">
                                    <div className="mb-1">
                                        <p className="font-semibold">Nombre completo</p>
                                        <p className="capitalize" >{data.owner_name}</p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="font-semibold">RUT</p>
                                        <p>{data.owner_rut}</p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="font-semibold">Correo electrónico</p>
                                        <p>{data.owner_email}</p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="font-semibold">Dirección</p>
                                        <p className="capitalize" >{data.owner_address}</p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="font-semibold">Teléfono</p>
                                        <p>{data.owner_phone}</p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="font-semibold">Teléfono 2</p>
                                        <p>{data.owner_phone2}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t mt-2">
                                <h3 className="my-2 text-2xl">Antecedentes</h3>
                                <div>
                                    {data.docs && data.docs.map((file, index) => (
                                        <a className="block text-blue-600 underline" target="_blank" href={`${BACKEND_URL}/uploads/${file.file.filename}`} key={index}>{file.file.originalname}</a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>}
                </Container>
            </div>
            <RejectModal sendRejectEmail={sendRejectEmail} modal={isOpen} setModal={setIsOpen} />
        </>
    )
}

export default ApplicationDetail