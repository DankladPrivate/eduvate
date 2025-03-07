"use client";
import { Switch } from "@headlessui/react";
import { useState } from "react";

const ButtonSwitch = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`
      relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-secondaryColor bg-bgColorTwo transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0 "}
        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-primaryColor  shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default ButtonSwitch;
