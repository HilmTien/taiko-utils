"use client";

export default function LoginButton() {
  async function login() {
    const width = 600;
    const height = 800;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const popup = window.open(
      "/osu/login",
      "",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    );

    if (!popup) {
      alert("pls disable popup blocker");
      return;
    }

    const loop = setInterval(async () => {
      if (popup.closed) {
        clearInterval(loop);
        location.reload();
      }
    }, 100);
  }

  return (
    <span className="hover:cursor-pointer" onClick={login}>
      Login
    </span>
  );
}
