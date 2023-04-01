

//***** introducing a variable as a function which returns some HTML tags
const App = {
    //***** add state management including variable as state and a function which updates it.
    state: {
        count: 0,
        increment: function() {
            App.state.count += 1
            someFunction() // ****** call document and its update to make the real DOM reflect state changes. 
        }
    },
    //****** add a property which returns HTML elements to make state visible and a button to change it
    _App: () => `
            <h1>${App.state.count}</h1>
            <button id='button'>Increase the number</button>
        `
}


//***** add a function which re-generate after increment function called.
function someFunction () {
    document.getElementById('root').innerHTML = App._App()
    document.getElementById('button').addEventListener('click', App.state.increment)
}
someFunction()

