import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOrgById } from "../../services/organizationServices"
import Heading from "../ui/Heading"
import Container from "../ui/Container"

const OrganizationDetail = () => {

    const { id } = useParams()
    const [organization, setOrganization] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const showOrganizationDetail = async () => {
            setLoading(true)
            try {
                const org = await getOrgById(id)
                setOrganization(org)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        showOrganizationDetail()
    }, [id])

    if (loading) return <p>Cargando...</p>

    const { org_name, org_rut, org_address, org_email, org_phone, org_type, president } = organization;
    const { name, rut, address, email, phone, phone2 } = president || {};


    return (
        <div>
            <Container>
                <Heading variant="h1">{organization.org_name}</Heading>
                <div className="grid grid-cols-2 gap-5 text-slate-700 bg-white p-4 shadow">
                    <div>
                        <Heading variant="h4">Datos de la organización</Heading>
                        <div className="font-semibold">
                            <p>Nombre: <span className="font-normal">{org_name}</span></p>
                            <p>RUT: <span className="font-normal">{org_rut}</span></p>
                            <p>Domicilio: <span className="font-normal">{org_address}</span></p>
                            <p>Correo electrónico: <span className="font-normal">{org_email}</span></p>
                            <p>Contacto: <span className="font-normal">{org_phone}</span></p>
                            <p>Tipo de organización: <span className="font-normal">{org_type}</span></p>
                        </div>
                    </div>
                    <div>
                        <Heading variant="h4">Datos del representante legal</Heading>
                        <div className="font-semibold">
                            <p>Nombre: <span className="font-normal">{name}</span></p>
                            <p>RUT: <span className="font-normal">{rut}</span></p>
                            <p>Domicilio: <span className="font-normal">{address}</span></p>
                            <p>Correo electrónico: <span className="font-normal">{email}</span></p>
                            <p>Contacto: <span className="font-normal">{phone}</span></p>
                            <p>Contacto alternativo: <span className="font-normal">{phone2}</span></p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[40rem]">
                    <Heading variant="h4">Documentación relacionada</Heading>
                    <ul className="text-primary flex flex-col gap-2">
                        <li className="flex justify-between">
                            <p>Nombre del documento</p>
                            <div className="flex gap-2">
                                <button className="bg-primary text-white w-16">Ver</button>
                                <button className="bg-primary text-white w-16">Borrar</button>
                            </div>
                        </li>
                        <li className="flex justify-between">
                            <p>Nombre del documento</p>
                            <div className="flex gap-2">
                                <button className="bg-primary text-white w-16">Ver</button>
                                <button className="bg-primary text-white w-16">Borrar</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default OrganizationDetail