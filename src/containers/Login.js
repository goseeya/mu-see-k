import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting with Name ${name}`)
}

    return (
      <div className="Login">
        <header className="Login-header">
          Zaloguj
        </header>
        <form onSubmit={handleSubmit}>
      <label>
        Nazwa:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        E-mail:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Hasło:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Zaloguj" />
    </form>
      </div>
    );
  }
  
  export default Login;
  