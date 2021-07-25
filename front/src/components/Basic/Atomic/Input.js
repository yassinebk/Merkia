import React from 'react'
const inputStyle = 'flex flex-row justify-start items-center h-auto w-auto'
const inputTextArea = 'flex flex-col justify-start items-start'

// eslint-disable-next-line react/prop-types
const Input = ({ value,id, type, onChange, name, labelClass, inputClass, containerClass }) => {
  return (

            <div className={containerClass + ' ' + inputStyle}>
                <label htmlFor={name} id={id} className={labelClass}>{name}</label>
                <input className={inputClass + ' input-field ' } onChange={onChange} type={type} value={value} id ={name}/>
            </div>

  )
}

// eslint-disable-next-line react/prop-types
export const TextArea = ({ id,value, type, onChange, name, labelClass, inputClass, placeholder, containerClass }) => {
  return (
        <div className={containerClass + ' ' + inputTextArea}>
            <label htmlFor={name} className={labelClass}> {name}</label>
      <textarea placeholder={placeholder} className={inputClass + ' input-field ' + inputTextArea} onChange={onChange} type={type} value={value} id={id} />
        </div>
  )
}

export default Input
