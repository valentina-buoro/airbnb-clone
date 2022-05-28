
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';


function App() {
  const cardData = data.map(el =>{
    return (
      <Card 
        key={el.id}
        image ={el.coverImg}
        rating ={el.stats.rating}
        reviewCount ={el.stats.reviewCount}
        country ={el.location}
        price ={el.price}
        title ={el.title}
        openSpots={el.openSpots}
      />
    )
  })
  return (
    
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cardData}
      </section>
      
      
      
        

    </div>
  );
}

export default App;
