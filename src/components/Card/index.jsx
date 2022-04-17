import Drag from '../Drag';
import RowTitle from '../RowTitle';
import './style.css';

const Card = ({ listIndex, cardIndex, content, title, id }) => {
  const dragPosition = {
    draggedListIndex: listIndex,
    dragItemId: id
  };

  return (
    <Drag dataItem={JSON.stringify(dragPosition)}>
      <li className="card">
        <RowTitle type="card" title={title} listIndex={listIndex} cardIndex={cardIndex} />
        <p className="text">{content}</p>
      </li>
    </Drag>
  )
};

export default Card;
