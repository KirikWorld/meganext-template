import { Home } from "lucide-react";
import { useTranslations } from "next-intl";

export type RoutesListT = "home";
export const routesList: RoutesListT[] = ["home"];

export type RoutesT = {
  [key in RoutesListT]: {
    title: string;
    path: (prefix?: string, postfix?: string) => string;
    category: "menu" | "profile";
    icon?: React.ReactNode;
    action?: () => void;
  };
};

export function useRoutes(): RoutesT {
  const t = useTranslations("Menu");

  return {
    home: {
      title: t("home"),
      path: (prefix?: string) => (prefix ? `${prefix}/` : "/"),
      icon: <Home />,
      category: "menu"
    }
  };
}
