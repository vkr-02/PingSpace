import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>PingSpace</h1>
        <h2>Welcome Back</h2>
        <p>Your space for seamless chats.</p>

        <label htmlFor="email">Email</label>
        <input
        id='email'
        name='email'
        type="email"
        placeholder='your@example.com'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
        id='password'
        name='password'
        type="password"
        placeholder='Password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </form>
    </div>
  )
}

export default Login