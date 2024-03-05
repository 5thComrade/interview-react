import "./App.css";

// API URL: https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json

// #TASK 1
// Call the above api when the page loads and console log the api response

// #TASK 2
// Use the response from the above api as input and convert it to generate the following object. Each key in the object is the type
// and each value is the sum of prices for that particular type. The function you write should be scalable, meaning it should be able to
// handle any number of types.

// {
//   vegetables:3.5200000000000005,
//   meat:7.23,
//   ...
//   ...
// }

// #TASK 3
// Create a Counter.
// You will notice a <p> tag and a <button> element in the JSX parent
// Every time someone clicks on the button, the counter should go up by 1 and the current count value should be displayed in the <p> tag.

// #TASK 4
// Use the App.css file to define a class.
// This style class should center the <p> tag and the <button> tag in the exact center of the screen. Vertically and horizontally the
// elements should be in the center.

function App() {
  return (
    <main>
      <div>
        <p>Show Count Here</p>
        <button>Add 1</button>
      </div>
    </main>
  );
}

export default App;
