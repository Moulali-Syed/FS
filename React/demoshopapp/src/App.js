import './App.css';
import Card from './components/Card';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const response = [
    {
      itemName: 'Nirma',
      itemDate: '1',
      itemMonth: 'Jan',
      itemYear: '1991',
    },
    {
      itemName: 'SurfExcel',
      itemDate: '5',
      itemMonth: 'Feb',
      itemYear: '1999',
    },
    {
      itemName: '555',
      itemDate: '14',
      itemMonth: 'Mar',
      itemYear: '2000',
    },
  ];
  return (
    <Card>
      {response.map((item) => {
        return (
          <>
            <Item name={item.itemName}>Hello There From Children</Item>
            <ItemDate
              day={item.itemDate}
              month={item.itemMonth}
              year={item.itemYear}
            />
          </>
        );
      })}

      <div className="App">GOOD MORNING REACT</div>
    </Card>
  );
}

export default App;
