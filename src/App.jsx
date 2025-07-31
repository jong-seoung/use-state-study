import Counter from "./components/Counter";
import InputText from "./components/InputText";
import ItemAdd from "./components/ItemAdd";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center gap-10">
      <Counter />
      <InputText />
      <ItemAdd />
    </div>
  );
};

export default App;
