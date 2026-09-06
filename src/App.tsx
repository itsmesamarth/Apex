import { useState } from "react";

import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import NotebookIntro from "./components/NotebookIntro";
import NotebookIndex from "./components/NotebookIndex";
import ThingsKept from "./components/ThingsKept";
import Cabinet from "./components/Cabinet";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Hero
                menuOpen={menuOpen}
                onMenuToggle={() => setMenuOpen((open) => !open)}
            />

            <Navigation
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />

            <main>
                <NotebookIntro />
                <NotebookIndex />
                <ThingsKept />
                <Cabinet />
            </main>
        </>
    );
}

export default App;