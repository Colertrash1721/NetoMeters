'use client';

import LoginTarget from "@/components/loginTarget";
import Image from "next/image";
import RegisterTarget from "@/components/registerTarget";
import { useEffect, useState } from "react";

export default function Home() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[url('/assets/background.png')] bg-cover bg-center text-[#c4e2f3] p-6 font-[montserrat]">
      
      <div className="w-full max-w-6xl min-h-162.5 grid grid-cols-2 rounded-2xl overflow-hidden">
        
        {/* Información */}
        <section className="flex flex-col justify-center px-16 py-12">
          <h1 className="text-5xl mb-3 text-white font-semibold">
            <Image src="/assets/Logo.png" alt="NetoMeters" className="inline-block mr-2" width={60} height={60} />
            NetoMeters
          </h1>

          <h2 className="text-2xl font-semibold mb-8">
            Monitor inteligente.
            <br />
            Consumo en tiempo real.
          </h2>

          <div className="space-y-3 text-lg">
            <p><Image src="/assets/Icon 1.png" alt="Monitoreo en tiempo real" className="inline-block mr-2" width={24} height={24}/>Monitoreo en tiempo real.</p>
            <p><Image src="/assets/Icon 2.png" alt="Mayor confianza y seguridad" className="inline-block mr-2" width={24} height={24} />Mayor confianza y seguridad.</p>
            <p><Image src="/assets/Icon 3.png" alt="Eficiencia energética" className="inline-block mr-2" width={24} height={24} />Eficiencia energética.</p>
            <p><Image src="/assets/Icon 4.png" alt="Gestión de medidores" className="inline-block mr-2" width={24} height={24} />Gestión de medidores.</p>
          </div>
        </section>

        {/* Login */}
        <section className="flex  bg-[#061c32] px-12 py-12">
          <div className="flex flex-col justify-around w-full max-w-md">
            {isRegistering ? <RegisterTarget /> : <LoginTarget />}
            <p>{isRegistering ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'} <a className='text-[#00b0a5] cursor-pointer' onClick ={() => setIsRegistering(!isRegistering)}>{isRegistering ? 'Iniciar sesión' : 'Regístrate'}</a></p>
          </div>
        </section>

      </div>
    </main>
  );
}