export default function validation(values){
    const errors ={};

    // Regular Expression to validate email
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   // Regular Expression to validate phone number
   const phoneNumberRegex = /^(\+91[\s]?)?[0]?(91)?[6789]\d{9}$/;
   errors.is=false;
   if(values.name === ""){
    errors.is=true;
    errors.name="Name is Required!";
   }

   if(values.phone=== ""){
    errors.is=true;
    errors.phone="Phone Number is Required!";
   }
   else if(!phoneNumberRegex.test(values.phone)){
    errors.is=true;
    errors.phone ="Phone Number is not Valid!";
   }
   
   if(values.email === ""){
    errors.is=true;
    errors.email="Email is Required!"
   }
   else if(!email_pattern.test(values.email)){
    errors.is=true;
    errors.email="Email is not Valid!";
   }

   if(values.msg === ""){
    errors.is=true;
    errors.msg= "Message is Required!";
   }
   return errors;
}