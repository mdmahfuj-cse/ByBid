
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Header/Navbar';
import Banner from './components/Banner/Banner';
import ActiveAuctions from './components/ActiveAuctions/ActiveAuctions';
import Favorites from './components/Favorites/Favorites';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  const [auctions, setAuctions] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Fetch data from public/items.json
  useEffect(() => {
    fetch('/items.json')
      .then(res => res.json())
      .then(data => {
        setAuctions(data);
      })
      .catch(err => console.error("Failed to fetch auction items:", err));
  }, []);

  const handleAddToFavorites = (item) => {
    // Prevent adding the same item twice
    if (!favorites.find(fav => fav.id === item.id)) {
      setFavorites(prevFavorites => [...prevFavorites, item]);
      toast.success(`${item.title} added to favorites!`);
    }
  };

  const handleRemoveFromFavorites = (itemToRemove) => {
    const updatedFavorites = favorites.filter(item => item.id !== itemToRemove.id);
    setFavorites(updatedFavorites);
    toast.error(`${itemToRemove.title} removed from favorites.`);
  };

  return (
    <>
      <Navbar>

      </Navbar>
      <Banner />
      <main className="container mx-auto px-4 my-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ActiveAuctions 
                auctions={auctions} 
                onAddToFavorites={handleAddToFavorites} 
                favorites={favorites}
            />
          </div>
          <div className="lg:col-span-1">
            <Favorites favorites={favorites} onRemoveFromFavorites={handleRemoveFromFavorites} />
          </div>
        </div>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
}

export default App;

