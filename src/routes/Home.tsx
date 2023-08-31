import { useState } from "react";
import Search from "../components/Search";
import { UserProps } from "../types/user";

const Home = () => {
  //Estou inicializando null, para saber quando tem usuario e quando nao tem
  const [user, setUser] = useState<UserProps | null>(null);

  //Buscando API
  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    const { avatar_url, login, location, followers_url, following_url } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers_url,
      following_url,
    };
    setUser(userData); //Recebendo as typagens
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <p>{user.login}</p>}{" "}
      {/*  Fazendo verificação se usuário existi */}
    </div>
  );
};

export default Home;
