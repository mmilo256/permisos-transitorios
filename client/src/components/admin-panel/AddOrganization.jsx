import { useEffect, useState } from 'react'
import Heading from '../ui/Heading'
import Container from '../ui/Container'
import Input from '../ui/Input'
import { createOrganization } from '../../services/organizationServices'
import { useLocation, useNavigate } from 'react-router-dom'
import { formatRut, onlyNumberInput } from '../../utils/utils'
import { ORG_TYPES } from '../../constants/constants'

const AddOrganization = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const org = Object.fromEntries(queryParams.entries());

    const [orgName, setOrgName] = useState(org.org_name ? org.org_name : "");
    const [orgRut, setOrgRut] = useState(org.org_rut ? org.org_rut : "");
    const [orgAddress, setOrgAddress] = useState(org.org_address ? org.org_address : "");
    const [orgEmail, setOrgEmail] = useState(org.org_email ? org.org_email : "");
    const [orgPhone, setOrgPhone] = useState(org.org_phone ? org.org_phone : "");
    const [orgType, setOrgType] = useState(org.org_type ? org.org_type : "");
    const [personName, setPersonName] = useState(org.owner_name ? org.owner_name : "");
    const [personRut, setPersonRut] = useState(org.owner_rut ? org.owner_rut : "");
    const [personAddress, setPersonAddress] = useState(org.owner_address ? org.owner_address : "");
    const [personEmail, setPersonEmail] = useState(org.owner_email ? org.owner_email : "");
    const [personPhone, setPersonPhone] = useState(org.owner_phone ? org.owner_phone : "");
    const [personPhone2, setPersonPhone2] = useState(org.owner_phone2 ? org.owner_phone2 : "");

    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if (orgName && orgRut && orgAddress && orgEmail && orgPhone && orgType && personName && personRut && personAddress && personEmail && personPhone) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [orgName, orgRut, orgAddress, orgEmail, orgPhone, orgType, personName, personRut, personAddress, personEmail, personPhone])

    const handleSubmit = async (e) => {
        e.preventDefault()
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
        try {
            const { status, message } = await createOrganization(orgData)
            alert(message)
            if (status === "success") {
                navigate("/")
            }
        } catch (error) {
            alert("No se pudo crear la organización", error)
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
                        <input disabled={!isValid} className='cursor-pointer bg-primary hover:bg-primaryHover disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-3 px-5 font-bold  text-center' type="submit" value="Agregar" />
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default AddOrganization