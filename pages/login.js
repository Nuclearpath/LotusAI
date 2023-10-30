import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { data: session } = useSession();

  // console.log("sesion deets", session);
  const router = useRouter();
  useEffect(() => {
    if (session) {
      if (session.user.role === "mod") {
        router.push("/dashboard");
      } else if (session.user.role === "admin") {
        router.push("/admin/userlist");
      } else {
        router.push("/dashboard");
      }
    }
  }, [session, router]);
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn("credentials", {
      email: form.email,
      password: form.password,
    });

    // console.log(form);
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="sm:w-1/4 w-10/12 flex flex-col space-y-6">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="h-14 w-full flex justify-center">
            <Link href="/">
              <Image
                src="/logo.png"
                fill
                alt="logo"
                className="!relative object-contain"
              />
            </Link>
          </div>
          <div className="">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>

            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="user@gmail.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            ></input>
          </div>
          <div class="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            ></input>
          </div>

          <button
            type="submit"
            className=" text-white bg-custom-yellow hover:bg-custom-yellow focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm !w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        <div className="flex  justify-center ">
          <div className="h-[0.5px] w-full bg-gray-400 mt-[14px]"></div>
          <span>or</span>
          <div className="h-[0.5px] w-full bg-gray-400 mt-[14px]"></div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            signIn("google");
          }}
          className="w-full bg-white border-1 rounded-md py-3 flex justify-center items-center font-semibold font-header"
        >
          <div className="w-8 h-8 mr-3">
            <Image
              src="/google.jpg"
              fill
              className="!relative"
              alt="google"
            ></Image>
          </div>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
