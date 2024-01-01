"use client";

import { useState } from "react";
import Search from "../Search/Search";

const PageSearch = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <Search
      roomTypeFilter={roomTypeFilter}
      searchQuery={searchQuery}
      setRoomTypeFilter={setRoomTypeFilter}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default PageSearch;
