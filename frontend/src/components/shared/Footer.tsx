import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-4 mt-20 border-t ">
      <div className="flex justify-center items-center gap-2 md:gap-4 typography">
        <p>&copy; 2025 babble. Made with ❤️ by <Link to="https://www.linkedin.com/in/mitalis14/" target="_blank">Mitali</Link></p>
      </div>
    </footer>
  );
};
