
import React, { useState } from 'react';
import Nav from './Nav';
import hogsData from '../porkers_data'; 
import HogContainer from './HogContainer'; 
import AddHogForm from './AddHogForm';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'; 

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const filteredHogs = hogs
    .filter(hog => !greasedOnly || hog.greased)
    .filter(hog => !hiddenHogs.includes(hog.name))
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.weight - b.weight;
    });

  const handleToggleGreased = () => setGreasedOnly(prev => !prev);
  const handleHideHog = (name) => {
    setHiddenHogs(prev => [...prev, name]);
  };

  const handleAddHog = (newHog) => {
    setHogs(prev => [...prev, newHog]);
  };

  return (
    <Container className="App">
      <Nav />
      <HogContainer 
        filteredHogs={filteredHogs} 
        handleHideHog={handleHideHog} 
        handleToggleGreased={handleToggleGreased} 
        greasedOnly={greasedOnly}
        setSortBy={setSortBy}
      />
      <AddHogForm onAddHog={handleAddHog} /> 
    </Container>
  );
}

export default App;
