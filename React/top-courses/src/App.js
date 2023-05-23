import { useEffect, useState } from 'react';
import Cards from './components/Cards';
import Filter from './components/Filter';
import NavBar from './components/NavBar';
import { filterData, apiUrl } from './data';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function getCourses() {
    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
      console.log(output.data);
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
    setLoading(false);
  }
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <Cards courses={courses} category={category} />
        )}
      </div>
    </div>
  );
}

export default App;
