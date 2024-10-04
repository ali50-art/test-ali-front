"use client";

import LandingIntro from '@/features/login/landing-intro';
import InputText from '@/components/input/input-text';
import ErrorText from '@/components/typography/error-text';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthProvider';
import InputTextPassword from '@/components/input/password-input';
import Link from 'next/link'; // Import Link from Next.js

interface LoginObj {
  password: string;
  email: string;
  username: string;
}

function Register(): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { register } = useAuth(); // Assuming you have a register method in your auth context

  const [loginObj, setLoginObj] = useState<LoginObj>({
    email: '',
    username: "",
    password: ""
  });

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setErrorMessage('');
    if (loading) return;
    handleRegisterUser();
  };

  const handleRegisterUser = async () => {
    if (loginObj.email.trim() === '' || loginObj.password.trim() === '') {
      setErrorMessage('Email or password is required!');
      return;
    } else {
      setLoading(true);
      // Simulate API call
      try {
        await registerUser({
          email: loginObj.email,
          username: loginObj.username,
          password: loginObj.password
        });
        setLoading(false);
        // Optionally redirect after successful registration
        router.push('/login'); // Redirect to login page after registration
      } catch (err) {
        setErrorMessage('Registration failed');
        setLoading(false);
      }
    }
  }

  const registerUser = async ({ email, username, password }: { email: string; username: string; password: string }) => {
    // Call the register function from your auth context
    // Assuming your AuthProvider has a register method
    await register(email,password ,username); // Replace this with your actual registration function
  };

  const updateFormValue = (updateType: string, value: string): void => {
    setErrorMessage('');
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div>
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
                <p className='text-center text-lg md:mt-0 mt-6 font-semibold'>Enter your email, username, and password</p>
                <InputText
                  type="email"
                  defaultValue={loginObj.email}
                  updateType="email"
                  containerStyle="mt-4"
                  labelTitle="Enter your Email"
                  placeholder="Ex - Test Ali@gmail.com"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  type="text"
                  defaultValue={loginObj.username}
                  updateType="username"
                  containerStyle="mt-4"
                  labelTitle="Enter your Username"
                  placeholder="Ex - Test Ali"
                  updateFormValue={updateFormValue}
                />
                <InputTextPassword
                  labelTitle="Password"
                  type="password"
                  placeholder="Enter your password"
                  updateFormValue={updateFormValue}
                  updateType="password"
                />
              </div>
              <div className='mt-8'>
                {errorMessage && <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>}
                <button type="submit" className={`btn mt-2 w-full btn-primary`}>
                  {loading && <span className="loading loading-spinner"></span>} Register
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <Link href="/login" className="text-blue-500 hover:underline">
                Already have an account? Log in here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
