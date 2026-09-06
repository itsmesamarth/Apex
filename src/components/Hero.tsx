import { useEffect, useRef } from "react";

interface HeroProps {
    menuOpen: boolean;
    onMenuToggle: () => void;
}

export default function Hero({
    menuOpen,
    onMenuToggle,
}: HeroProps) {
    const heroRef = useRef<HTMLElement | null>(null);
    const nameRef = useRef<HTMLHeadingElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const hero = heroRef.current;
        const name = nameRef.current;
        const image = imageRef.current;

        if (!hero || !name || !image) return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) return;

        let pointerX = 0;
        let pointerY = 0;
        let currentX = 0;
        let currentY = 0;
        let scrollProgress = 0;
        let animationFrame = 0;

        const handlePointerMove = (event: PointerEvent) => {
            pointerX =
                (event.clientX / window.innerWidth - 0.5) * 2;

            pointerY =
                (event.clientY / window.innerHeight - 0.5) * 2;
        };

        const updateScroll = () => {
            const rect = hero.getBoundingClientRect();

            scrollProgress = Math.min(
                Math.max(-rect.top / window.innerHeight, 0),
                1
            );
        };

        const animate = () => {
            currentX += (pointerX - currentX) * 0.06;
            currentY += (pointerY - currentY) * 0.06;

            const nameX = currentX * 14;
            const nameY = currentY * 10;
            const nameScrollY = scrollProgress * -90;

            name.style.transform = `
                translate(
                    calc(-50% + ${nameX}px),
                    calc(-50% + ${nameY + nameScrollY}px)
                )
                rotate(-4deg)
            `;

            const imageX = currentX * -8;
            const imageY = currentY * -6;
            const imageScrollY = scrollProgress * 40;

            image.style.transform = `
                scale(1.08)
                translate(
                    ${imageX}px,
                    ${imageY + imageScrollY}px
                )
            `;

            animationFrame = requestAnimationFrame(animate);
        };

        window.addEventListener(
            "pointermove",
            handlePointerMove
        );

        window.addEventListener(
            "scroll",
            updateScroll,
            { passive: true }
        );

        updateScroll();
        animate();

        return () => {
            window.removeEventListener(
                "pointermove",
                handlePointerMove
            );

            window.removeEventListener(
                "scroll",
                updateScroll
            );

            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="hero"
            aria-label="Introduction"
        >
            <div className="hero-composition">
                <div className="hero-image">
                    <img
                        ref={imageRef}
                        src="/assets/samarth.jpg"
                        alt="Samarth"
                    />
                </div>

                <h1
                    ref={nameRef}
                    className="hero-name"
                    aria-label="समर्थ"
                >
                    समर्थ
                </h1>
            </div>

            <button
                className={`menu-trigger ${
                    menuOpen ? "is-open" : ""
                }`}
                type="button"
                aria-label={
                    menuOpen ? "Close menu" : "Open menu"
                }
                aria-expanded={menuOpen}
                onClick={onMenuToggle}
            >
                <span />
                <span />
            </button>
        </section>
    );
}