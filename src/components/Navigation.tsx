interface NavigationProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Navigation({
    isOpen,
    onClose,
}: NavigationProps) {
    return (
        <nav
            className={`site-menu ${
                isOpen ? "is-open" : ""
            }`}
            id="site-menu"
            aria-label="Main navigation"
            aria-hidden={!isOpen}
        >
            <div className="menu-inner">
                <a
                    href="#thoughts"
                    className="menu-link"
                    onClick={onClose}
                >
                    Notebook
                </a>

                <a
                    href="#index"
                    className="menu-link"
                    onClick={onClose}
                >
                    Index
                </a>

                <a
                    href="#things-kept"
                    className="menu-link"
                    onClick={onClose}
                >
                    Things I've Kept
                </a>

                <a
                    href="#cabinet"
                    className="menu-link"
                    onClick={onClose}
                >
                    Cabinet
                </a>
            </div>
        </nav>
    );
}