import React, { useState } from 'react';
import { Segment, Grid, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Segment textAlign='center'>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
          <Segment>
          <h1>Count</h1>
        <h1>{count}</h1>
        <Button 
              color='green'
              onClick={() => setCount(count + 1)}
            >
              Increment
            </Button>
            <Button 
              color='red'
              disabled={count === 0}
              onClick={() => setCount(count - 1)}
            >
              Decrement
            </Button>
            <h1>Done By: Nagam Haritha  12004670</h1>
      </Segment>
            
          </Grid.Column>
          
        </Grid.Row>
      </Grid>
      
    </Segment>
  );
}

export default Counter;
