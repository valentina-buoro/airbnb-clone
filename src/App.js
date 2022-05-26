
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        image = 'katie.png'
        rating = '5.0'
        reviewCount = '6'
        country = 'Canada'
        price = {136}
        title = 'Life lessons with Katie Zaferes' />
        

    </div>
  );
}

export default App;
