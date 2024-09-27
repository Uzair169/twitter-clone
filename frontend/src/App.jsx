import { Route, Routes } from "react-router-dom"
import HomePage from './pages/home/HomePage.jsx'
import LoginPage from './pages/auth/login/LoginPage.jsx'
import SignUpPage from './pages/auth/signup/SignUpPage.jsx'
import Sidebar from './components/common/Sidebar.jsx'
import RightPanel from "./components/common/RightPanel.jsx"
import NotificationPage from './pages/notification/NotificationPage.jsx'
import ProfilePage from "./pages/profile/profilePage.jsx"

function App() {

  return (
    <div className="flex max-w-6xl mx-auto">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/notifications" element={<NotificationPage />}></Route>
        <Route path="/profile/:username" element={<ProfilePage />}></Route>
      </Routes>
      <RightPanel />
    </div>
  )
}

export default App
