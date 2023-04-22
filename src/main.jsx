import React from "react";
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.css"
import App from "./App"
import store from "./redux_store/configureStore"
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<App/>
</Provider>

)