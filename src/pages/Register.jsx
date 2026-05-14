import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/Auth.css";

function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Full name is required"),

      email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      alert("Registration form submitted successfully");
      console.log(values);
    },
  });

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2>Create New Account</h2>
        <p>Register to start shopping on Pixer.</p>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.name && formik.errors.name && (
              <small className="error-text">{formik.errors.name}</small>
            )}
          </div>

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
              <small className="error-text">{formik.errors.email}</small>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.password && formik.errors.password && (
              <small className="error-text">{formik.errors.password}</small>
            )}
          </div>

          <button type="submit" className="auth-btn">
            Register
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;