import React from 'react';
import { Sepolia } from "@thirdweb-dev/chains";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import App from './App';
import './index.css';
import { StateContextProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <ThirdwebProvider activeChain={Sepolia} clientId='e3eb567875625cb72ac075e137cdd1da'>
        <BrowserRouter>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </BrowserRouter>
    </ThirdwebProvider>

);