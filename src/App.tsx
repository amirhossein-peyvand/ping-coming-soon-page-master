import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import z from "zod";
import illustration from "./assets/illustration-dashboard.png";
import logo from "./assets/logo.svg";
import "./sass/App.scss";
import { useMediaQuery } from "react-responsive";

const schema = z.object({
  email: z
    .string()
    .min(8, { message: "Please provide a valid email address" })
    .max(40, { message: "Please provide a valid email address" })
    .regex(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      { message: "Please provide a valid email address" }
    ),
});
type FormData = z.infer<typeof schema>;

function App() {
  const isGreaterThan1000px = useMediaQuery({ query: "(min-width:1000px)" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (event: FieldValues) => console.log(event);

  const errorMessage = errors.email && (
    <p className="errorMessage">{errors.email.message}</p>
  );

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formGroup">
              <input
                {...register("email")}
                type="email"
                placeholder="Your email address..."
              />
              {!isGreaterThan1000px && errorMessage}
              <button className="submitBtn">Notify Me</button>
            </div>
            {isGreaterThan1000px && errorMessage}
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
