import React from 'react';
import { Picker as RNPicker } from 'react-native';

import PickerModalIOS from './picker-modal';

// https://facebook.github.io/react-native/docs/picker-item

export default function Picker({ mode, ...rest }) {
  if (mode === 'dialog') {
    return <PickerModalIOS {...rest} PickerComponent={RNPicker} />;
  }

  return <RNPicker {...rest} />;
}

Picker.Item = RNPicker.Item;
