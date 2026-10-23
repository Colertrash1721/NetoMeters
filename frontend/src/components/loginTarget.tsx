
import React from 'react'
import { useState } from 'react'
import Inputs from './inputs';
import Image from 'next/image';

export default function LoginTarget() {
  const [isChequed, setisChequed] = useState(false);

  const handleCheckboxClick = () =>{
    setisChequed(!isChequed);
  }

  return (
    <>
        <div>
          <h1 id="login-title" className='tittle2 text-[#c4e2f3] text-left w-full'>Iniciar sesión</h1>
          <p className='text-left w-full'>Bienvenido de nuevo, por favor ingrese a su cuenta.</p>
        </div>
        <form action="" className='flex flex-col w-full'>
            <label htmlFor="email">Correo electrónico</label>
            <Inputs type="email" id="email" name="email" placeholder="tucorreo@gmail.com" classname='inputs inline-block' icon='bx bx-user text-2xl bg-[#0b2e4e] text-white p-2'/>
            <label htmlFor="password">Contraseña</label>
            <Inputs type="password" id="password" name="password" placeholder="********" classname='inputs inline-block' icon='bx bx-lock text-2xl bg-[#0b2e4e] text-white p-2'/>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row items-center gap-2'>
                    <div className={isChequed ? 'animate-checkbox checked' : 'animate-checkbox'} onClick={handleCheckboxClick}></div>
                    <label htmlFor="remember" className='text-[#00b0a5]'>Recordarme</label>
                </div>
                <a href="#" className='text-[#00b0a5]'>¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit" className='bg-[#00b0a5] text-white rounded-lg p-2 mt-4 cursor-pointer'>Iniciar sesión</button>
            <a href='#' className='border border-[#1f80db] bg-[#0b2e4e] text-center text-white rounded-lg p-2 mt-4 cursor-pointer'>
              <Image src="/assets/Google Icon.png" alt="Google" className="inline-block mr-2" width={24} height={24}/>
              Continuar con Google
              </a>
        </form>
    </>
  )
}
