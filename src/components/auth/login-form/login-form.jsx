import { useForm } from "react-hook-form";
import * as AuthService from "../../../services/auth-service";
import { useNavigate } from "react-router";
import { useAuth } from "../../../contexts/auth-context";
import { Link } from "react-router-dom";


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
    <form onSubmit={handleSubmit(handleUserLogin)}>
      {/* USERNAME */}
      <div className="input-group mb-1">
        <span className="input-group-text"><i className="fa fa-tag fa-fw"></i></span>
        <input type="text" {...register('username', { required: 'User username is required' })} className={`form-control ${errors.username ? 'is-invalid' : ''}`} placeholder="username" />
        {errors.username && (<div className="invalid-feedback">{errors.username.message}</div>)}

      </div>

      {/* PASSWORD */}
      <div className="input-group mb-2">
        <span className="input-group-text"><i className="fa fa-lock fa-fw"></i></span>
        <input type="password" {...register('password', { required: 'User password is required' })} className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="***********" />
        {errors.password && (<div className="invalid-feedback">{errors.password.message}</div>)}
      </div>

      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="submit" disabled={!isValid}>Login</button>
        <hr className="m-0" />
        <Link to="/register">Register</Link>
      </div>
    </form>
    )
}

export default LoginForm;