import { useEffect, useRef } from "react";

const Drag = ({ dataItem, children }) => {
  const ref = useRef(null);
  const handleDragStart = event => {
    ref.current.style.opacity = 0.4;
    event.dropEffect = 'copyMove';
    event.dataTransfer.setData("drag-item", dataItem);
  }

  const handleDragOver = () => {
    ref.current.style.outline = '3px dotted #676767';
    return false;
  }

  const handleDragLeave = () => {
    ref.current.style.outline = '';
  }

  const handleDragEnd = () => {
    ref.current.style.outline = '';
    ref.current.style.opacity = 1;
  }

  const handleDragExit = () => {
    ref.current.style.outline = '';
  }

  useEffect(() => {
    ref.current.style = ''
  });

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDragExit={handleDragExit}
      ref={ref}
    >
      {children}
    </div>
  )
}

export default Drag;
