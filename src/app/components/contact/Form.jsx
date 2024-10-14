"use client"
import emailjs from '@emailjs/browser';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {
    
    const toastID = toast.loading("Sending your message, please wait")
    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, params,{
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate:{
            throtttle: 5000,
        }
      })
      .then(
        () => {
          toast.success("I have received your message I will get back to you soon!", {
            id: toastID
          });
        },
        (error) => {
          toast.error("There was an error sending your message, please try again", {
            id: toastID
          });
        },
      );
  };

  const onSubmit = (data) =>{
    const templateParams =  {
        to_name: "Yusuf",
        from_name: data.name,
        reply_to: data.email,
        message: data.message
    }
    sendEmail(templateParams)
  };
  console.log(errors);
  return (
    <>
    <Toaster richColors={true}/>
    <form onSubmit={handleSubmit(onSubmit)}
    className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >
      <input type="text" placeholder="First name" {...register("name", {required: 'We need your name!',
      minLength:{
        value: 2,
        message: "too short for a name" 
      }, maxLength: 80})} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {
        errors.name && <span className='inline-block self-start text-accent'>{errors.name.message}</span>
      }
      <input type="email" placeholder="email" {...register("email", {required: 'Please enter an email!'})} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
       {
        errors.email && <span className='inline-block self-start text-accent'>{errors.email.message}</span>
       }
      <textarea placeholder='message'{...register("message", {required: 'This field is required!', maxLength:{
        value: 500,
        message: 'Message should be less than 500 characters'
      } , minLength: {
        value: 15,
        message: 'Too short for a formal email! (should be more than 15 chars)'
      }})} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {
        errors.message && <span className='inline-block self-start text-accent'>{errors.message.message}</span>
      }
      <input 
      value='write your message'
      className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize' 
      type="submit" />
    </form>
    </>
  );
}
