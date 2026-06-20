import  PageLayout from  '../components/layouts/page-layout/page-layout';
import  LoginForm  from '../components/auth/login-form/login-form';

import jumboBg from '../assets/images/backgrounds/library-pic.jpg';

function LoginPage() {
    return (
        <PageLayout
            jumbotron={{
             backgroundImage: jumboBg,
                title: '',
                 
            }}
        >
            <LoginForm />
        </PageLayout>
    )

}
export default LoginPage;