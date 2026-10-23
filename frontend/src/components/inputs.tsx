import React from 'react'

type props = {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  icon?: string;
  classname?: string;
}

export default function Inputs({ type, id, name, placeholder, icon, classname }: props) {
  return (
    <div className='flex flex-row items-center w-full mb-4'>
      <i className={icon} ></i>
      <input type={type} id={id} name={name} placeholder={placeholder} className={classname}/>
    </div>
  )
}
