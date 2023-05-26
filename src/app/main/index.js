import {memo, useCallback, useEffect, useState} from 'react';
import Item from "../../components/item";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import List from "../../components/list";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import Pagination from '../../components/pagination';
import Navigation from '../../components/navigation';

function Main() {

  const store = useStore();

  const [currentPaginationPage, setCurrentPaginationPage] = useState(0);

  useEffect(() => {
    store.actions.catalog.load(currentPaginationPage);
  }, [currentPaginationPage]);

  const select = useSelector(state => ({
    list: state.catalog.list,
    totalItems: state.catalog.totalItems,
    amount: state.basket.amount,
    sum: state.basket.sum
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
  }

  const renders = {
    item: useCallback((item) => {
      return <Item item={item} onAdd={callbacks.addToBasket}/>
    }, [callbacks.addToBasket]),
  };

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <div>
        <Navigation />
        <List list={select.list} renderItem={renders.item}/>
      </div>
      <Pagination totalItems={select.totalItems} currentPage={currentPaginationPage} setCurrentPage={setCurrentPaginationPage} />
    </PageLayout>

  );
}

export default memo(Main);
