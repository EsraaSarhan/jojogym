import { useState, useEffect, setPosts} from 'react'
import Cookies from 'universal-cookie';

function useFetchData( url) {
    const [data, setPosts] = useState([]);
    

   
  //  localStorage.getItem(token)

    //const token = localStorage.getItem('token');
    //if(token){
      //console.log(token)
      useEffect(() => {
        let token = localStorage.getItem('token')
        fetch(url, 
          {
            headers:{
              'Authorization': 'Token ' + token
            }
          })
          .then((res) => res.json())
          .then((result) => {
            setPosts(result.results);
          }).catch((err) => {
            console.log(err);
        });
      }, []);

    
    // }
    // else{
    // data = 'not authorized'
    //  setPosts('not authorized')
    // }

    return { data };
    
}


export default useFetchData