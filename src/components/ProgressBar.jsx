const ProgressBar = ({ percentage }) => {
  return (
    <div class="bg-gray-light w-full rounded-full h-4">
      <div
        class="bg-cyan-light h-4 rounded-full"
        style={{ width: `${percentage}` }}
      ></div>
    </div>
  );
};

export default ProgressBar;