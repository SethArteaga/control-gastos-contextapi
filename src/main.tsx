import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BudgteProvider } from './context/BudgetContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BudgteProvider>
      <App />
    </BudgteProvider>
  </React.StrictMode>,
)
