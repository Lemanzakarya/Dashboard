import { useEffect, useState } from "react";
import axios from "axios";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setUsers(res.data.users));
  }, []);

const filtered = users.filter((user) =>
  `${user.firstName} ${user.lastName} ${user.email}`
    .toLowerCase()
    .includes(query.toLowerCase())
);


  const sorted = [...filtered].sort((a, b) =>
    sortAsc
      ? a.firstName.localeCompare(b.firstName)
      : b.firstName.localeCompare(a.firstName)
  );

  const paginated = sorted.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(0);
  };

  const handleSort = () => {
    setSortAsc(!sortAsc);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const nextPage = () => {
    setPage((p) =>
      p + 1 < Math.ceil(filtered.length / itemsPerPage) ? p + 1 : p
    );
  };

  const prevPage = () => {
    setPage((p) => Math.max(0, p - 1));
  };

  return {
    users: paginated,
    query,
    sortAsc,
    page,
    totalPages: Math.ceil(filtered.length / itemsPerPage),
    handleSearch,
    handleSort,
    handlePageChange,
    nextPage,
    prevPage,
  };
};
