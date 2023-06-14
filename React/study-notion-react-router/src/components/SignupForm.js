import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Password donot match');
    }

    setIsLoggedIn(true);
    toast.success('Account registered successfully');

    const accountData = { ...formData };
    console.log(accountData);

    navigate('/dashboard');
  };
  return (
    <div>
      {/* student instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label>
            <p>
              FirstName<sup>*</sup>
            </p>
            <input
              type="text"
              name="firstname"
              onChange={changeHandler}
              required
              placeholder="enter first name"
              value={formData.firstname}
            />
          </label>
          <label>
            <p>
              LastName<sup>*</sup>
            </p>
            <input
              type="text"
              name="lastname"
              onChange={changeHandler}
              required
              placeholder="enter last name"
              value={formData.lastname}
            />
          </label>
        </div>
        <label>
          <p className="text-white">
            Email Address<sup className="text-white">*</sup>
          </p>
          <input
            type="text"
            name="email"
            onChange={changeHandler}
            required
            placeholder="enter email address"
            value={formData.email}
          />
        </label>

        <div>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              onChange={changeHandler}
              required
              placeholder="enter password"
              value={formData.password}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              onChange={changeHandler}
              required
              placeholder="confirm password"
              value={formData.confirmPassword}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
