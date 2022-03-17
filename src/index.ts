import { Platform } from "react-native";
import PickerAndroid from "./picker.android";
import PickerIOS from "./picker.ios";

const Picker = Platform.OS === "android" ? PickerAndroid : PickerIOS;

export default Picker;
