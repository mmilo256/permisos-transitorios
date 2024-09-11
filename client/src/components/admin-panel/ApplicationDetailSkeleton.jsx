import Button from "../ui/Button"
import Container from "../ui/Container"
import Heading from "../ui/Heading"

const ApplicationDetailSkeleton = () => {


    return (
        <div className="mt-5">
            <Container>
                {<div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 gap-y-4">
                    <div className="bg-white text-center p-2 border">
                        <Heading align="center" variant="h3">Estado de la solicitud</Heading>
                        <p className="mx-auto my-2 text-sm bg-slate-300 text-slate-600 w-min px-2 py-1 rounded-full">Pendiente</p>
                        <div className="flex md:flex-col lg:flex-row mt-4 pt-4 border-t gap-2 justify-center">
                            <Button fullWidth variant="approval" >Aprobar</Button>
                            <Button fullWidth variant="reject" >Rechazar</Button>
                        </div>
                    </div>
                    <div className="bg-white p-2 border col-span-2">
                        <Heading variant="h3">Detalle de la solicitud</Heading>
                        <div className="border-t">
                            <h3 className="my-2 text-2xl">Detalles del permiso</h3>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="mb-1">
                                    <p className="font-semibold">Actividad</p>

                                </div>
                                <div className="mb-1">
                                    <p className="font-semibold">Lugar de realización</p>
                                </div>
                                <div className="mb-1">
                                    <p className="font-semibold">Fecha de inicio</p>
                                </div>
                                <div className="mb-1">
                                    <p className="font-semibold">Fecha de término</p>
                                </div>
                                <div className="mb-1">
                                    <p className="font-semibold">Consumo y/o venta de alimentos</p>
                                </div>
                                <div className="mb-1">
                                    <p className="font-semibold">Consumo y/o venta de alcohol</p>
                                </div>
                                <div className="mb-1 col-span-2">
                                    <p className="font-semibold">Descripción de la actividad</p>
                                </div>
                                <div className="mb-1 col-span-2">
                                    <p className="font-semibold">Destino de los fondos</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-t mt-2">
                            <h3 className="my-2 text-2xl">Datos de la organización</h3>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="mb-1">
                                    <p className="font-semibold">Nombre o razón social</p>
                                </div>
                                <div className="mb-1">
                                    <p className="font-semibold">RUT</p>
                                </div>
                                <div className="mb-1">
                                    <p className="font-semibold">Teléfono</p>
                                </div>
                                <div className="mb-1">
                                    <p className="font-semibold">Correo electrónico</p>
                                </div>
                                <div className="mb-1">
                                    <p className="font-semibold">Dirección</p>
                                </div>
                                <div className="mb-1">
                                    <p className="font-semibold">Tipo de organización</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t mt-2">
                            <h3 className="my-2 text-2xl">Datos del representante legal</h3>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="mb-1">
                                    <p className="font-semibold">Nombre completo</p>
                                </div>
                                <div className="mb-1">
                                    <p className="font-semibold">RUT</p>
                                </div>
                                <div className="mb-1">
                                    <p className="font-semibold">Correo electrónico</p>
                                </div>
                                <div className="mb-1">
                                    <p className="font-semibold">Dirección</p>
                                </div>
                                <div className="mb-1">
                                    <p className="font-semibold">Teléfono</p>
                                </div>
                                <div className="mb-1">
                                    <p className="font-semibold">Teléfono 2</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t mt-2">
                            <h3 className="my-2 text-2xl">Antecedentes</h3>

                        </div>

                    </div>
                </div>}
            </Container>
        </div>
    )
}

export default ApplicationDetailSkeleton