
import React from 'react';
import { Grid, Button, Select, Container } from 'semantic-ui-react';
import HogTile from './Hogtile';

const HogContainer = ({ filteredHogs, handleHideHog, handleToggleGreased, greasedOnly, setSortBy }) => {
  return (
    <Container>
      <Button onClick={handleToggleGreased}>
        {greasedOnly ? 'Show All Hogs' : 'Show Only Greased Hogs'}
      </Button>
      <Select
        options={[
          { key: 'name', text: 'Sort by Name', value: 'name' },
          { key: 'weight', text: 'Sort by Weight', value: 'weight' },
        ]}
        onChange={(e, { value }) => setSortBy(value)}
      />
      <Grid columns={2}>
        {filteredHogs.map((hog) => (
          <Grid.Column key={hog.name}>
            <HogTile hog={hog} onHideHog={handleHideHog} />
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  );
};

export default HogContainer;
