'use client'
import { useEffect, useState } from 'react';
import UserTable from './UserTable';

export default function Home() {
    // state is what the data is representing in realtime
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`)
      .then((response) => {
        const data = response.data;
        // data is an object
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // Handle error if needed
      });
  }, []);

  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No data shown...</p>
  
    return (
      <main>
        <UserTable users={data.users}/>
      </main>
    )
  }