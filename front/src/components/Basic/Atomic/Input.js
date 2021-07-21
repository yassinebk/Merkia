import React from 'react'
const inputStyle = 'flex flex-row justify-start items-center h-auto w-auto'
const inputTextArea = 'flex flex-col justify-start items-start'

// eslint-disable-next-line react/prop-types
const Input = ({ value, type, onChange, name, labelClass, inputClass, containerClass }) => {
  return (

            <div className={containerClass + ' ' + inputStyle}>
                <label htmlFor={name} className={labelClass}>{name}</label>
                <input className={inputClass + ' input-field ' } onChange={onChange} type={type} value={value} id ={name}/>
            </div>

  )
}

// eslint-disable-next-line react/prop-types
export const TextArea = ({ value, type, onChange, name, labelClass, inputClass, placeholder, containerClass }) => {
  return (
        <div className={containerClass + ' ' + inputTextArea}>
            <label htmlFor={name} className={labelClass}> {name}</label>
            <textarea placeholder={placeholder} className={inputClass + ' input-field ' + inputTextArea} onChange={onChange} type={type} value={value} id ={name} />
        </div>
  )
}

export default Input
