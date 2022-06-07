import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Kisat } from "./Kisat";

const App = () => {
  return (
    <div className="text-center">
      <Header />
      <Routes>
        <Route
          path="ranking"
          element={<div className="mt-8">Tulossa pian...</div>}
        />
        <Route path="kisat" element={<Kisat />} />
        <Route path="*" element={<Navigate to="/kisat" replace />} />
      </Routes>
    </div>
  );
};

const Header = () => (
  <div>
    <div className="mt-8 mb-12">
      <h1 className="text-3xl p-2">Jok FG</h1>
      <h1 className="text-5xl font-semibold">Masters</h1>
    </div>

    <div className="flex justify-center">
      <div className="m-4 w-32 p-2">
        <Link
          className="border-2 bg-slate-200 rounded border-slate-200 py-2 px-6 m-4 active:bg-sky-200 active:border-sky-200 focus:bg-sky-200 focus:border-sky-200"
          to="/kisat"
        >
          Kisat
        </Link>
      </div>
      <div className="m-4 w-32 p-2">
        <Link
          className="border-2 bg-slate-200 rounded border-slate-200 py-2 px-6 active:bg-sky-200 active:border-sky-200 focus:bg-sky-200 focus:border-sky-200"
          to="/ranking"
        >
          Ranking
        </Link>
      </div>
    </div>
  </div>
);

export default App;
