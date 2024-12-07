import BottomBar from "./components/BottomBar";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        {/* Main content */}
        <h1 className="text-center text-2xl mt-10 text-black">
          Welcome to the App!
        </h1>
      </div>
      {/* BottomBar for navigation */}
      <BottomBar />
    </div>
  );
};

export default Home;
