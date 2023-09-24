import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function HeaderView() {
  const { user, logOutUser } = useContext(UserContext);
  return (
    <>
      <header>
        <h3>
          <img src="crypto.png" />
          <span>Crypto Trading</span>
        </h3>
        {user && (
          <div>
            <p className=" badge bg-primary mt-3">{user.email}</p>
            <button onClick={logOutUser}>Cikis Yap</button>
          </div>
        )}
      </header>
    </>
  );
}
