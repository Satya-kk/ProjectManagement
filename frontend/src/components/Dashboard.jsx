const Card = ({ title, value }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
    <h3 className="text-gray-500">{title}</h3>
    <p className="text-3xl font-bold mt-2 text-gray-800">
      {value}
    </p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Total Projects" value="15" />
      <Card title="Active Tasks" value="42" />
      <Card title="Completed Tasks" value="120" />
    </div>
  );
};

export default Dashboard;
