import Hero from "./components/hero";

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col w-[85%] ml-[15%]">
       {/* <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)] w-full py-14 px-14 overflow-y-auto overflow-x-hidden bg-[linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-QMHbaylpk-NNjiovQFsym6IA1LCxrJeu7Nr9PcAdg&s=10')] bg-cover bg-center"> */}
         <Hero />
       {/* </div> */}
    </main>
  );
}

export default HomePage;
