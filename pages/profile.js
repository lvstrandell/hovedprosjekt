import React, { useEffect } from 'react';
import firebaseInstance from  '../config/firebase';
import { useRouter } from 'next/router';
import { useAuth } from '../config/auth';
import { ProfileMain, ProfileContainer } from '../components/ProfilePage/profilepage';


const Profile = () => {
  const router = useRouter();
  const { user, loading, isAuthenticated} = useAuth();

  useEffect(() => {
    console.log('User', user)
  }, [user]);
  
  const handleSignout = async () => {
    await firebaseInstance.auth().signOut()
    router.push('/')
    alert('Du är nu utloggad')
  }

  if(loading) {
    return <h2>Loading....</h2>
  };

  if(!isAuthenticated) {
    router.push('/login')
    return <h2>Du är inte inloggad</h2>
  }

  return (
    <ProfileMain>
      <ProfileContainer>
        <h2>Profile</h2>
        <p>{user.email}</p>
        <button onClick={handleSignout}>Log Out</button>
      </ProfileContainer>
    </ProfileMain>
  )
}

export default Profile;