import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AuthShell } from './components/auth/AuthShell'
import { AuthShowcasePanel } from './components/auth/AuthShowcasePanel'
import { ForgotPasswordScreen } from './pages/auth/ForgotPasswordScreen'
import { LoginScreen } from './pages/auth/LoginScreen'
import { PasswordResetScreen } from './pages/auth/PasswordResetScreen'
import { SignupScreen } from './pages/auth/SignupScreen'

function App() {
  const location = useLocation()

  return (
    <AuthShell showcase={<AuthShowcasePanel />}>
      <div key={location.pathname} className="auth-route-transition h-full w-full">
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
          <Route path="/reset-password" element={<PasswordResetScreen />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </AuthShell>
  )
}

export default App
