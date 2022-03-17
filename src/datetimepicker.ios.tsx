import React, { FC } from "react";
import RNDateTimePicker, {
  IOSNativeProps,
  AndroidNativeProps,
  WindowsNativeProps,
} from "@react-native-community/datetimepicker";

import ModalIOS, { ModalIOSProps } from "./modal.ios";

type Props = ModalIOSProps &
  (IOSNativeProps | AndroidNativeProps | WindowsNativeProps) & {
    modal?: boolean;
  };

const DateTimePicker: FC<Props> = ({
  animationType,
  backgroundColor,
  color,
  doneText,
  modal = false,
  onDismiss,
  ...rest
}) => {
  const picker = <RNDateTimePicker {...rest} />;

  if (modal) {
    return (
      <ModalIOS
        {...{
          animationType,
          backgroundColor,
          color,
          doneText,
          visible: true,
          onDismiss,
        }}
      >
        {picker}
      </ModalIOS>
    );
  }

  return picker;
};

export default DateTimePicker;
