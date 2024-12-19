import Button from "@/components/Button";
import Input from "@/components/Input";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type initialForm = {
  username: string;
  password: string;
};

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<initialForm>({
    username: "",
    password: "",
  });
  const router = useRouter();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    // Get the input values using the 'name' attributes
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
      if (!username || !password) {
        setErrorMessage({
          username: username ? "" : "Username is required",
          password: password ? "" : "Password is required",
        });
        setLoading(false);
        return;
      }
      if (!username) {
        setErrorMessage({
          ...errorMessage,
          username: "Username is required",
        });
        setLoading(false);
        return;
      }
      if (!password) {
        setErrorMessage({
          ...errorMessage,
          password: "Password is required",
        });
        setLoading(false);
        return;
      }
      setLoading(false);
      router.push("/admin/dashboard");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="w-full h-[100vh] flex">
      <div className="lg:flex hidden w-full min-h-screen bg-blue-500 flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl font-bold text-center font-sans text-white">
          DASHLITE
        </h1>
        <p className="text-white">Your Dashboard Solutions</p>
      </div>
      <div className="w-full min-h-screen bg-white flex justify-center items-center">
        <div className="lg:w-1/2 w-full border rounded shadow bg-white p-4">
          <h1 className="text-3xl font-bold text-center font-sans text-black">
            DASHLITE
          </h1>
          <form onSubmit={onSubmit} className="mt-4">
            <Input
              autoFocus
              label="Username"
              name="username"
              type="text"
              placeholder="Enter your username"
            />
            {errorMessage.username && (
              <p className="text-red-500">{errorMessage.username}</p>
            )}
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
             {errorMessage.password && (
              <p className="text-red-500">{errorMessage.password}</p>
            )}
            <div className="mt-4">
              <Button
                label={loading ? "Loading..." : "Login"}
                onClick={() => {}}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
