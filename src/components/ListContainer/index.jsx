import { useSelector } from 'react-redux';
import List from '../List';
import NewList from '../NewList';
import './style.css';


const ListContainer = () => {
  const lists = useSelector((state) => state.board.lists);

  return (
    <section className='list-container'>
      {lists.map((listProps, listIndex) => 
        <List key={listProps.id} listIndex={listIndex} {...listProps} />
      )}
      <NewList />
    </section>
  )
}

export default ListContainer;
