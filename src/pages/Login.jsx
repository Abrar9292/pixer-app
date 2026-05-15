import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/Auth.css";

function Login() {

  const formik = useFormik({

    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({

      email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),

    }),

    onSubmit: (values) => {

      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful");

      console.log(values);

    },

  });

  return (

    <section className="auth-page">

      <div className="auth-card">

        <h2>Log In Your Account</h2>

        <p>Login to continue shopping on Pixer.</p>

        <form onSubmit={formik.handleSubmit}>

          <div className="form-group">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.email && formik.errors.email && (
              <small className="error-text">
                {formik.errors.email}
              </small>
            )}

          </div>

          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.password && formik.errors.password && (
              <small className="error-text">
                {formik.errors.password}
              </small>
            )}

          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>

        </form>

      </div>

    </section>

  );
}

export default Login;