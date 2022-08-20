import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";


function App() {
    return (
        <BrowserRouter>
            <AppLayout  body={undefined}/>
        </BrowserRouter>
    );
}

export default App;
