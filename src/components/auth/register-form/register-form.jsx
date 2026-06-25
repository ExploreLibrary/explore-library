import { useForm } from "react-hook-form";
import * as AuthService from "../../../services/auth-service";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./register-form.css";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const navigate = useNavigate();

  const handleUserRegister = async (user) => {
    try {
      await AuthService.register(user);
      navigate("/login");
    } catch (error) {
      if (error.response?.status === 400) {
        Object.keys(error.response.data.errors).forEach((inputName) => {
          setError(inputName, {
            type: "custom",
            message: error.response.data.errors[inputName],
          });
        });
      }
    }
  };
  return (
    <div className="register-form__cnt u-mt-30">
      <h2 className="u-mb-25">Register</h2>
      <form
        className="register-form"
        onSubmit={handleSubmit(handleUserRegister)}
      >
        {/* NAME */}
        <div className="register-form__input-group">
          <input
            type="text"
            {...register("name", { required: "User name is required" })}
            className={`register-form__input ${errors.name ? "is-invalid" : ""}`}
            placeholder="Name"
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>

        {/* EMAIL */}
        <div className="register-form__input-group">
          <input
            type="email"
            {...register("email", { required: "User email is required" })}
            className={`register-form__input ${errors.email ? "is-invalid" : ""}`}
            placeholder="user@example.org"
          />
          {errors.email && (
            <div className="register-form__invalid-feedback">
              {errors.email.message}
            </div>
          )}
        </div>

        {/* USERNAME */}
        <div className="register-form__input-group">
          <input
            type="text"
            {...register("username", { required: "User username is required" })}
            className={`register-form__input ${errors.username ? "is-invalid" : ""}`}
            placeholder="username"
          />
          {errors.username && (
            <div className="register-form__invalid-feedback">
              {errors.username.message}
            </div>
          )}
        </div>

        {/* PASSWORD */}
        <div className="register-form__input-group">
          <input
            type="password"
            {...register("password", { required: "User password is required" })}
            className={`register-form__input ${errors.password ? "is-invalid" : ""}`}
            placeholder="***********"
          />
          {errors.password && (
            <div className="register-form__invalid-feedback">
              {errors.password.message}
            </div>
          )}
        </div>

        <div className="d-grid gap-2">
          <button
            className="login-form__submit-btn"
            type="submit"
            disabled={!isValid}
          >
            Register
          </button>
        </div>
      </form>
      <div className="u-mt-25">
        <Link to="/login" className="register-form__login-link">
          Login
        </Link>
      </div>
    </div>
  );
}
export default RegisterForm;
