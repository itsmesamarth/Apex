export default function NotebookIntro() {
    return (
        <section
            className="notebook-intro"
            id="thoughts"
        >
            <div className="notebook-intro__meta">
                <span>01</span>
                <span>THE NOTEBOOK</span>
            </div>

            <div className="notebook-intro__content">
                <h2 className="notebook-intro__title">
                    An open notebook
                    <br />
                    of things worth
                    <br />
                    keeping.
                </h2>

                <p className="notebook-intro__description">
                    Ideas. Images. Films. Books.
                    Observations. Things I'm still
                    trying to understand.
                </p>

                <a
                    href="#index"
                    className="notebook-intro__enter"
                >
                    <span>Enter the notebook</span>
                    <span aria-hidden="true">↘</span>
                </a>
            </div>
        </section>
    );
}