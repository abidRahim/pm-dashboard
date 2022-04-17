import { useDispatch } from 'react-redux';
import { removeItem } from '../../store/board.slice';
import './style.css';

const RowTitle = ({ type, title, listIndex, cardIndex }) => {
  const dispatch = useDispatch();

  const onDeleteClick = () => {
    dispatch(removeItem({ type, listIndex, cardIndex }));
  };

  return (
    <div className='title'>
      <h3 className={`${type}-title`}>{title}</h3>
      <button className='icon' onClick={onDeleteClick}>X</button>
    </div>
  )
};

export default RowTitle;
