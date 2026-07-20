export default function Navbar({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-teal-500 h-[10%] shadow p-4 transition-transform duration-500 z-40
      ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
    >
    </div>
  );
}