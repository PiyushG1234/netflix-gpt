import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className=" w-3/12 my-36 mx-auto right-0 left-0 absolute bg-black p-12 text-white">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input type="text" placeholder="Email or phone number" className="p-2 my-2 w-full "/>
        <input type="Password" placeholder="Password" className="p-2 my-2 w-full  "/>
        <button className=" p-4  my-4 bg-red-700 rounded font-medium text-base w-full">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
