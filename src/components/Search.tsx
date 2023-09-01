type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import classes from './Search.module.css'

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  // const handleKeyDown = (e) => {
    
  // }

  return (
    <div className={classes.search}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}//Quando usuario for digitar no input
          // onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          {" "}
          {/*Quando for clicar, imprimirá nome do usuário */}
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
