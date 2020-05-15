import React from 'react'
import {StateProvider} from "../src/store";

// This default export is required in a new `pages/_app.js` file.
const App = ({Component, pageProps}) => {

    return (
        <StateProvider>
            <Component {...pageProps} />
        </StateProvider>

    )
};

export default App
