import { useState } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import SelectedBeastModal from './components/SelectedBeastModal';
import allBeasts from './consts/hornedBeast.json';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [displayModal, setDisplayModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState({});


  function displayAsModal(name) {
    const beastWithName = allBeasts.find(beast => beast.title === name);
    setSelectedBeast(beastWithName);
    setDisplayModal(true);
  }

  function handleClose() {
    setDisplayModal(false);
  }

  return (
    <div className="App">
      <Header />
      <Gallery
        allBeasts={allBeasts}
        displayAsModal={displayAsModal}
      />
      <SelectedBeastModal
        selectedBeast={selectedBeast}
        show={displayModal}
        handleClose={handleClose}
      />
      <Footer />
    </div>
  );
}

export default App;