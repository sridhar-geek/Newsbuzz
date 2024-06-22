
// Imports from another files
import { Header,Footer } from "./Components";

function App() {

  return (
    <main>
      <Header />
      {/* Welcome Text */}
      <div className="margin my-20 px-5">
        <h1 className="text-3xl font-Geological font-bold mb-2 ">
          Welcome to{" "}
          <span className="text-[#4f40e5] text-4xl font-Montserrat">
            News Buzz
          </span>
        </h1>
        <h5 className="text-xl font-Poppins text-gray-500 mb-3">
          {" "}
          Find Easy way to find all the transtations of the products and services
        </h5>
        <p className="text-md font-BriemHand text-gray-600/70 md:w-3/4 lg:w-1/2">
          You can get the data of any product and service in just a few clicks.
          You can filter the data based on the months or years. Bar Chart and
          Pie Chart gives more information visually for a paticular month.
        </p>
      </div>
      <Footer />
    </main>
  );
}

export default App;
