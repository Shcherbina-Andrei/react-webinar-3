import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Basket from '../basket';
import { plural } from '../../utils';

function Controls({ basket, onDeleteItemFromBasket }) {
  const [isModalActive, setIsActiveModal] = useState(false);

  const totalPrice = basket.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div className='Controls'>
      <span>В корзине:</span>
      <span>
        {basket.length === 0 ? (
          <strong>пусто</strong>
        ) : (
          <strong>
            {basket.length}{' '}
            {plural(basket.length, {
              zero: 'товаров',
              one: 'товар',
              few: 'товара',
              many: 'товаров',
            })}{' '}
            / {totalPrice} &#8381;
          </strong>
        )}
      </span>
      <button onClick={() => setIsActiveModal(true)}>Перейти</button>
      {isModalActive && (
        <Basket
          basket={basket}
          onDeleteItemFromBasket={onDeleteItemFromBasket}
          onCloseBasket={setIsActiveModal}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
}

Controls.propTypes = {
  basket: PropTypes.arrayOf(Object),
  onDeleteItemFromBasket: PropTypes.func,
};

export default React.memo(Controls);
