"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import usersJson from "../database/users.json";

export type User = (typeof usersJson)[number];

export const emptyUser: User = {
  _id: "",
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "STUDENT",
  loginId: "",
  section: "",
  lastActivity: "",
  totalActivity: "",
};

export function canManageCourses(role?: string) {
  return role === "FACULTY" || role === "ADMIN";
}

type AccountContextValue = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  users: User[];
  addUser: (user: User) => User | null;
  updateUser: (user: User) => void;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(usersJson);

  const addUser = (user: User) => {
    const username = user.username.trim();
    if (!username || users.some((item) => item.username.toLowerCase() === username.toLowerCase())) return null;
    const created = { ...emptyUser, ...user, username, _id: crypto.randomUUID() };
    setUsers((current) => [...current, created]);
    return created;
  };

  const updateUser = (user: User) => {
    setUsers((current) => current.map((item) => item._id === user._id ? { ...item, ...user } : item));
    setCurrentUser((current) => current?._id === user._id ? { ...current, ...user } : current);
  };

  return (
    <AccountContext.Provider value={{ currentUser, setCurrentUser, users, addUser, updateUser }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) {
    throw new Error("useAccountContext must be used inside AccountProvider");
  }
  return value;
}
