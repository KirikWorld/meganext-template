export const getClientSideCookie = (name: string): string | undefined => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];

  return cookieValue;
};

export const getServerSideCookie = (name: string, cookie: string): string | undefined => {
  return cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
}