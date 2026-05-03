import { Link } from "react-router-dom";
import amrgLogo from "@/assets/images/projects/contact-center/AMRG_Projects_logo.svg";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <img src={amrgLogo} alt="AMRG Projects" className="h-6 sm:h-8 w-auto" />
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} All rights reserved. Designed with passion.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
