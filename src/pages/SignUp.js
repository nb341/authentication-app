import React from 'react';

import CardTemplate from '../components/CardComponent';
  export default function SignUp() {
  
    return (
      <CardTemplate
        header="Join thousands of learners from around the world"
        pitch = " Master web development by making real-life projects. There are multiple paths for you to choose"
        buttonTxt = "Start coding now"
        userExist = {{txt: "Already a member?", linkTxt: 'Login'}}
      />
    );
  }