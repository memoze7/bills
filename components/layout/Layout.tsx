import React from "react";
import {Sidebar} from "./Sidebar";
import {Navbar} from "./Navbar";

interface Props {
  children: React.ReactNode
}
export const Layout:React.FC<Props> = ({ children }) => {
  return (
      <div>
        <Navbar />
        <Sidebar />
        { children }
      </div>
    )}