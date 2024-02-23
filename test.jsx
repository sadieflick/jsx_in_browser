const TodoItem = () => {
    
    return (
        <p className="para">TESTING SOMETHING!!!</p>
    )
}

const App = () => {
    console.log("*****************************")
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(TodoItem());
    const test = <h1> hello world </h1>
    root.render(test);
}

document.addEventListener('DOMContentLoaded', App);

// export default App