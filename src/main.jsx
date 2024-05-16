import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import MyContext from './context/MyContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MyContext>
            <App />
        </MyContext>
    </BrowserRouter>
)
