import NavBar from "../features/navbar/Navbar";
import UserProfile from "../features/user/components/UserProfile";

function UserProfilePage() {
  return (
    <>
      <NavBar>
        <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
          My Profile
        </h1>
        <UserProfile />
      </NavBar>
    </>
  );
}

export default UserProfilePage;
