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
        "w-full h-full"
      )}
    >
      {/* Smooth out darkmode transition with transition-all */}
      <div className="w-full h-full bg-white dark:bg-black transition-all">
        {children}
      </div>
    </div>
  );
};
