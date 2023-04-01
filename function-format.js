
const App = function _App() {
    return `
        <div>Number is ${App.state.count}</div>
        <button id='my-button'>Increment</button>
    `
}

// define states inside App object by defining new property to it. 
App.state = {
    count: 0,
    increment: function() {
        App.state.count += 1
        domManipulator()
    }
}

// add a function and call it inside increment function 
// so it will be generated after App.state.count updated and DOM will reflect the changes. but not optimized
function domManipulator() {
    document.getElementById('root').innerHTML = App()
    document.getElementById('my-button').addEventListener('click', App.state.increment)
}
domManipulator()

