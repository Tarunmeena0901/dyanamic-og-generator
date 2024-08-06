
export function InputField({ onInputChange, value, placeholder }: {
    onInputChange: React.Dispatch<React.SetStateAction<string>>,
    value: string,
    placeholder: string
}) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            className='w-full h-10 border-2 border-neutral-500 p-4 rounded text-black'
            onChange={(e) => onInputChange(e.target.value)}
        />
    )
}