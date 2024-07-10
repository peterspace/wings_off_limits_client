const Feature = ({ adventure }) => {
  return (
    <div className="rounded bg-button-primary overflow-hidden flex flex-row items-center justify-center p-2.5 text-left text-sm text-gray-100 font-poppins">
      <div className="relative font-medium">{adventure}</div>
    </div>
  );
};

export default Feature;
