const RewardButton = ({ outOfStock, setIsOpen }) => {
  return (
    <div>
      {outOfStock ? (
        <button
          disabled
          className="bg-black text-white rounded-full py-3 sm:px-10 px-6 font-bold"
        >
          Out Of Stock
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-cyan-light text-white rounded-full py-3 sm:px-10 px-6 font-bold hover:bg-cyan-dark"
        >
          Select Reward
        </button>
      )}
    </div>
  );
};

export default RewardButton;
