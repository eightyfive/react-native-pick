import React, { Fragment, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import ModalIOS from './modal';

export default function PickerModalIOS({
  enabled = true,
  placeholderIOS,
  PickerComponent,
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

      <ModalIOS {...{ visible, onDone: close }}>
        <PickerComponent {...{ ...rest, enabled }} />
      </ModalIOS>
    </Fragment>
  );
}
