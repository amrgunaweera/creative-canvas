import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: string) => {
    if (item === "About") {
      navigate("/about");
    } else if (isHomePage) {
      const element = document.getElementById(item.toLowerCase());
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${item.toLowerCase()}`);
    }
  };

  const handleContactClick = () => {
    if (isHomePage) {
      const element = document.getElementById("contact");
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className="font-display font-bold text-2xl text-gradient"
          >
            Portfolio
          </a>

          <div className="hidden md:flex items-center gap-8">
            {["Work", "About", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="font-medium text-muted-foreground hover:text-foreground line-reveal transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="outline_hero"
              size="sm"
              onClick={handleContactClick}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
