import React from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";

import PickerModalIOS from "./picker-modal.ios";

export default function DateTimePicker({ modal, ...rest }) {
  if (modal === true) {
    return <PickerModalIOS {...rest} Component={RNDateTimePicker} />;
  }

  return <RNDateTimePicker {...rest} />;
}
