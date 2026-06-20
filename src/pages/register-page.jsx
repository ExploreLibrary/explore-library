import  PageLayout from  '../components/layouts/page-layout/page-layout';
import  RegisterForm  from '../components/auth/register-form/register-form';

import jumboBg from '../assets/images/backgrounds/library-pic.jpg';

function RegisterPage() {
    return (
        <PageLayout
            jumbotron={{
             backgroundImage: jumboBg,
                title: '',
                 
            }}
        >
            <RegisterForm />
        </PageLayout>
    )

}
export default RegisterPage;
