import "./App.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth();
function App() {
  const provider = new GoogleAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
    console.error(handleSignIn);
  };
  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={handleSignIn}>sign in</button>
    </div>
  );
}

export default App;
