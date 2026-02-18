const Navbar = () => {
  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-700">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
          S
        </div>
      </div>
    </div>
  );
};

export default Navbar;
