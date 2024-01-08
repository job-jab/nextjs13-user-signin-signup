import Header from "@/components/Header";
import LoginForm from "./login/login-form";


const Home = () => {
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

export default Home;
