/* eslint-disable @typescript-eslint/no-unused-vars */

import {createContext} from "react"

const ThemeProvider = createContext({
    theme: "",
    setTheme: (_: string) => {}
})

export default ThemeProvider;