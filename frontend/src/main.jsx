import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { useAlert, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <AlertProvider template={AlertTemplate}>
 <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
     
    <App /> </PersistGate>
    </Provider></AlertProvider>
  </StrictMode>
)
