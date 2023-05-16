import './App.css';
import Card from './components/Card';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import NewProduct from './components/NewProduct';
import Products from './components/Products';

function App() {
  const items = [
    {
      itemName: 'Nirma',
      date: new Date('2023 04 11'),
    },
    {
      itemName: 'SurfExcel',
      date: new Date('2023 04 11'),
    },
    {
      itemName: 'Tide',
      date: new Date('2023 04 11'),
    },
    {
      itemName: '555',
      date: new Date('2023 04 11'),
    },
  ];

  function printProductData(data) {
    console.log(data);
  }
  return (
    <>
      <NewProduct printProduct={printProductData} />
      <Products items={items} />;
    </>
  );
}

export default App;
