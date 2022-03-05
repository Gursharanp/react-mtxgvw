import React,{memo} from 'react';
// import { pure } from 'recompose';

function NewMY(){
  console.log("child render")
  return <div> </div>
};

export default memo (NewMY);