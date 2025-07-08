
export const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-4 mt-20 border-t ">
      <div className="flex justify-center items-center gap-2 md:gap-4 typography">
        <div className="w-16 h-8 flex items-center select-none">
          <img
            src="/logo-2.svg"
            alt="logo"
            className="w-full h-full dark:invert"
          />
        </div>
        <p>&copy; 2025 babble. Made with ❤️ by Mitali</p>
      </div>
    </footer>
  );
};
