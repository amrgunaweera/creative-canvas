import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import amrgLogo from "@/assets/images/AMRG_Projects_logo.svg";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
    if (isHomePage) {
      const element = document.getElementById(item.toLowerCase());
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${item.toLowerCase()}`);
    }
  };

  const handleContactClick = () => {
    setIsOpen(false);
    if (isHomePage) {
      const element = document.getElementById("contact");
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  const navItems = ["Work", "About", "Skills", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            to="/"
            className="flex items-center"
          >
            <img src={amrgLogo} alt="AMRG Projects" className="h-8 sm:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="font-medium text-muted-foreground hover:text-foreground line-reveal transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <Button
              variant="outline_hero"
              size="sm"
              onClick={handleContactClick}
              className="hidden sm:inline-flex"
            >
              Let's Talk
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-background border-border">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleNavClick(item)}
                      className="font-display font-medium text-lg text-left py-3 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={handleContactClick}
                    className="mt-4"
                  >
                    Let's Talk
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
