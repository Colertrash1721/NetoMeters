import { useState } from "react";
import Inputs from "./inputs";

export default function RegisterTarget() {
    const [isChequed, setisChequed] = useState(false);

    const handleCheckboxClick = () => {
        setisChequed(!isChequed);
    }
    return (
        <>
            <div>
                <h1 id="login-title" className='tittle2 text-[#c4e2f3] text-left w-full'>Registrarse</h1>
                <p className='text-left w-full'>Complete la información para continuar.</p>
            </div>
            <form action="" className='flex flex-col w-full'>
                <label htmlFor="name">Nombre Completo</label>
                <Inputs type="text" id="name" name="name" placeholder="Tu nombre completo" classname='inputs inline-block' icon='bx bx-user text-2xl bg-[#0b2e4e] text-white p-2' />
                <label htmlFor="email">Correo electrónico</label>
                <Inputs type="email" id="email" name="email" placeholder="tucorreo@gmail.com" classname='inputs inline-block' icon='bx bx-user text-2xl bg-[#0b2e4e] text-white p-2' />
                <label htmlFor="password">Contraseña</label>
                <Inputs type="password" id="password" name="password" placeholder="********" classname='inputs inline-block' icon='bx bx-lock text-2xl bg-[#0b2e4e] text-white p-2' />
                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                <Inputs type="password" id="confirmPassword" name="confirmPassword" placeholder="********" classname='inputs inline-block' icon='bx bx-lock text-2xl bg-[#0b2e4e] text-white p-2' />
                <label htmlFor="company">Empresa</label>
                <Inputs type="text" id="company" name="company" placeholder="Nombre de tu empresa" classname='inputs inline-block' icon='bx bx-building text-2xl bg-[#0b2e4e] text-white p-2' />

                <button type="submit" className='bg-[#00b0a5] text-white rounded-lg p-2 mt-4 cursor-pointer'>Crear cuenta</button>
            </form>
        </>
    );
}