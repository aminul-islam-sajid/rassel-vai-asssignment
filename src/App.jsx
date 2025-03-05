import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";
import Loading from "./shared/Loading";
import publicRouter from "./router/publicRouter";

function App() {
  return (
    <div >
      <div className="max-w-[1200px] mx-auto">
        <NavBar />
      </div>
      <main className="main">
        <Suspense fallback={<Loading />}>
          <Routes>
            {publicRouter.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Suspense>
      </main>
      <div className="bg-[#F0F0F0]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
