// import { Suspense } from "react";
// import MainTechnologies from "./components/Technologies/MainTechnologies";
// import type { ITechnologies } from "./types/TechnologiesType";
// import Footer from "./components/Footer/Footer";
// import DevelopmentSTack from "./components/DevelopmentSTack/DevelopmentSTack";
// import Navbar from "./components/Navbar/Navbar";

// const technologiesData = async (): Promise<ITechnologies[]> => {
//   const res = await fetch("/data.json");
//   const data = await res.json();
//   return data;
// };

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <DevelopmentSTack />
      <Suspense fallback={<p>Loading....</p>}>
        <MainTechnologies technologiesData={technologiesData()} />
      </Suspense>
      <Footer /> */}
    </>
  );
};

export default App;
