import { useState } from 'react';
import Button from './Button';

function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const id = crypto.randomUUID();

    const newItem = {
      id,
      description,
      quantity,
      packed: false,
    };

    onAddItem(newItem);

    setQuantity(1);
    setDescription('');
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need to buy?</h3>

      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type='text'
        placeholder='I need...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default Form;
