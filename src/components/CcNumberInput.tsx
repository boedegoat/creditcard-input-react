import { useState } from 'react'

interface CcNumberInputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    onCcNumberChange?: (ccNumber: string) => void
}

const CcNumberInput = ({ onCcNumberChange, ...props }: CcNumberInputProps) => {
    const [ccNumber, setCcNumber] = useState('')

    const autoAddSpaces: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const filteredValue = e.target.value.replace(/[a-zA-Z ]/g, '')
        const valueWithSpaces = filteredValue.match(/.{1,4}/g)?.join(' ') || ''
        onCcNumberChange && onCcNumberChange(valueWithSpaces)
        setCcNumber(valueWithSpaces)
    }

    const preventNotNumber: React.KeyboardEventHandler<HTMLInputElement> = (
        e
    ) => {
        // if the key pressed is not a number key
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault() // do nothing
        }
    }

    return (
        <input
            type='text'
            value={ccNumber}
            onChange={autoAddSpaces}
            onKeyPress={preventNotNumber}
            maxLength={19}
            {...props}
        />
    )
}

export default CcNumberInput
