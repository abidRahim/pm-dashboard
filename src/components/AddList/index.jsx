import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../Input';
import { addList } from '../../store/board.slice';
import generateId from '../../utils/generateId';

const AddList = () => {
  const dispatch = useDispatch();
  const [listTitle, setListTitle] = useState('');
  const [errorMsg, setErrMsg] = useState('');

  const onInputChange = event => {
    const { value } = event.target;
    setListTitle(value);
    setErrMsg('');
  };

  const onAddListClick = () => {
    if (listTitle !== '') {
      dispatch(addList({ id: generateId(6), title: listTitle, cards: [] }));
      setListTitle('');
    } else {
      setErrMsg('Please add a title');
    }
  }

  const handleKeyPress = event => {
    if(event.key === 'Enter'){
      onAddListClick();
    }
  }

  return (
    <>
      <div className="card">
        <Input
          id="list"
          value={listTitle}
          onChange={onInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter List Title"
        />
      </div>
      {errorMsg !== '' && <p className="error">{errorMsg}</p>}
      <button className="btn" onClick={onAddListClick}>Add List</button>
    </>
  )
}

export default AddList;
