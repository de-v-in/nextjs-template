import { DarkmodeAtom } from "@atoms/app";
import { cx } from "@utils/tools";
import { useRecoilValue } from "recoil";

export const MainLayout: IComponent = ({ children }) => {
  // Manual switch darkmode with state
  const darkmode = useRecoilValue(DarkmodeAtom);

  return (
    <div
      className={cx(
        {
          dark: darkmode === "dark",
        },
        "w-100 h-100"
      )}
    >
      {/* Smooth out darkmode transition with transition-all */}
      <div className="w-100 h-100 bg-white dark:bg-black transition-all">
        {children}
      </div>
    </div>
  );
};
