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
        const value = e.target.value.replace(/[a-zA-Z]/g, '')

        const valueNoSpace = value.replace(/ /g, '')
        const ccNumberNoSpace = ccNumber.replace(/ /g, '')

        let newValue = value

        if (valueNoSpace.length % 4 == 0 && valueNoSpace.length < 16) {
            if (valueNoSpace.length > ccNumberNoSpace.length) {
                newValue += ' '
            } else {
                newValue = value.slice(0, value.length - 1)
            }
        }

        onCcNumberChange && onCcNumberChange(newValue)
        setCcNumber(newValue)
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
