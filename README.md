# creditcard-input-react

✨ A simple and straightforward react creditcard input component.

## Feature

-   Auto add space every 4 digits
-   Remove inputs other than numbers
-   Easy to customize to your own (cuz it's unstyled)

## Install

```
npm i creditcard-input-react
```

## Usage

👉 ccNumber : credit card number

```jsx
import { CcNumberInput } from 'creditcard-input-react'

const App = () => {
    return (
        <main>
            <CcNumberInput
                className='creditcard-number-input'
                placeholder='e.g 1234 1234 1234 1234'
                onCcNumberChange={(ccNumber) => console.log(ccNumber)}
            />
        </main>
    )
}
```

you can also store the ccNumber into your own state

```jsx
import { useState } from 'react'
import { CcNumberInput } from 'creditcard-input-react'

const App = () => {
    const [ccNumber, setCcNumber] = useState('')

    return (
        <main>
            <CcNumberInput
                onCcNumberChange={(newCcNumber) => setCcNumber(newCcNumber)}
            />
            <div>{ccNumber}</div>
        </main>
    )
}
```

## Licence

MIT
