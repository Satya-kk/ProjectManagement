const Sidebar = () => {
  return (
    <div className="w-64 bg-darkBg text-white p-6">
      <h1 className="text-2xl font-bold mb-8 text-primary">
        ProjectPro
      </h1>

      <ul className="space-y-4">
        <li className="hover:bg-primary p-3 rounded-lg cursor-pointer transition">
          Dashboard
        </li>
        <li className="hover:bg-primary p-3 rounded-lg cursor-pointer transition">
          Projects
        </li>
        <li className="hover:bg-primary p-3 rounded-lg cursor-pointer transition">
          Tasks
        </li>
        <li className="hover:bg-primary p-3 rounded-lg cursor-pointer transition">
          Teams
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
