import { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

function App() {
  const localStorageItem = localStorage.getItem('items');
  const localStorageObject = JSON.parse(localStorageItem) || [];
  const [items, setItems] = useState(localStorageObject);

  const updateLocalStorage = function (updateItems) {
    localStorage.setItem('items', JSON.stringify(updateItems));
  };

  function handleAddItem(item) {
    const addItem = [...items, item];
    setItems(addItem);
    updateLocalStorage(addItem);
  }

  function handleDeleteItem(id) {
    const updateItem = items.filter((item) => item.id !== id);
    setItems(updateItem);
    updateLocalStorage(updateItem);
  }

  function handleToggleItem(id) {
    const toggleItem = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(toggleItem);
    updateLocalStorage(toggleItem);
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to delete all items?');

    if (confirmed) {
      localStorage.clear();
      setItems([]);
    }
  }

  return (
    <div className='app'>
      <Logo />
      <Form items={items} onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
