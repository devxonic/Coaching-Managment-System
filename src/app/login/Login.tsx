"use client";
import CustomButton from "@/components/Base/Button";
import Input from "@/components/Base/Input";
import Link from "next/link";

const Login = () => {
  return (
    <main className="h-dvh w-full bg-emerald-200">
      <div className="flex justify-center items-center h-dvh w-full">
        <div className="h-2/4 md:columns-3xl columns-sm bg-white rounded-xl">
          <div className="flex p-8 items-center flex-col h-full">
            <h1 className="text-xl font-bold">LOGIN</h1>
            <div className="pt-10">
              <div className="flex items-center p-4 gap-1">
                <div>
                  <h1 className="">Username :</h1>
                </div>
                <div className="pl-5">
                  <Input type="email" value="Hello" />
                </div>
              </div>
              <div className="flex items-center p-4 gap-1">
                <div>
                  <h1 className="">Password :</h1>
                </div>
                <div className="pl-5">
                  <Input type="password" value="Password" />
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 mt-4">
                <Link href={"/dashboard"}>
                  <CustomButton
                    title="Login"
                    classes="border-emerald-300 text-emerald-300 rounded-md border-2 px-6 py-1"
                  />
                </Link>
                <CustomButton
                  title="Cancel"
                  classes="bg-emerald-300 text-white rounded-md border-2 px-6 py-1.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
