import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../Loader/Loader"
import { loginHandlers } from './State/action';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userLoading, userError } = useSelector(state=>state.login);  

  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    avtar:'',
    userName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });


  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleSignUp = () => {
    setIsSignUp((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if(name === 'avtar'){
      setFormData((prevData) => ({
        ...prevData,
        avtar: files[0],
      }));
    }
  };

  const handleloginRegister=(event)=>{
    event.preventDefault();
    
    if(isSignUp){
      dispatch(loginHandlers.registerUser(formData,navigate));
    }else{
      dispatch(loginHandlers.userLogin(formData,navigate));
    }
  }

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      {userLoading ? <div className='flex justify-center align-middle'><Loader /></div> :
      <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          alt="logo"
          src="/logo.png"
          className="mx-auto h-12 w-auto"
          style={{ marginTop: '2rem' }} 
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
          {isSignUp ? 'Sign up for an account' : 'Sign in to your account'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 py-8 px-6 shadow-lg rounded-lg sm:px-10"
        >
          <form onSubmit={handleloginRegister} action="#" method="POST" className="space-y-6">
            {isSignUp && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="userName"
                      type="text"
                      required
                      value={formData.userName}
                      onChange={handleInputChange}
                      autoComplete="name"
                      className="block w-full rounded-md border border-gray-600 bg-gray-900 py-2 px-3 text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    User Avtar
                  </label>
                  <div className="mt-2">
                    <input
                      id="avtar"
                      name="avtar"
                      type="file"
                      accept="image/*"
                      required
                      onChange={handleInputChange}
                      className="block w-full rounded-md border border-gray-600 bg-gray-900 py-2 px-3 text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="number" className="block text-sm font-medium text-gray-300">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="number"
                      name="phoneNumber"
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      autoComplete="tel"
                      maxLength="10"  // Limit to 10 digits
                      pattern="\d{10}" // Ensuring only digits are entered
                      className="block w-full rounded-md border border-gray-600 bg-gray-900 py-2 px-3 text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  className="block w-full rounded-md border border-gray-600 bg-gray-900 py-2 px-3 text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="text-sm">
                  {!isSignUp && (
                    <a href="#" className="font-medium text-indigo-500 hover:text-indigo-400">
                      Forgot password?
                    </a>
                  )}
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  autoComplete="current-password"
                  className="block w-full rounded-md border border-gray-600 bg-gray-900 py-2 px-3 text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-2 flex items-center">
                <input
                  id="show-password"
                  name="show-password"
                  type="checkbox"
                  checked={showPassword}
                  onChange={togglePasswordVisibility}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="show-password" className="ml-2 block text-sm text-gray-300">
                  Show password
                </label>
              </div>
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {isSignUp ? 'Sign up' : 'Sign in'}
              </motion.button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            {isSignUp ? (
              <>
                Already have an account?{' '}
                <a href="#" onClick={toggleSignUp} className="font-medium text-indigo-500 hover:text-indigo-400">
                  Sign in
                </a>
              </>
            ) : (
              <>
                Not a member?{' '}
                <a href="#" onClick={toggleSignUp} className="font-medium text-indigo-500 hover:text-indigo-400">
                  Sign up
                </a>
              </>
            )}
          </p>
        </motion.div>
      </div>
      </>}
    </div>
  );
};

export default LoginForm;
