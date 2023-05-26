import { useCallback } from 'react';
import useSelector from '../../store/use-selector';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BasketTool from '../basket-tool';
import './style.css';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const select = useSelector(state => ({
    list: state.catalog.list,
    totalItems: state.catalog.totalItems,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const callbacks = {
    // Открытие модалки корзины
    openModalBasket: useCallback(() => navigate('/basket', {state : {background: location} })),
  }

  return (
    <div className='Navigation'>
      <Link className='Navigation_link' to='/'>Главная</Link>
      <BasketTool onOpen={callbacks.openModalBasket} sum={select.sum} amount={select.amount} />
    </div>
  );
}

export default Navigation;
