import ContactList from "../ContactList/ContactList";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <ContactList />
      <main>
        <Outlet />
      </main>
    </>
  );
}
