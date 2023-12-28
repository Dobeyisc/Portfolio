import { ThemeToogle } from "./theme-toogle";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full pt-6 border-t border-neutral-100 dark:border-neutral-800">
      <div className="container flex items-center justify-between">
        <div className="text-xs text-neutral-500">
          Built by @Dobeyisc | ©2023 Dobeyisc. All Rights Reserved
        </div>
        <ThemeToogle />
      </div>
    </div>
  );
};

export default Footer;