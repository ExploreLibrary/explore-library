import PageLayout from "../components/layouts/page-layout/page-layout";
import { useAuth } from "../contexts/auth-context";

function UserProfilePage() {
    const { user } = useAuth();
    return(
    <PageLayout>
        <h2 className="u-mt-30 u-mb-30">
            User Info
        </h2>
          <p>
            <strong>Username: </strong> {user.name}
         </p>
        
         <p>
            <strong>Email: </strong> {user.email}
         </p>
        <h2 className="u-mt-30 u-mb-30">
            My Favorite Books
        </h2>

    </PageLayout>

    )
}

export default UserProfilePage;
