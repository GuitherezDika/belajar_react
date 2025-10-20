import { useEffect, useState } from "react";

interface UserProps {
  id: number;
  name: string;
  username: string ;
}

const UserList = () => {
  const [userData, setUserData] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error(`Error fetching users: ${error}`);
      }finally {
        setLoading(false)
      }
    }

    fetchUser();
  },[]);

  if(loading) return <p>Loading....</p>

  return (
    <div>
      <h4>List Anggota </h4>
      <ul>
        {userData.map((user, index) => (
          <li key={index} style={{display:'flex', alignItems: 'center'}}>
            <span style={{flex: 0.5}}>{user.id}</span>
            <span style={{ flex: 0.5 }}>{user.name}</span>
            <span style={{ flex: 0.5 }}>{user.username}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList;