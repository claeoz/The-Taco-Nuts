import { useEffect, useState } from 'react';
import './App.css';

interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>The Taco Nuts</h1>
                <p>Welcome to our React + ASP.NET Core application!</p>
            </header>

            <main className="home-content">
                <h2>Home</h2>
                <p>
                    This is the homepage for our project.
                </p>

                <button onClick={() => alert('Hello from React!')}>
                    Click me!
                </button>
            </main>
        </div>
    );
}

export default App;