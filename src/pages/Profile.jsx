import { useAuth } from "../contexts/AuthContext";
import "../styles/Profile.css"; // Подключаем стили для профиля

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="profile-page">
        <h1 className="profile-warning">Пожалуйста, войдите в аккаунт</h1>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h1 className="profile-title">Профиль пользователя</h1>
        <div className="profile-info">
          <p><strong>Имя пользователя:</strong> {user.username}</p>
          {/* Можно добавить больше данных */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
