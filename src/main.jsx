import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const {VITE_CLERK_PUBLISHABLE_KEY} = import.meta.env

const publishablekey = VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={publishablekey}>
      <App />
    </ClerkProvider>
  </StrictMode>,
)
