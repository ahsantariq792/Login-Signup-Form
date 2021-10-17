import React from 'react';
import "../App.css"


function Dashboard(){
    return(
        <h1 id="wlm">Welcome <span id="name">{localStorage.getItem('name')}</span> </h1>
    )
}
export default Dashboard;