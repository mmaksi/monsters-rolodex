import { useEffect, useState } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";
import { selectSearchField } from "./store/searchField/searchField.selector";
import { fetchMonstersPendingAsync } from "./store/robots/monsters.action";
import { useDispatch, useSelector } from "react-redux";
import { selectMonsters } from "./store/robots/monsters.selector";
import { setSearchFieldAction } from "./store/searchField/searchField.action";

const App = () => {
  const dispatch = useDispatch();

  const monsters = useSelector(selectMonsters)
  const searchField = useSelector(selectSearchField)

  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect (() => {
    dispatch(fetchMonstersPendingAsync());
  }, [dispatch])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    dispatch(setSearchFieldAction(event.target.value.toLocaleLowerCase()));
  };

  return (
    <div className="App">
      <h1 className="app-title">MONSTERS ROLODEXXX</h1>
      <SearchBox className="monsters-search-box" onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
