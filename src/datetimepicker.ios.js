import React from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";

import ModalIOS from "./modal.ios";

export default function DateTimePicker({
  backgroundColor,
  color,
  modal = false,
  onDismiss,
  ...rest
}) {
  const picker = <RNDateTimePicker {...rest} />;

  if (modal) {
    return (
      <ModalIOS {...{ color, backgroundColor, visible: true, onDismiss }}>
        {picker}
      </ModalIOS>
    );
  }

  return picker;
}
