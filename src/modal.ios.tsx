import React, { FC } from "react";
import {
  Modal,
  ModalProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export type ModalIOSProps = ModalProps & {
  backgroundColor?: string;
  color?: string;
  doneText?: string;
  onDismiss: () => void;
};

const ModalIOS: FC<ModalIOSProps> = ({
  // https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/
  backgroundColor = "rgb(242, 242, 247)", // systemGray6
  color = "rgb(0, 122, 255)", // systemBlue
  children,
  doneText = "Done",
  onDismiss,
  ...rest
}) => {
  return (
    <Modal {...rest} transparent animationType={rest.animationType || "slide"}>
      <TouchableWithoutFeedback onPress={onDismiss}>
        <View style={$.mask} />
      </TouchableWithoutFeedback>
      <View style={[$.container, { backgroundColor }]}>
        <View style={$.accessory}>
          <TouchableOpacity onPress={onDismiss}>
            <Text style={[$.button, { color }]}>{doneText}</Text>
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </Modal>
  );
};

export default ModalIOS;

const $ = StyleSheet.create({
  mask: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  accessory: {
    height: 44,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    fontWeight: "600",
    fontSize: 17,
  },
});
