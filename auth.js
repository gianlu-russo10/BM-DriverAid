function checkLogin(u, p) {
  const utenti = [
    { username: "grusso", password: "gr10" },
    { username: "mgarioni", password: "u2" },
    { username: "user3", password: "u3" }
  ];

  return utenti.some(x => x.username === u && x.password === p);
}
