const ProgressBar = ({ percentage }) => {
  return (
    <div className="bg-gray-light w-full rounded-full h-4 sm:mb-8">
      <div
        className="bg-cyan-light h-4 rounded-full"
        style={{ width: `${percentage}` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
