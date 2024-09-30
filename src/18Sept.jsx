import React from "react";

// const handleClick = (username) => {
//   console.log(`hello ${username}`);
// };

const handleClick = (username) => {
  // console.log(`hello ${username}`);
  // alert('please some');
  const age = prompt("please provide age");
  const conversion = Number(age);

  if (isNaN(age)) {
    alert("Please enter valid number");
  } else if (age < 0 || age > 110) {
    alert("Please enter valid age");
  } else {
    if (age < 20) {
      console.log("junior");
    } else if (age > 20 || age < 50) {
      console.log("regular");
    } else {
      console.log("senior");
    }
  }
};

const App = () => {
  const b = true;
  // const age = 90;
  // console.log(Number(age));
  // console.log(Number.isNaN(conv));

  function xyz() {
    alert("Copyright, Dont Copy!");
  }
  return (
    <div>
      <h1>{b}</h1>
      <button
        onClick={(e) => {
          handleClick();
        }}
        className="bg-black text-white px-2 py-1 rounded-lg"
      >
        click
      </button>
      <p onCopy={xyz}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quia
        voluptatum amet iusto consequatur aperiam architecto blanditiis delectus
        debitis nobis!
      </p>
    </div>
  );
};

export default App;
