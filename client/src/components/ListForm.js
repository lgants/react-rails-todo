import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default function ListForm() {
  return (
    <div>
      <form>
        <FormGroup>
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter text"
          />
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
