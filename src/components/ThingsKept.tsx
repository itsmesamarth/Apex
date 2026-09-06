const images = [
    {
        number: "01",
        src: "/assets/archive-01.jpg",
        alt: "Archive image one",
    },
    {
        number: "02",
        src: "/assets/archive-02.jpg",
        alt: "Archive image two",
    },
    {
        number: "03",
        src: "/assets/archive-03.jpg",
        alt: "Archive image three",
    },
];

export default function ThingsKept() {
    return (
        <section
            className="things-kept"
            id="things-kept"
        >
            <div className="things-kept__header">
                <span>03</span>
                <span>THINGS I'VE KEPT</span>
                <span>ARCHIVE</span>
            </div>

            <div className="things-kept__intro">
                <h2>
                    Things I've
                    <br />
                    kept.
                </h2>

                <p>
                    Images, fragments and small
                    things I keep returning to.
                </p>
            </div>

            <div className="things-kept__grid">
                {images.map((image) => (
                    <a
                        href="#"
                        className="kept-item"
                        key={image.number}
                    >
                        <div className="kept-item__image">
                            <img
                                src={image.src}
                                alt={image.alt}
                            />
                        </div>

                        <div className="kept-item__meta">
                            <span>{image.number}</span>
                            <span>IMAGE</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}