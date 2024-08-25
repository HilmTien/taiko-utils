import LoginButton from "./LoginButton";

export default function Navbar() {
  return (
    <header className="h-14 w-full top-0 bg-muted">
      <div className="ml-auto mr-auto max-w-screen-lg">
        <LoginButton />
      </div>
    </header>
  );
}
