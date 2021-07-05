import React, { useEffect, useState } from 'react';
import GetList from './GetList';
function Ram(){
    const[StudentList,setStudentList]=useState([]);
    useEffect(()=>{
        async function fetchStudentList(){
try{
const requestUrl='https://6076e6641ed0ae0017d6a050.mockapi.io/api/';
const respone=await fetch(requestUrl);
const responseJSON=await respone.json();
console.log(responseJSON);
setStudentList(responseJSON);
}catch{

}
        }
        fetchStudentList();
    },[]);
    return(
<div>
    <GetList StudentList={StudentList}/>
</div>
    );
}
export default Ram;