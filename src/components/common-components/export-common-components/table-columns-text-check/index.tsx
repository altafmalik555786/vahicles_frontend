// import { getUserOnRole, numberWithCommas } from "@utils/common-functions";
// import { DOUBLE_DASH } from "@utils/const";

export const ColTextCheck = (text) => {
  return (
    <p className="dynamicColorOnHover">
      {text
        ? typeof text === "number"
          ? text?.toFixed(1)
          : text
        : text === 0
        ? 0
        : '--'}
    </p>
  );
};

export const ColUserOnRole = (role) => <p>name</p>;
