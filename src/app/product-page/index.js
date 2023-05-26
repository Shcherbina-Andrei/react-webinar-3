import { useParams } from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import { useCallback, useEffect } from 'react';
import Head from "../../components/head";
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import Navigation from '../../components/navigation';
import './style.css';
import { numberFormat } from '../../utils';

function ProductPage() {
  const { id } = useParams();
  const store = useStore();
  
  const select = useSelector(state => ({
    currentItem: state.catalog.currentProduct
  }));

  
  useEffect(() => {
    store.actions.catalog.loadCurrentProduct(id);
  }, [id])
  
  if (!select.currentItem) {
    return <p>loading...</p>
  }

  const addToBasket = _id => store.actions.basket.addToBasket(_id);

  return (
    <PageLayout>
      <Head title={select.currentItem.title} />
      <div>
        <Navigation />
      </div>
      <div className='Product'>
        <p className='Product-field'>
          {select.currentItem.description}
        </p>
        <p className='Product-field'>
          Страна производитель: <span className='Product-cell'>{select.currentItem.madeIn.title}</span>
        </p>
        <p className='Product-field'>
          Категория: <span className='Product-cell'>{select.currentItem.category.title}</span>
        </p>
        <p className='Product-field'>
          Год выпуска:  <span className='Product-cell'>{select.currentItem.edition}</span>
        </p>
        <p className='Product-field Product-field_price'>
          <span className='Product-cell'>Цены: {numberFormat(select.currentItem.price)} ₽</span>
        </p>
        <button onClick={() => addToBasket(select.currentItem._id)}>Добавить</button>
      </div>
    </PageLayout>
  )
}

export default ProductPage;