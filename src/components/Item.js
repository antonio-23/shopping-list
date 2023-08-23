import { X } from '@phosphor-icons/react';

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <div>
        <input type='checkbox' value={item.packed} onChange={() => onToggleItem(item.id)} />
        <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
          {item.quantity} {item.description}
        </span>
      </div>

      <div>
        <button onClick={() => onDeleteItem(item.id)}>
          <X size={24} />
        </button>
      </div>
    </li>
  );
}

export default Item;
