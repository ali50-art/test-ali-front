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
}

function Login(): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loginObj, setLoginObj] = useState<LoginObj>({
    email: '',
    password: ""
  });
  const { login } = useAuth();

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setErrorMessage('');
    if (loading) return;
    handleLoginUser();
  };

  const handleLoginUser = async () => {
    if (loginObj.email.trim() === '' || loginObj.password.trim() === '') {
      setErrorMessage('Email or password is required!');
      return;
    } else {
      setLoading(true);
      // Simulate API call
      try {
        await loginUser({ email: loginObj.email, password: loginObj.password });
        setLoading(false);
      } catch (err) {
        setErrorMessage('User not found');
        setLoading(false);
      }
    }
  }

  const loginUser = async ({ email, password }: { email: string; password: string }) => {
    await login(email, password);
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
                <p className='text-center text-lg md:mt-0 mt-6 font-semibold'>Enter your email and password</p>
                <InputText
                  type="email"
                  defaultValue={loginObj.email}
                  updateType="email"
                  containerStyle="mt-4"
                  labelTitle="Enter your Email"
                  placeholder="Ex - Test Ali@gmail.com"
                  updateFormValue={updateFormValue}
                />
                <InputTextPassword
                  labelTitle="Password"
                  type="password"
                  placeholder="Enter your password"
                  updateFormValue={updateFormValue}
                  updateType="password" // This will update formData.password
                />
              </div>
              <div className='mt-8'>
                {errorMessage && <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>}
                <button type="submit" className={`btn mt-2 w-full btn-primary`}>
                  {loading && <span className="loading loading-spinner"></span>} login
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <Link href="/register" className="text-blue-500 hover:underline">
                Don’t have an account? Sign up here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
