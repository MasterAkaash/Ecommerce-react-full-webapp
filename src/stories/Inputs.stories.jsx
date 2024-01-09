import React from "react";

import { Input } from "components";

export default {
  title: "akaash_s_application2/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder0",
  variant: "OutlineBluegray100",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
