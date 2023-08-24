function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  if (!numItems)
    return (
      <footer className='stats'>
        <em>Start adding some items to your shopping list 📝</em>
      </footer>
    );

  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? `You got everything! 👏`
          : `🛒 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%) `}
      </em>
    </footer>
  );
}

export default Stats;
