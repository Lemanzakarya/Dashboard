import { useEffect, useState } from "react";
import axios from "axios";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [sortField, setSortField] = useState("firstName");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setUsers(res.data.users));
  }, []);

  const filtered = users.filter((user) => {
    const searchText =
      `${user.firstName} ${user.lastName} ${user.email}`.toLowerCase();
    return searchText.includes(query.toLowerCase());
  });

  const sorted = [...filtered].sort((a, b) => {
    let aValue, bValue;

    if (sortField === "firstName") {
      aValue = a.firstName;
      bValue = b.firstName;
    } else if (sortField === "email") {
      aValue = a.email;
      bValue = b.email;
    } else if (sortField === "company") {
      aValue = a.company?.title || "";
      bValue = b.company?.title || "";
    }

    return sortAsc
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });

  const paginated = sorted.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(0);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
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
    sortField,
    sortAsc,
    page,
    totalPages: Math.ceil(filtered.length / itemsPerPage),
    totalUsers: users.length,
    filteredUsers: filtered.length,
    handleSearch,
    handleSort,
    nextPage,
    prevPage,
  };
};
