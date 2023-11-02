import logo from "./assets/logo.svg";
import illustration from "./assets/illustration-dashboard.png";

function App() {
  return (
    <div className="app">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <section className="content">
          <div className="titleDescContainer">
            <h1 className="title">
              We are launching <span>soon!</span>
            </h1>
            <p className="desc">Subscribe and get notified</p>
          </div>
          <form>
            <div className="formGroup">
              <input type="email" placeholder="Your email address..." />
            </div>
            <button className="submitBtn">Notify Me</button>
          </form>
        </section>
        <section className="illustrationImageContainer">
          <img src={illustration} alt="illustration" />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
