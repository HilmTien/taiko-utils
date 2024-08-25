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
        const res = await fetch("/api/osu-auth/whoami");
        const user = await res.json();
        console.log(user);
      }
    }, 100);
  }

  return <div onClick={login}>Hei</div>;
}
