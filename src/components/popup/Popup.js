import React from 'react'

const Popup = (props) => {
    const {
        title,
        onCancel,
        onSave,
        onChange,
        inputValue,
    } = props;

    return (
        <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-1/2 p-4 bg-white border border-gray-300 rounded-md shadow-lg">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <div className="mb-4">
                <form className=' w-full border-solid border-2 border-black p-1'>
                    <input className=' w-full border-none outline-none' onChange={onChange} value={inputValue} />
                </form>
            </div>
            <div className="flex justify-end gap-1">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={onCancel}>
                    Cancel
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={onSave}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default Popup
