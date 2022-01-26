import React from 'react';

import Headbar from './components/Headbar';

import GlobalStyle from '../src/styles/global';

import Routes from './routes';

const App: React.FC = () => (
    <>
        <Headbar />
        <GlobalStyle />
        <Routes/>
    </>
);

export default App;
