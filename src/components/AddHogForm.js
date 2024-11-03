// src/components/AddHogForm.js
import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const AddHogForm = ({ onAddHog }) => {
  const [newHog, setNewHog] = useState({
    name: '',
    specialty: '',
    weight: '',
    greased: false,
    medal: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewHog(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog({ ...newHog, weight: parseFloat(newHog.weight) });
    setNewHog({ name: '', specialty: '', weight: '', greased: false, medal: '', image: '' });
  };

  return (
    <div>
      <h2>Add a New Hog</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={newHog.name}
            onChange={handleChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Specialty</label>
          <input
            type="text"
            name="specialty"
            value={newHog.specialty}
            onChange={handleChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={newHog.weight}
            onChange={handleChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>
            <input
              type="checkbox"
              name="greased"
              checked={newHog.greased}
              onChange={handleChange}
            />
            Greased
          </label>
        </Form.Field>
        <Form.Field>
          <label>Highest Medal Achieved</label>
          <input
            type="text"
            name="medal"
            value={newHog.medal}
            onChange={handleChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={newHog.image}
            onChange={handleChange}
            required
          />
        </Form.Field>
        <Button type="submit" primary>Add Hog</Button>
      </Form>
    </div>
  );
};

export default AddHogForm;
