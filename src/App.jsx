import { login } from "./utils";
import "./index.css";
import { useState } from "react";

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tryLogin, setTryLogin] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = () => {
    const user = { email, password };

    setTryLogin(true);
    login(user)
      .then(() => {
        alert("login success");
      })
      .catch((error) => {
        let toShow = error.message;
        setError(toShow);
      })
      .finally(() => setTryLogin(false)); // implementadas linhas 18 -> 45
  };

  const handleEmail = (event) => {
    let value = event.target.value;
    setEmail(value);
  };
  const handlePassword = (event) => {
    let value = event.target.value;
    setPassword(value);
  };

  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {error && (
          /*<--- implementado*/ <div className="errorMessage">{error}</div>
        )}
        <div className="row">
          <label htmlFor={"email"}>Email</label>
          <input
            id={"email"}
            type={"email"}
            autoComplete="off"
            value={email} //linhas 59 e 60 implementadas
            onChange={handleEmail}
          />
        </div>
        <div className="row">
          <label htmlFor={"password"}>Password</label>
          <input
            id={"password"}
            type={"password"}
            value={password} //linhas 68 e 69 implementadas
            onChange={handlePassword}
          />
        </div>

        <div className="button">
          <button
            onClick={handleLogin} // linhas 75 e 76 implementadas
            disabled={email === "" || password.length < 6 || tryLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
