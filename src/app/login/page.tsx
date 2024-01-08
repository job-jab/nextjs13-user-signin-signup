import Header from "@/components/Header";
import LoginForm from "./login-form";


export default async function LoginPage() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return (
   <>

    <div className="shadow-2xl">
    <Header />
    </div>
    <div className="bg-rainbows h-screen bg-cover">
      <LoginForm />
  
    </div>

      </>
    
  );
};
