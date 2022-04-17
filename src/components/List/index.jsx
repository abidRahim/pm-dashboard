import { useDispatch } from 'react-redux';
import AddCard from '../AddCard';
import Card from '../Card';
import DragDrop from '../DragDrop';
import RowTitle from '../RowTitle';
import { onItemDrop } from '../../store/board.slice';

const List = ({ listIndex, title, cards }) => {
  const dispatch = useDispatch();

  const onItemDropped = (dragPosition, swapPosition) => {
    const payload = { dragPosition, swapPosition };
    
    dispatch(onItemDrop(payload));
  }

  return (
    <ul className="list">
      <RowTitle type="list" title={title} listIndex={listIndex} />
      {cards.map((cardProps, cardIndex) => 
        <DragDrop key={cardProps.id} onItemDropped={item => onItemDropped(item, { listIndex, cardIndex })}>
          <Card cardIndex={cardIndex} listIndex={listIndex} {...cardProps} />
        </DragDrop>
      )}
      <DragDrop onItemDropped={item => onItemDropped(item, { listIndex })}>
        <AddCard listIndex={listIndex} />
      </DragDrop>
    </ul>
  )
}

export default List;
