import './App.css';
import { Button } from './components/Button'
import { themeClass } from './tokens/theme.css';

function App() {
  return (
    <div className={`${themeClass} app`}>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
