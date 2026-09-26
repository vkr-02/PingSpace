import { Link } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    console.log(username, email);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text"
        id='username'
        name='username'
        required
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="email"
        id='email'
        name='email'
        required
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password"
        id='password'
        name='password'
        required
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password"
        id='confirmPassword'
        name='confirmPassword'
        required
        placeholder='Confirm Password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type='submit'>Create Account</button>

        <p>Already have an account? <Link to='/'>Login</Link></p>
      </form>
    </div>
  )
}

export default Signup