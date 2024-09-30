import React from "react";

const App = () => {
  return (
    <div>
      <h1 className="text-green-600 text-[33px] font-bold uppercase tracking-widest">
        hello ji
      </h1>
      <p className="text-[12px] text-blue-700 uppercase">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ab
        officia cum magnam assumenda tenetur autem officiis culpa distinctio
        asperiores.
      </p>
      <div className="h-[200px] w-[200px] border-2 border-black pl-5 my-5 shadow-lg shadow-blue-500/50 rounded-full">
        <h3 clas>€this is me</h3>
      </div>
    </div>
  );
};

export default App;

// inline css : is valid, but way is different
// we make app by components
// components should be written in capital letter

// jsx: helps embed js

// both: pre written code
// framework: u can only choose everything from it, like tailwind
// library: u can buy pizza things from different brands, it doesnt have eth, like react
