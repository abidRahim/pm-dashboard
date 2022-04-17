const DragDrop = ({ onItemDropped, children }) => {

  const handleDragOver = event => {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  const handleDrop = event => {
    event.stopPropagation();
    const droppedItem = event.dataTransfer.getData("drag-item");
    event.currentTarget.style.opacity = 1;
    event.currentTarget.style.border = '';
    if (droppedItem) {
      onItemDropped(JSON.parse(droppedItem));
    }

    return false;
  }

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      {children}
    </div>
  );
}

export default DragDrop;
