import React from 'react'
import {useForm} from 'react-hook-form'
import './css/Register.css'

const Register = () => {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState : {errors, isSubmitting}
    } = useForm();

    async function sendData(data) {
        try {
            const username = data.username;
            const password = data.pass;
            const mail = data.email;
            const role = data.role;
        const response = await fetch(`http://localhost:8000/saveData`, {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },

            body : JSON.stringify(data)
        });
        alert('aakhir kar');
        }
        catch(e) {
            console.log(e);
            alert("uuua");
        }
    }


   return (
  <div className="x">
    <div className="r">
      <h1>Register</h1>
      <p>Create Account</p>
    </div>

    <form onSubmit={handleSubmit(sendData)}>
      <div className="card">

        <div className="inputBox" >
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            {...register('username', {minLength : {value : 3, message : "Minimum Three Characters"}})}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div className="inputBox" >
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email', {minLength : {value : 3, message : "Minimum Three Characters"}})}
          />
        </div>

        <div className="inputBox" >
          <label>Password</label>
          <input
            type="password"
            placeholder="Choose a strong password"
            {...register('pass', {minLength : {value : 3, message : "Minimum Three Characters"}})}
          />
        </div>

        <div className="inputBox" >
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            {...register('cPass', {minLength : {value : 3, message : "Minimum Three Characters"}})}
          />
        </div>

        <div className="inputBox" >
          <label>Role</label>

          <select {...register('role', {required : true})}>
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>

        <button type="submit" >
          {isSubmitting ? "Account Creating" : "Create Account"}
        </button>

        <div className="loginLink">
          Already have an account? <span>Login</span>
        </div>

      </div>
    </form>
  </div>
)
}

export default Register