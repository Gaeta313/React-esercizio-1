
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent name="Bottone" />
        <ImageComponent
          src="https://us.123rf.com/450wm/topphotoengineer/topphotoengineer1603/topphotoengineer160300054/54942382-carino-americano-shorthair-gattino-gatto.jpg?ver=6"
          alt="Il gattino che il prof si aspettava"
        />
      </header>
    </div>
  );
}

export default App;
