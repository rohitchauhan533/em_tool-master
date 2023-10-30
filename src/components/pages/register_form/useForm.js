import { useState } from 'react';
import axios from 'axios';

const useForm = (validate) => {
  const [values, setValues] = useState({
    first_name: '',
    last_name:'',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { errors, condition } = validate(values);
    setErrors(errors);
    if (condition){
        console.log(values);
        // todo api call here
        post(values);
    }
  };

   return { handleChange, handleSubmit, values, errors };
};

// async function post(url, data = {}) {
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         'Accept':'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data) 
//     });
//     console.log(response);
//   }

async  function post(values){
    var data = JSON.stringify(values);
    
    var config = {
      method: 'post',
      url: 'https://webhook.site/4aae5f02-1305-4def-8c1e-cd84f39ff319',
      headers: { 
        'Content-Type': 'application/json', 
      },
      data : data
    };
    
   await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

export default useForm;
