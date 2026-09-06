const drawers = [
    {
        number: "01",
        category: "IDEAS",
        title: "The Ship of Theseus",
        description:
            "Questions about identity, continuity and change.",
    },
    {
        number: "02",
        category: "FILMS",
        title: "In the Mood for Love",
        description:
            "Films that stay in the mind long after the credits.",
    },
    {
        number: "03",
        category: "BOOKS",
        title: "The Myth of Sisyphus",
        description:
            "Books I return to, underline and argue with.",
    },
    {
        number: "04",
        category: "OBJECTS",
        title: "Things Worth Keeping",
        description:
            "Objects, designs and small things that caught my eye.",
    },
];

export default function Cabinet() {
    return (
        <section
            className="cabinet"
            id="cabinet"
        >
            <div className="cabinet__header">
                <span>04</span>
                <span>THE CABINET</span>
                <span>ARCHIVE</span>
            </div>

            <div className="cabinet__intro">
                <h2>
                    A cabinet
                    <br />
                    of curiosities.
                </h2>

                <p>
                    Ideas, films, books and objects
                    that made me stop for a moment.
                </p>
            </div>

            <div className="cabinet__drawers">
                {drawers.map((drawer) => (
                    <a
                        href="#"
                        className="cabinet-drawer"
                        key={drawer.number}
                    >
                        <div className="cabinet-drawer__number">
                            {drawer.number}
                        </div>

                        <div className="cabinet-drawer__content">
                            <span className="cabinet-drawer__category">
                                {drawer.category}
                            </span>

                            <h3>{drawer.title}</h3>

                            <p>{drawer.description}</p>
                        </div>

                        <span className="cabinet-drawer__arrow">
                            ↗
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}