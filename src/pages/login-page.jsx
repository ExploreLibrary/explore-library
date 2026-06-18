import { PageLayout } from  '../components/layouts';
import { LoginForm } from '../components/auth';

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