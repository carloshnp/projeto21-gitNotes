import React, { useEffect } from "react";
import View from "~/components/View";
import { useNavigate } from "@remix-run/react";
import SignUpForm from "~/components/SignUpForm";
import LoginForm from "~/components/LoginForm";

export default function IndexRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      navigate('/dashboard');
    }
  }, [])

  return (
    <View>
      <SignUpForm />
      <LoginForm />
    </View>
  )
}