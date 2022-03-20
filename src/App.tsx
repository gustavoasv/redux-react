import { useAppSelector } from "./redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { setName, setAge } from "./redux/reducers/userReducer";
import React from "react";
import { setThemeStatus } from "./redux/reducers/themeReducer";

function App() {
  const user = useAppSelector((state) => state.user);
  const theme = useAppSelector(state => state.theme)
  const dispatch = useDispatch();
  const switchTheme = (newTheme: string) => dispatch(setThemeStatus(newTheme))

  function handleNameInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setName(e.target.value));
  }

  function handleAgeInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setAge(e.target.value));
  }

  function handleSwitchTeme() {
    switchTheme(theme.status === 'light' ? 'dark' : 'light')
  }

  return (
    <div style={{
      backgroundColor: theme.status === 'light' ? '#000' : '#FFF',
      color: theme.status === 'light' ? '#FFF' : '#000'
    }}>
      Meu nome é: {user.name} e tenho {user.idade} anos<br></br>
      Tema: {theme.status}
      <hr />
      <input type="text" onChange={handleNameInput} />
      <input type="number" onChange={handleAgeInput} />
      <hr />
      <button onClick={handleSwitchTeme}>switch theme</button>
    </div>
  );
}

export default App;
