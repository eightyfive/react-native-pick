import React, { Fragment, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import ModalIOS from './modal';

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

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return (
    <Fragment>
      <TouchableOpacity {...{ disabled: !enabled, onPress: open }}>
        <View pointerEvents="none">{placeholderIOS}</View>
      </TouchableOpacity>

      <ModalIOS {...{ color, backgroundColor, visible, onDone: close }}>
        {children ? children : <Component {...{ ...rest, children, enabled }} />}
      </ModalIOS>
    </Fragment>
  );
}
