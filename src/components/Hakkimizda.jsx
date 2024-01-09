import { useTranslation } from "react-i18next";

const Hakkimizda = () => {
  const { t } = useTranslation();
  return (
    <div className=" flex flex-col gap-6 mt-6 items-center wrapper ">
      <h2 className="font-bold text-2xl text-red-400 uppercase ">
        {t("hakkımızda")}
      </h2>
      <p className="text-slate-500 ">{t("hakkımızda_text")}</p>
    </div>
  );
};

export default Hakkimizda;
