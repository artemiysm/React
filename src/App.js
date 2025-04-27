import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Импорт компонентов
import Header from "./components/Header";
import Footer from "./components/Footer";

// Импорт страниц
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Импорт провайдера авторизации
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Защищенная страница профиля */}
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            
            {/* Страницы входа и регистрации */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

// Компонент для защищенных маршрутов
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  // Если пользователя нет — редирект на логин
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Иначе показываем защищенный компонент
  return children;
};

export default App;
