import "./App.css";

// API URL: https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json

// #TASK 1
// Call the above api when the page loads and console log the api response

// #TASK 2
// Use the response from the above api as input and convert it to generate the following object
// {
//   vegetables:3.5200000000000005, // sum of all item prices that are of type vegetables
//   meat:7.23, // sum of all item prices that are of type meat
//   soup:4.78 // sum of all item prices that are of type soup
// }

// #TASK 3
// Create a Counter.
// You will notice a <p> tag and a <button> element in the JSX parent
// Every time someone clicks on the button, the counter should go up by 1 and the current count value should be displayed in the <p> tag.

// #TASK 4
// Use the App.css file to define a class.
// This style class should center the <p> tag and the <button> tag in the exact center of the screen

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
