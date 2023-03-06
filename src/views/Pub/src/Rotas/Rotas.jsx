import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Template from '../components/Template/Template';
import Home from '../Telas/Home'




class Rotas extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Template>
                    <Routes>
                        <Route path='/listar' element={<Home/>} />
                        <Route path='/' element={<Home/>} />
                    </Routes>
                </Template>
            </BrowserRouter>
        )
    }
}

export default Rotas