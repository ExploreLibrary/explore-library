import { PageLayout } from  '../components/layouts';
import { RegisterForm } from '../components/auth';

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
