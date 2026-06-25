import PageLayout from "../components/layouts/page-layout/page-layout";
import { useAuth } from "../contexts/auth-context";

function UserProfilePage() {
    const { user } = useAuth();
    return(
    <PageLayout>
        <div>
          <p>
            userName {user.name}
         </p>
        
         <p>
            email {user.email}
         </p>

         </div>
    </PageLayout>

    )
}

export default UserProfilePage;
