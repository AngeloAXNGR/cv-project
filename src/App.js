import './App.css';

import React from 'react';
import Form from './components/Form';
import Preview from './components/Preview';


import { FormProvider } from './contexts/FormContext';

function App() {
  return (
    <div className="app">
      <header>
        <h1 id="application-title">CV Generator</h1>
      </header>
      <div className="main-content">
          <FormProvider>
            <Form
            />
            <Preview
            />
          </FormProvider>
      </div>
    </div>
  );
}

export default App;
