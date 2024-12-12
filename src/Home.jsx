import {  useClerk, UserButton, SignInButton } from "@clerk/clerk-react"

const Home = () => {
  const { redirectToSignIn } = useClerk();

  const handleLogin = () => {
    redirectToSignIn();
  };

  return (
    <div>
        <h1>Sing in Whith this Button</h1>
          <button onClick={handleLogin}>Logar</button>
          <SignInButton />

          {/* Depois que o usuario for logado mostra a foto fo usuario */}
          <UserButton />
    </div>
  )
}

export default Home