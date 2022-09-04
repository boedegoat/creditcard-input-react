import { useState } from 'react'

const CcNumberInput = ({ onCcNumberChange, className, ...props }) => {
  const [ccNumber, setCcNumber] = useState('')

  const autoAddSpaces = (e) => {
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

    onCcNumberChange(newValue)
    setCcNumber(newValue)
  }

  const preventNotNumber = (e) => {
    // if the key pressed is not a number key
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault(); // do nothing
    }
  }

  return (
    <input
      type="text"
      value={ccNumber}
      onChange={autoAddSpaces}
      onKeyPress={preventNotNumber}
      maxLength={19}
      {...props}
    />
  )
}

export default CcNumberInput