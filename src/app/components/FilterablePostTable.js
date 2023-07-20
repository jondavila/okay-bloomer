'use client'
import { useEffect, useState } from 'react';
import PostTable from './PostTable';

export default function FilterablePostTable() {
    // state is what the data is representing in realtime
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/posts`)
      .then((response) => {
        // data is an object
        console.log('--- posts ---', response.data);
        setData(response.data);
        setLoading(false);
      })
    }, []);
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No data shown...</p>
  
    return (
      <main>
        <PostTable posts={data.posts}/>
      </main>
    )
  }