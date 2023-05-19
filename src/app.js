import React, {useCallback} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;

  const basket = store.getState().basket;

  const callbacks = {
    onAddItemToBasket: useCallback((item) => {
      store.addItemToBasket(item);
    }, [store]),
    
    onDeleteItemFromBasket: useCallback((item) => {
      store.deleteItemFromBasket(item);
    })
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls basket={basket} onDeleteItemFromBasket={callbacks.onDeleteItemFromBasket}/>
      <List list={list}
            onAddItemToBasket={callbacks.onAddItemToBasket}
            onDeleteItemFromBasket={callbacks.onDeleteItemFromBasket}/>
    </PageLayout>
  );
}

export default App;
