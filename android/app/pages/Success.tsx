import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Success = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.success}>
      <View style={[styles.cart, styles.cartFlexBox]}>
        <View style={styles.cartFlexBox}>
          <Image
            style={styles.cartIcon}
            resizeMode="cover"
            source={require("../assets/cart1.png")}
          />
          <Pressable
            style={styles.checkout}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Text style={styles.continueShopping}>Continue Shopping</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.paymentSuccessful}>
        <Image
          style={styles.fi2946636Icon}
          resizeMode="cover"
          source={require("../assets/fi-2946636.png")}
        />
        <View style={styles.paymentSuccessfulParent}>
          <Text style={styles.paymentSuccessful1}>Payment Successful</Text>
          <Text style={[styles.satisfiedConveyingDependent, styles.textClr]}>
            Satisfied conveying dependent contented he gentleman
          </Text>
        </View>
      </View>
      <View style={styles.statusbar}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/group-47928.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.text, styles.textPosition]}>18:00</Text>
          </View>
        </View>
        <View style={[styles.rightSide, styles.rightSidePosition]}>
          <Image
            style={[styles.batteryIcon, styles.rightSidePosition]}
            resizeMode="cover"
            source={require("../assets/battery1.png")}
          />
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={[styles.iconMobileSignal, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon--mobile-signal1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textClr: {
    color: Color.colorSecondaryColor,
    fontWeight: "500",
  },
  leftSideLayout: {
    height: 12,
    width: 33,
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    top: 1,
    position: "absolute",
  },
  rightSidePosition: {
    height: 9,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 8,
    width: 12,
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
  continueShopping: {
    fontSize: FontSize.subHeading16M_size,
    lineHeight: 20,
    color: Color.colorBlackColor,
    textAlign: "center",
    fontFamily: FontFamily.body10R,
    fontWeight: "500",
  },
  checkout: {
    marginLeft: 5,
  },
  cart: {
    top: 749,
    left: 10,
    borderRadius: Border.br_17xl,
    backgroundColor: Color.colorSecondaryColor,
    width: 355,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_base,
    position: "absolute",
  },
  fi2946636Icon: {
    width: 200,
    height: 200,
    overflow: "hidden",
  },
  paymentSuccessful1: {
    fontSize: FontSize.heading24SM_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.heading24SM,
    color: "#05f300",
    textAlign: "center",
  },
  satisfiedConveyingDependent: {
    fontSize: FontSize.body14M_size,
    fontFamily: FontFamily.body14M,
    width: 231,
    marginTop: 5,
    textAlign: "center",
  },
  paymentSuccessfulParent: {
    marginTop: 40,
    alignItems: "center",
  },
  paymentSuccessful: {
    marginLeft: -123.5,
    top: 200,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 0,
    height: 0,
    left: "50%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.body12M_size,
    lineHeight: 10,
    textAlign: "left",
    left: 0,
    color: Color.colorSecondaryColor,
    fontWeight: "500",
    fontFamily: FontFamily.body10R,
  },
  statusbarTime: {
    marginLeft: -16.5,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -172.5,
    top: 16,
  },
  batteryIcon: {
    marginLeft: 7.8,
    width: 19,
    top: 0,
  },
  iconMobileSignal: {
    marginLeft: -26.8,
    top: 1,
    position: "absolute",
    left: "50%",
  },
  rightSide: {
    marginLeft: 108.4,
    top: 17,
    width: 54,
  },
  statusbar: {
    right: 0,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  success: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Success;
