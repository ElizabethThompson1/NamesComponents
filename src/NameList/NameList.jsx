import React from "react";

function NameList  (props)  {
    let renderedName= props.names.map((name)=>{
        return<li>{name}</li>;
    });
    return <div>{renderedName}</div>
}
export default NameList;