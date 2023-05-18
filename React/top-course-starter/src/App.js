import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { filterData, apiUrl } from './data';
import { toast } from 'react-toastify';

const App = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      } catch (err) {
        toast.error('SomeThing went wrong');
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <NavBar />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
    </div>
  );
};

export default App;
