import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    country: 'India',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: '',
  });

  function changeHandler(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log('finally printing form data');
    console.log(formData);
  }
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="fname">FirstName</label>
          <br />
          <input
            type="text"
            placeholder="Apple"
            name="fname"
            id="fname"
            value={formData.fname}
            onChange={changeHandler}
            className="outline"
          />
        </div>
        <div>
          <label htmlFor="lname">LastName</label>
          <br />
          <input
            type="text"
            placeholder="Shimla"
            name="lname"
            id="lname"
            value={formData.lname}
            onChange={changeHandler}
            className="outline"
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            type="text"
            placeholder="Shimla"
            name="email"
            id="email"
            value={formData.email}
            onChange={changeHandler}
            className="outline"
          />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <br />
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={changeHandler}
            className="outline"
          >
            <option value="india">India</option>
            <option value="us">United States</option>
            <option value="canada">Canada</option>
            <option value="mexico">Mexico</option>
          </select>
        </div>

        <div>
          <label htmlFor="street">Street Address</label>
          <br />
          <input
            type="text"
            placeholder="1234 address"
            name="street"
            id="street"
            value={formData.street}
            onChange={changeHandler}
            className="outline"
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <br />
          <input
            type="text"
            placeholder="Mumbai"
            name="city"
            id="city"
            value={formData.city}
            onChange={changeHandler}
            className="outline"
          />
        </div>
        <div>
          <label htmlFor="state">State/Province</label>
          <br />
          <input
            type="text"
            placeholder="Maharashtra"
            name="state"
            id="state"
            value={formData.state}
            onChange={changeHandler}
            className="outline"
          />
        </div>
        <div>
          <label htmlFor="zip">Postal Code</label>
          <br />
          <input
            type="text"
            placeholder="000000"
            name="zip"
            id="zip"
            value={formData.postalCode}
            onChange={changeHandler}
            className="outline"
          />
        </div>

        <fieldset>
          <legend>By Email</legend>
          <div className="flex ">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comment on a posting</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when candidate applies for a job</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when candidate accepts or rejects an offer</p>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone</p>

          <input
            type="radio"
            name="pushNotifications"
            id="pushEveryThing"
            value="everything"
            onChange={changeHandler}
          />

          <label htmlFor="pushEveryThing">EveryThing</label>
          <br />
          <input
            type="radio"
            name="pushNotification"
            id="nopushnotify"
            value="No Push Notifications"
            onChange={changeHandler}
          />

          <label htmlFor="nopushnotify">No Push Notifications</label>
          <br />
          <input
            type="radio"
            name="pushNotification"
            id="pushEmail"
            value="Same as email"
            onChange={changeHandler}
          />

          <label htmlFor="pushEmail">Same as Email</label>
        </fieldset>
        <button className="bg-blue-900 text-white py-1 px-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
