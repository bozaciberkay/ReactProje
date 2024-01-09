import { useTranslation } from "react-i18next";

const Dil = () => {
  const { i18n } = useTranslation();
  const clickHanlde = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <select
      name="select"
      id="select "
      className="border-none outline-none bg-transparent text-sm"
      onChange={(e) => clickHanlde(e.target.value)}
    >
      <option value={"kk"} hidden>
        TR
      </option>
      <option className="" value="tr">
        TR
      </option>
      <option value="en">EN</option>
    </select>
  );
};

export default Dil;
