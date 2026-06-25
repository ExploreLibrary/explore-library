import { useForm } from "react-hook-form";
import * as AuthService from "../../../services/auth-service";
import { useNavigate } from "react-router";
import { useAuth } from "../../../contexts/auth-context";
import { Link } from "react-router-dom";
import "./login-form.css";


function LoginForm() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const { register, handleSubmit, setError, formState: {errors, isValid}} = useForm({ mode: 'all'});
    
    const handleUserLogin = async (user) => {
        try {
            user = await AuthService.login(user);
            login(user);
            navigate('/');
        } catch (error) {
            if (error.response?.status === 401) {
                Object.keys(error.response.data.errors)
                 .forEach((inputName) => {
                    setError(inputName, { type: 'custom', message: error.response.data.errors[inputName] })
                 })
            }
        }
    }
    return(
      <div className="login-form__cnt u-mt-30">
      <h2 className="u-mb-25">Login</h2>
        <form className="login-form" onSubmit={handleSubmit(handleUserLogin)}>
          {/* USERNAME */}
          <div className="login-form__input-group">
            <input type="text" {...register('username', { required: 'User username is required' })} className={`login-form__input ${errors.username ? 'is-invalid' : ''}`} placeholder="username" />
            {errors.username && (<div className="login-form__invalid-feedback">{errors.username.message}</div>)}
          </div>

          {/* PASSWORD */}
          <div className="login-form__input-group">
            <input type="password" {...register('password', { required: 'User password is required' })} className={`login-form__input ${errors.password ? 'is-invalid' : ''}`} placeholder="***********" />
            {errors.password && (<div className="login-form__invalid-feedback">{errors.password.message}</div>)}
          </div>

          <div>
            <button className="login-form__submit-btn" type="submit" disabled={!isValid}>Login</button>
          </div>
        </form>
        <div className="u-mt-25">
          <Link to="/register" className="login-form__register-link">
            Register
          </Link>
        </div>
      </div>
    )
}

export default LoginForm;