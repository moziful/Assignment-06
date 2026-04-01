import './App.css'
import Heading from './components/heading';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Stats from './components/stats';
import Card from './components/card';



function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Stats />
    <Heading heading="Premium Digital Tools" subheading="Choose from our curated collection of premium digital products designedto boost your productivity and creativity." />
    <div className='grid grid-cols-3 gap-6 p-50'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    </>
  );
}

export default App
