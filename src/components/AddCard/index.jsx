import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../Input';
import { addCards } from '../../store/board.slice';
import generateId from '../../utils/generateId';

const AddCard = ({ listIndex }) => {
  const dispatch = useDispatch();

  const [cardTitle, setCardTitle] = useState('');
  const [cardContent, setCardContent] = useState('');
  const [errorMsg, setErrMsg] = useState('');

  const onInputChange = event => {
    const { id, value } = event.target;

    switch (id) {
      case 'title':
        setCardTitle(value);
        break;
      case 'content':
        setCardContent(value);
        break;
      default:
        break;
    }

    setErrMsg('');
  };

  const onAddCardClick = () => {
    if (cardTitle !== '') {
      dispatch(addCards({
        listIndex, 
        card: { id: generateId(6), title: cardTitle, content: cardContent }
      }));
      setCardTitle('');
      setCardContent('');
    } else {
      setErrMsg('Please add a title');
    }
  };

  const handleKeyPress = event => {
    if(event.key === 'Enter'){
      onAddCardClick();
    }
  }

  return (
    <>
      <div className="card">
        <Input
          id="title"
          value={cardTitle}
          onChange={onInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter Title"
        />
        <Input
          id="content"
          value={cardContent}
          onChange={onInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter the text of this card..."
        />
      </div>
      {errorMsg !== '' && <p className="error">{errorMsg}</p>}
      <button className="btn" onClick={onAddCardClick} >Add Card</button>
    </>
  )
}

export default AddCard;
