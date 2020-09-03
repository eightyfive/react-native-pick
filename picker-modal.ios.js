import React, { Fragment, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import ModalIOS from "./modal.ios";

export default function PickerModalIOS({
  backgroundColor,
  children,
  color,
  enabled = true,
  placeholderIOS,
  Component,
  ...rest
}) {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <Fragment>
      <TouchableOpacity {...{ disabled: !enabled, onPress: show }}>
        <View pointerEvents="none">{placeholderIOS}</View>
      </TouchableOpacity>

      <ModalIOS {...{ color, backgroundColor, visible, onDismiss: hide }}>
        {children ? (
          children
        ) : (
          <Component {...{ ...rest, children, enabled }} />
        )}
      </ModalIOS>
    </Fragment>
  );
}
