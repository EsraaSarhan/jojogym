import { useState, useEffect, setPosts} from 'react'
import Cookies from 'universal-cookie';

function useFetchData( url) {
    const [data, setPosts] = useState([]);
    const cookies = new Cookies();

    console.log(cookies)


    useEffect(() => {
        fetch(url, 
          
          {
            method: "GET",
            credentials: 'include',
            headers:  new Headers({ Accept: 'application/json' })
          })
          .then((res) => console.log(res))
          .then((result) => {
            setPosts(result);
          }).catch((err) => {
            console.log(err);
        });
      }, []);

    return { data };
}


export default useFetchData