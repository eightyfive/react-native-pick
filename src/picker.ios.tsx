import React, { FC, ComponentType } from "react";
import {
  Picker as RNPicker,
  PickerItemProps,
} from "@react-native-picker/picker";

import PickerModalIOS, { PickerModalIOSProps } from "./picker-modal.ios";

type Props = Omit<PickerModalIOSProps, "Component">;

type PickerType = FC<Props> & {
  Item: ComponentType<PickerItemProps>;
};

const Picker: PickerType = ({ mode, ...rest }) => {
  if (mode === "dialog") {
    return <PickerModalIOS {...rest} Component={RNPicker} />;
  }

  return <RNPicker {...rest} />;
};

Picker.Item = RNPicker.Item;

export default Picker;
