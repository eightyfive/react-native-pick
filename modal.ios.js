import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function ModalIOS({
  animationType = "slide",
  backgroundColor: bg,
  color: text,
  children,
  doneText = "Done",
  onDone,
  ...rest
}) {
  // https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/
  const backgroundColor = bg || "rgb(242, 242, 247)"; // systemGray6;
  const color = text || "rgb(0, 122, 255)"; // systemBlue

  return (
    <Modal
      {...{
        ...rest,
        animationType,
        transparent: true,
      }}
    >
      <TouchableWithoutFeedback onPress={onDone}>
        <View style={styles.mask} />
      </TouchableWithoutFeedback>
      <View style={[styles.container, { backgroundColor }]}>
        <View style={styles.accessory}>
          <TouchableOpacity onPress={onDone}>
            <Text style={[styles.button, { color }]}>{doneText}</Text>
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
