

//***** introducing a variable as a function which returns some HTML tags
const App = function _App() {
    return `
        <h1>Hello Vanilla JS</h1>
        <div>Example of state management in Vanilla JS</div>
  `;
}

document.getElementById('root').innerHTML = App()
