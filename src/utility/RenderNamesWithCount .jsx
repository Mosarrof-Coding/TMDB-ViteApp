/* eslint-disable react/prop-types */
export default function RenderNamesWithCount() {
  const values = [
    { name: "moss" },
    { name: "moss" },
    { name: "riol" },
    { name: "Putin" },
    { name: "Putin" },
    { name: "biden" },
    { name: "raja pakshay" },
  ].map((item) => item.name);
  // Create an object with unique names and their counts
  const nameCount = values.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  // Rendering the names with their counts
  return (
    <div className="w-full p-4">
      {Object.entries(nameCount).map(([name, count], index) => (
        <div key={index} className="flex justify-between items-center py-2">
          {/* Left: Name */}
          <span className="text-lg font-medium">{name}</span>
          {/* Right: Count */}
          <span className="text-sm text-gray-600">Count: {count}</span>
        </div>
      ))}
    </div>
  );
}
