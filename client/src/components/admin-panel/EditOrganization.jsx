import { useEffect, useState } from 'react'
import Heading from '../ui/Heading'
import Container from '../ui/Container'
import Input from '../ui/Input'
import { getOrgById, updateOrganization } from '../../services/organizationServices'
import { useNavigate, useParams } from 'react-router-dom'
import { formatRut, onlyNumberInput, verifyRut } from '../../utils/utils'
import { ORG_TYPES } from '../../constants/constants'

const EditOrganization = () => {

    const navigate = useNavigate()

    const { id } = useParams()

    const [orgName, setOrgName] = useState("");
    const [orgRut, setOrgRut] = useState("");
    const [orgAddress, setOrgAddress] = useState("");
    const [orgEmail, setOrgEmail] = useState("");
    const [orgPhone, setOrgPhone] = useState("");
    const [orgType, setOrgType] = useState("");
    const [personName, setPersonName] = useState("");
    const [personRut, setPersonRut] = useState("");
    const [personAddress, setPersonAddress] = useState("");
    const [personEmail, setPersonEmail] = useState("");
    const [personPhone, setPersonPhone] = useState("");
    const [personPhone2, setPersonPhone2] = useState("");

    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        (async () => {
            const res = await getOrgById(id)
            const data = res.organization
            setOrgName(data.org_name)
            setOrgRut(data.org_rut)
            setOrgAddress(data.org_address)
            setOrgEmail(data.org_email)
            setOrgPhone(data.org_phone)
            setOrgType(data.org_type)
            setPersonName(data.president.name)
            setPersonRut(data.president.rut)
            setPersonAddress(data.president.address)
            setPersonEmail(data.president.email)
            setPersonPhone(data.president.phone)
            setPersonPhone2(data.president.phone2)
            console.log(data)
        })()
    }, [id])



    useEffect(() => {
        if (orgName.length >= 3 && orgRut.length >= 10 && orgAddress.length >= 3 && orgEmail.length >= 3 && orgPhone.length >= 8 && orgType && personName.length >= 3 && personRut.length >= 10 && personAddress.length >= 3 && personEmail.length >= 3 && personPhone.length >= 8) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [orgName, orgRut, orgAddress, orgEmail, orgPhone, orgType, personName, personRut, personAddress, personEmail, personPhone])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isOrgRutValid = verifyRut(orgRut)
        const isPresidentRutValid = verifyRut(personRut)
        const orgData = {
            org_name: orgName,
            org_rut: orgRut,
            org_address: orgAddress,
            org_email: orgEmail,
            org_phone: orgPhone,
            org_type: orgType,
            name: personName,
            rut: personRut,
            address: personAddress,
            email: personEmail,
            phone: personPhone,
            phone2: personPhone2
        }
        if (isOrgRutValid && isPresidentRutValid) {
            try {
                await updateOrganization(id, orgData)
                alert("Organización modificada exitosamente")
                navigate(`/${id}`)
            } catch (error) {
                alert(`No se pudo crear la organización. Error: ${error.message}`)
            }
        } else {
            if (!isOrgRutValid) {
                alert("El RUT de la organización no es válido. Revisa todos los dígitos e intenta de nuevo.")
            }
            if (!isPresidentRutValid) {
                alert("El RUT del presidente no es válido. Revisa todos los dígitos e intenta de nuevo.")
            }
        }
    }

    return (
        <div>
            <Container>
                <Heading variant="h2">Agregar organización</Heading>
                <form onSubmit={handleSubmit}>
                    <Heading variant="h3">1. Datos de la organización</Heading>
                    <div className='grid grid-cols-2 gap-2 pb-4'>
                        <Input max={90} value={orgName} onChange={(e) => { setOrgName(e.target.value) }} label="Nombre o razón social" />
                        <Input max={12} value={orgRut} onChange={(e) => { setOrgRut(formatRut(e.target.value)) }} label="RUT" />
                        <Input max={90} value={orgAddress} onChange={(e) => { setOrgAddress(e.target.value) }} label="Dirección" />
                        <Input max={40} value={orgEmail} onChange={(e) => { setOrgEmail(e.target.value) }} label="Correo electrónico" />
                        <Input max={9} value={orgPhone} onChange={(e) => { setOrgPhone(onlyNumberInput(e.target.value)) }} label="Teléfono" />
                        <Input options={ORG_TYPES} type="select" value={orgType} onChange={(e) => { setOrgType(e.target.value) }} label="Tipo de organización" />
                    </div>
                    <Heading variant="h3">2. Datos del representante legal</Heading>
                    <div className='grid grid-cols-2 gap-2'>
                        <Input max={90} value={personName} onChange={(e) => { setPersonName(e.target.value) }} label="Nombre completo" />
                        <Input max={12} value={personRut} onChange={(e) => { setPersonRut(formatRut(e.target.value)) }} label="RUT" />
                        <Input max={90} value={personAddress} onChange={(e) => { setPersonAddress(e.target.value) }} label="Dirección" />
                        <Input max={40} value={personEmail} onChange={(e) => { setPersonEmail(e.target.value) }} label="Correo electrónico" />
                        <Input max={9} value={personPhone} onChange={(e) => { setPersonPhone(onlyNumberInput(e.target.value)) }} label="Teléfono" />
                        <Input max={9} value={personPhone2} onChange={(e) => { setPersonPhone2(onlyNumberInput(e.target.value)) }} label="Teléfono 2 (opcional)" />
                    </div>
                    <div className='flex justify-end mt-4'>
                        <input disabled={!isValid} className='cursor-pointer bg-primary hover:bg-primaryHover disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-3 px-5 font-bold  text-center' type="submit" value="Guardar cambios" />
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default EditOrganization