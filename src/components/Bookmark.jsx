import { useState } from "react";
import BookmarkIcon from "./BookmarkIcon";

const Bookmark = () => {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div
      onClick={() => setBookmarked(true)}
      className="flex flex-row pr-5 hover:cursor-pointer"
    >
      <BookmarkIcon status={bookmarked && "active"} />
      <p
        className={`w-40 h-14 hidden sm:block rounded-full bg-gray-light ${
          !bookmarked && "text-black"
        } ${bookmarked && "text-cyan-dark"} font-bold -ml-10 pt-3 pl-5`}
      >
        Bookmark
      </p>
    </div>
  );
};

export default Bookmark;
