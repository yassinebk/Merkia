import React from 'react'

// eslint-disable-next-line react/prop-types
const InputGroup = ({ onChange, value, type, name }) => {
  return (
    <div className="grid grid-cols-6 content-center w-full my-4 py-2 rounded-lg ">
      <label
        className="col-start-1 col-end-2 text-center m-auto h-fit mr-4 content-center"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        className=" col-start-2 col-end-7 reg-input h-12 border-1 border-secondary_300 py-1 px-4"
        type={type}
        value={value}
        id={name}
        onChange={onChange}
      />
    </div>
  )
}

export default InputGroup
