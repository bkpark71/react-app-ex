import Button from './Button';
import Input from './Input';

function App() {
  return (
    <div>
      <h1>Hello, my react app !</h1>
      <Button text="start" />
      <Button text="medium" />
      <Button text={16} />
      <Input />
    </div>
  );
}

export default App;
