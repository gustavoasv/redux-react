import { useAppSelector } from "./redux/hooks/useAppSelector";

function App() {
  const user = useAppSelector(state => state.user);

  return (
    <div>
      Meu nome é: {user.name} e tenho {user.idade} anos<br></br>
      Tema: ...
      <hr />
      <input type="text" name="" id="" />
      <hr />
      <button>switch theme</button>
    </div>
  );
}

export default App;
