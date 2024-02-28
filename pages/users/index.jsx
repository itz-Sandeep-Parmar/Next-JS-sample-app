
import Link from "next/link";
import { useEffect ,useState} from "react"; 
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json()); 

const UserPage = () => {

const {data, error} = useSWR('https://dummyjson.com/users',fetcher)

console.log('data', data);

if (error) {
  return <h1>Error Happened</h1>
}
if (!data) return <h1>Loading.........</h1>

    return (
       <div>
        <h1>users</h1>
       { 
            data.users  && data.users.map((user) => (<Link href={`/users/${user.id}`} key={user.id}><div>{user.firstName}</div></Link>))
        } 
       </div>
    )
}
export default UserPage;