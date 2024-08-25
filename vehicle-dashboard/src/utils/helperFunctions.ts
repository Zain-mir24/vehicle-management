export const splitRoute = (pathname: string) => {
  console.log(pathname, "pathname");
  const route = pathname?.split("/");
  const routeName = route[route.length - 1]?.split("-");
  let name = "";
  routeName?.map((item) => {
    name = name + " " + item[0]?.toUpperCase() + item.slice(1, item.length);
  });

  return name;
};
