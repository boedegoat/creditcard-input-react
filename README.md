# creditcard-input-react

✨ A simple and straightforward react creditcard input component.

## Install

```
npm i creditcard-input-react
```

## Usage

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

## Feature

-   Auto add space every 4 digits
-   Removes other input other than number
-   Easy to customize to your own (cuz it's unstyled)

## Licence

MIT
