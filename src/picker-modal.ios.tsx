import React, { ElementType, FC, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { PickerProps } from "@react-native-picker/picker";
import ModalIOS, { ModalIOSProps } from "./modal.ios";

export type PickerModalIOSProps = PickerProps &
  ModalIOSProps & {
    enabled?: boolean;
    placeholderIOS: JSX.Element;
    Component: ElementType;
  };

const PickerModalIOS: FC<PickerModalIOSProps> = ({
  backgroundColor,
  children,
  color,
  enabled = true,
  placeholderIOS,
  Component,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <>
      <TouchableOpacity {...{ disabled: !enabled, onPress: show }}>
        <View pointerEvents="none">{placeholderIOS}</View>
      </TouchableOpacity>

      <ModalIOS {...{ color, backgroundColor, visible, onDismiss: hide }}>
        <Component {...{ ...rest, children, enabled }} />
      </ModalIOS>
    </>
  );
};

export default PickerModalIOS;
