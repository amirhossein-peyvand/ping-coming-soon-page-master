import "./sass/App.scss";
import illustration from "./assets/illustration-dashboard.png";
import logo from "./assets/logo.svg";

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
      <footer>
        <section className="iconsContainer">
          <a href="https://twitter.com/" target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://facebook.com" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </section>
        <p>&copy; Copyright Ping. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
