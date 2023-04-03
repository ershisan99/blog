import React, { ChangeEvent, FormEventHandler, useState } from "react";
import { Input } from "@/components/input";
import { useLoginMutation } from "@/services/blog/hoooks";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: login, error } = useLoginMutation();
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className={"h-screen grid place-items-center w-screen"}>
      <div className={"flex flex-col gap-4 max-w-2xl"}>
        <h1>Login</h1>
        <form onSubmit={handleLogin} className={"flex flex-col gap-4 "}>
          <Input value={email} onChange={handleEmailChange} type={"email"} />

          <Input
            value={password}
            onChange={handlePasswordChange}
            type={"password"}
          />
          <button type={"submit"}>Login</button>
        </form>
      </div>
    </div>
  );
}
