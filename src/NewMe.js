import React from 'react';
import { pure } from 'recompose';

function NewMY(){
  console.log("child render")
  return <div> </div>
};

export default pure (NewMY);