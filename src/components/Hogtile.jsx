import React, { useState } from 'react';
import { Card, Button } from 'semantic-ui-react';

const HogTile = ({ hog, onHideHog }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(prev => !prev);
  };

  return (
    <Card>
      <Card.Content onClick={handleClick}>
        <Card.Header>{hog.name}</Card.Header>
        <Card.Description>
          <img src={hog.image} alt={hog.name} style={{ width: '100%', height: 'auto' }} />
        </Card.Description>
      </Card.Content>
      {showDetails && (
        <Card.Content extra>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight} kg</p>
          <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
          <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
          <Button onClick={() => onHideHog(hog.name)} color='red'>Hide</Button>
        </Card.Content>
      )}
    </Card>
  );
};

export default HogTile;
