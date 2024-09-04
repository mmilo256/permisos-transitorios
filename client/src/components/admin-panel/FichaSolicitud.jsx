const FichaSolicitud = () => {
    return (
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">

            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">Solicitud: nombre actividad</h2>
                <p className="text-gray-500">Destino de los fondos: destino de los fondos</p>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Datos de la Organización</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-700">
                    <p><span className="font-semibold">Nombre:</span> nombre organización</p>
                    <p><span className="font-semibold">RUT:</span> 77.423.512-K</p>
                    <p><span className="font-semibold">Teléfono:</span> 8931829</p>
                    <p><span className="font-semibold">Correo:</span> correo@gmail.com</p>
                    <p><span className="font-semibold">Dirección:</span> calle 123</p>
                    <p><span className="font-semibold">Tipo:</span> </p>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Datos del Representante</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-700">
                    <p><span className="font-semibold">Nombre:</span> nombre presidente</p>
                    <p><span className="font-semibold">RUT:</span> 19.722.280-8</p>
                    <p><span className="font-semibold">Teléfono:</span> 12345678</p>
                    <p><span className="font-semibold">Teléfono 2:</span> 12345623</p>
                    <p><span className="font-semibold">Correo:</span> correo@gmail.com</p>
                    <p><span className="font-semibold">Dirección:</span> calle 456</p>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Datos del Permiso</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-700">
                    <p><span className="font-semibold">Nombre de la Actividad:</span> nombre actividad</p>
                    <p><span className="font-semibold">Lugar:</span> lugar</p>
                    <p><span className="font-semibold">Fecha Inicio:</span> 2024-12-30</p>
                    <p><span className="font-semibold">Hora Inicio:</span> 23:59</p>
                    <p><span className="font-semibold">Fecha Término:</span> 2023-12-31</p>
                    <p><span className="font-semibold">Hora Término:</span> 22:59</p>
                    <p><span className="font-semibold">Alimentos:</span> Sí</p>
                    <p><span className="font-semibold">Alcohol:</span> No</p>
                    <p className="col-span-2"><span className="font-semibold">Descripción:</span> descripción</p>
                </div>
            </div>

            <div className="flex justify-end space-x-4">
                <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600">Rechazar</button>
                <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600">Aprobar</button>
            </div>



        </div>
    )
}

export default FichaSolicitud