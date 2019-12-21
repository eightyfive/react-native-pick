import React from 'react';
export RNDateTimePicker from '@react-native-community/datetimepicker';

import PickerModalIOS from './picker-modal';

export default function DateTimePicker({ modal, ...rest }) {
  if (modal === true) {
    return <PickerModalIOS {...rest} PickerComponent={RNDateTimePicker} />;
  }

  return <RNDateTimePicker {...rest} />;
}
