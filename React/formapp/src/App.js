// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  return <Form />;
}

/*
function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    isVisible: true,
    mode: '',
    favCar: '',
  });
  function changeHandler(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prevForm) => {
      return { ...prevForm, [name]: type === 'checkbox' ? checked : value };
    });
    // console.log(formData);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log('printing form data');
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="firstname"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="lastname"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          onChange={changeHandler}
          value={formData.email}
        />
        <br />
        <br />
        <textarea
          placeholder="enter comments"
          onChange={changeHandler}
          name="comments"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am i Visible?</label>
        <br />
        <br />
        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            name="mode"
            onChange={changeHandler}
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === 'Online-Mode'}
          />
          <label htmlFor="Online-Mode">Online Mode</label>
          <input
            type="radio"
            name="mode"
            onChange={changeHandler}
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === 'Offline-Mode'}
          />
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>
        <label htmlFor="favCar">Tell Me your favourite color</label>

        <select onChange={changeHandler} name="favCar" id="favCar">
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="Tharr">Tharr</option>
          <option value="Legender">Legender</option>
          <option value="defender">Defender</option>
        </select>
        <br />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}
*/
export default App;
