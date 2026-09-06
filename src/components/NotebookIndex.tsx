const entries = [
    {
        number: "01",
        title: "The Ship of Theseus",
        description:
            "On identity, replacement and what makes something remain itself.",
        category: "PHILOSOPHY",
        date: "06.09.26",
    },
    {
        number: "02",
        title: "In the Mood for Love",
        description:
            "A film about proximity, restraint and everything left unsaid.",
        category: "FILM",
        date: "02.09.26",
    },
    {
        number: "03",
        title: "On Boredom",
        description:
            "Notes on attention, discomfort and doing nothing.",
        category: "THOUGHT",
        date: "28.08.26",
    },
    {
        number: "04",
        title: "A Photograph from 1973",
        description:
            "An image that says more than it should.",
        category: "IMAGE",
        date: "21.08.26",
    },
];

export default function NotebookIndex() {
    return (
        <section
            className="notebook-index"
            id="index"
        >
            <div className="notebook-index__header">
                <span>02</span>
                <span>INDEX</span>
                <span>06.09.26</span>
            </div>

            <div className="notebook-index__intro">
                <h2>
                    The notebook
                    <br />
                    starts here.
                </h2>

                <p>
                    A growing collection of ideas,
                    images, films, books and things
                    worth returning to.
                </p>
            </div>

            <div className="notebook-index__entries">
                {entries.map((entry) => (
                    <a
                        href="#"
                        className="index-entry"
                        key={entry.number}
                    >
                        <span className="index-entry__number">
                            {entry.number}
                        </span>

                        <div className="index-entry__main">
                            <h3>{entry.title}</h3>

                            <p>
                                {entry.description}
                            </p>
                        </div>

                        <div className="index-entry__meta">
                            <span>{entry.category}</span>
                            <span>{entry.date}</span>
                        </div>

                        <span className="index-entry__arrow">
                            ↗
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}