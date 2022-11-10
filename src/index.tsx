import ReactDOM from "react-dom/client";
import reportWebVitals from "reportWebVitals";
import {register} from "serviceWorkerRegistration";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {App} from "app";
import "index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <ChakraProvider theme={extendTheme({config: {initialColorMode: "light", useSystemColorMode: false}})}>
        <App />
    </ChakraProvider>
);

reportWebVitals();
register();
