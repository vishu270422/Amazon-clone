import { useStateValue } from './StateProvider';
import Rating from './Rating';
const Card = (props) => {
  const { title, price, rating, imageURL } = props;
  const { myReducer } = useStateValue();
  const [ , dispatch] = myReducer;
  const addToCard = (selectedValue) => {
    let timeStamp =  new Date().getTime();
    selectedValue = {...selectedValue, id:timeStamp};
    dispatch({
      type:'ADD_TO_CART',
      payload: selectedValue
    });
  }
  return(
    <div className='card'>
      <p className='title'>{ title }</p>
      <p className='price'>Rs{ price }</p>
      <p className='starRating'>{ <Rating rate={rating} /> }</p>
      <div className='imageHolder'>
        <img src={imageURL} alt=''/>
        <br/>
        <br/>
        <button onClick={()=>addToCard(props)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Card;