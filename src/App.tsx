import { ChangeEvent, useEffect, useState } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";
import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData <Monster[]> ("https://jsonplaceholder.typicode.com/users")
      setMonsters(users)
    }
    fetchUsers()
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox className="monsters-search-box" onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
