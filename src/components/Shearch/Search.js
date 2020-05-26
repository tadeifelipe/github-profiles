import React from 'react';
import './styleSearch.css';

export const Search = () => {
    return(
     <div className="container2">
         {/* <form> */}
            <input type="text" placeholder="username" className="teste"></input>
            <input type="submit" className="find"></input>
         {/* </form> */}
     </div>  
    );
}