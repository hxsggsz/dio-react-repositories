import App from './App'
import React from 'react'
import '../styles/globals.css'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
