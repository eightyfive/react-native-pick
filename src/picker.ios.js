import React from "react";
import { Picker as RNPicker } from "@react-native-picker/picker";

import PickerModalIOS from "./picker-modal.ios";

export default function Picker({ mode, ...rest }) {
  if (mode === "dialog") {
    return <PickerModalIOS {...rest} Component={RNPicker} />;
  }

  return <RNPicker {...rest} />;
}

Picker.Item = RNPicker.Item;
