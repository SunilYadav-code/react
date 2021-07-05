import React from 'react';
import PropTypes from 'prop-types';

GetList.propTypes={
    StudentList: PropTypes.array,
};
GetList.defaultProps={
    StudentList:[],
};
function GetList(props){
    const {StudentList}=props;
    return(
        
<div>
<ul className="post-list">
{StudentList.map(post=>(
    <li key={post.id}> {post.name} Age {post.age}</li>
))}
             </ul>

</div>
    );
}
export default GetList;