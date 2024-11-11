import { useEffect, useState } from "react"
import Heading from "../ui/Heading"
import { useLocation, useParams } from "react-router-dom"
import { getPermissionById } from "../../services/permissionServices"
import Container from "../ui/Container"
import { formatDate } from "../../utils/utils"
import Button from "../ui/Button"
import { BACKEND_URL } from "../../constants/constants"

const PermissionDetail = () => {

    const { id } = useParams('id')
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const orgName = queryParams.get('orgName')
    const [permission, setPermission] = useState({})

    useEffect(() => {
        (
            async () => {
                const data = await getPermissionById(id)
                setPermission(data.permission)
            }
        )()
    }, [id])

    return (
        <div>
            <Heading align="text-center">{orgName}</Heading>
            <Container>
                <div className="grid grid-cols-2 gap-4 text-lg">
                    <div>
                        <p className="font-bold">Nombre de la actividad</p>
                        <p className="capitalize">{permission.activity_name}</p>
                    </div>
                    <div>
                        <p className="font-bold">Lugar de realización</p>
                        <p className="capitalize">{permission.place}</p>
                    </div>
                    <div>
                        <p className="font-bold">Fecha de inicio</p>
                        <p>{formatDate(permission.start_date, 1)}, {permission.start_time}</p>
                    </div>
                    <div>
                        <p className="font-bold">Fecha de término</p>
                        <p>{formatDate(permission.end_date, 1)}, {permission.end_time}</p>
                    </div>
                    <div>
                        <p className="font-bold">Venta y/o consumo de alcohol</p>
                        <p>{permission.is_alcohol ? "Si" : "No"}</p>
                    </div>
                    <div>
                        <p className="font-bold">Venta y/o consumo de alimentos</p>
                        <p>{permission.is_food ? "Si" : "No"}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="font-bold">Descripción de la actividad</p>
                        <p>{permission.description}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="font-bold">Destino de los fondos recaudados</p>
                        <p>{permission.purpose}</p>
                    </div>
                </div>
                <div className="my-2 flex justify-end">
                    {permission.act_doc && <Button type="link" href={`${BACKEND_URL}/${permission.act_doc.path}`}>Descargar decreto</Button>}
                </div>
            </Container>
        </div>
    )
}

export default PermissionDetail