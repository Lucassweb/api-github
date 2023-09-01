import { useState } from "react";
import Search from "../components/Search";
import { UserProps } from "../types/user";

import User from "../components/User";
import Error from "../components/Error";

const Home = () => {
  //Estou inicializando null, para saber quando tem usuario e quando nao tem
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  //Buscando API
  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    
    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };
    setUser(userData); //Recebendo as typagens
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <p>{user.login}</p>}{" "}
      {/*  Fazendo verificação se usuário existi */}
      {user && <User {...user} />}
      {error && <Error/>}
    </div>
  );
};

export default Home;
