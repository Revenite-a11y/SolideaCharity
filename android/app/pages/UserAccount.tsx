import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";

const UserAccount = () => {
  return (
    <View style={[styles.userAccount, styles.userAccountLayout]}>
      <View style={[styles.form, styles.formPosition]}>
        <View style={[styles.form1, styles.formPosition]}>
          <View>
            <Text style={[styles.name, styles.nameTypo]}>Name</Text>
            <View style={styles.searchBar}>
              <View style={styles.searchBarChild} />
              <View style={[styles.frameParent, styles.framePosition]}>
                <View style={styles.userFlexBox}>
                  <Image
                    style={[styles.userCircleIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/usercircle.png")}
                  />
                  <Text style={[styles.myOrders, styles.myOrdersTypo]}>
                    Samuel Bishop
                  </Text>
                </View>
                <Image
                  style={[styles.chevronDownIcon, styles.chevronIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/chevrondown1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.emailParent}>
            <Text style={[styles.name, styles.nameTypo]}>Email</Text>
            <View style={styles.searchBar}>
              <View style={styles.searchBarChild} />
              <View style={[styles.frameParent, styles.framePosition]}>
                <View style={styles.userFlexBox}>
                  <Image
                    style={[styles.userCircleIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/envelope.png")}
                  />
                  <Text style={[styles.myOrders, styles.myOrdersTypo]}>
                    example@gmail.com
                  </Text>
                </View>
                <Image
                  style={[styles.chevronDownIcon, styles.chevronIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/chevrondown1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.emailParent}>
            <Text style={[styles.name, styles.nameTypo]}>Contact</Text>
            <View style={styles.searchBar}>
              <View style={styles.searchBarChild} />
              <View style={[styles.frameParent, styles.framePosition]}>
                <View style={styles.userFlexBox}>
                  <Image
                    style={[styles.userCircleIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/phone.png")}
                  />
                  <Text style={[styles.myOrders, styles.myOrdersTypo]}>
                    (760) 895-4146 78985
                  </Text>
                </View>
                <Image
                  style={[styles.chevronDownIcon, styles.chevronIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/chevrondown1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.emailParent}>
            <Text style={[styles.name, styles.nameTypo]}>Gender</Text>
            <View style={styles.searchBar}>
              <View style={styles.searchBarChild} />
              <View style={[styles.frameView, styles.frameViewFlexBox]}>
                <View style={styles.userFlexBox}>
                  <Image
                    style={[styles.userCircleIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/malegender.png")}
                  />
                  <Text style={[styles.myOrders, styles.myOrdersTypo]}>
                    Male
                  </Text>
                </View>
                <Image
                  style={[styles.chevronDownIcon3, styles.chevronIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/chevrondown2.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.emailParent}>
            <Text style={[styles.name, styles.nameTypo]}>Date of birth</Text>
            <View style={styles.searchBar}>
              <View style={styles.searchBarChild} />
              <View style={[styles.frameView, styles.frameViewFlexBox]}>
                <View style={styles.userFlexBox}>
                  <Image
                    style={[styles.userCircleIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/calendar.png")}
                  />
                  <Text style={[styles.myOrders, styles.myOrdersTypo]}>
                    24-01-2000
                  </Text>
                </View>
                <Image
                  style={[styles.chevronDownIcon3, styles.chevronIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/calendardays.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.name1, styles.userFlexBox]}>
          <Image
            style={styles.nameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-25.png")}
          />
          <View style={styles.samuelBishopParent}>
            <Text style={[styles.samuelBishop, styles.nameTypo]}>
              Samuel Bishop
            </Text>
            <Text style={[styles.examplegmailcom, styles.myOrdersTypo]}>
              example@gmail.com
            </Text>
          </View>
        </View>
        <Text style={[styles.myProfile, styles.nameTypo]}>My Profile</Text>
        <View style={[styles.userAccount1, styles.userFlexBox]}>
          <Image
            style={styles.chevronLeftIcon}
            resizeMode="cover"
            source={require("../assets/chevronleft.png")}
          />
          <Text style={[styles.shopByCategory, styles.myOrdersTypo]}>
            User account
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
      <View style={styles.fixedBottom}>
        <Image
          style={[styles.fixedBottomChild, styles.userAccountLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <View style={[styles.homeParent, styles.frameViewFlexBox]}>
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/home1.png")}
          />
          <Image
            style={[styles.searchIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/search1.png")}
          />
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/cart.png")}
          />
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/heart1.png")}
          />
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/user1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userAccountLayout: {
    width: "100%",
    overflow: "hidden",
  },
  formPosition: {
    left: 5,
    position: "absolute",
  },
  nameTypo: {
    textAlign: "left",
    color: Color.colorSecondaryColor,
    fontFamily: FontFamily.body10R,
    fontWeight: "500",
  },
  framePosition: {
    zIndex: 1,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    top: 14,
    alignItems: "center",
    left: 0,
    width: 355,
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  myOrdersTypo: {
    fontFamily: FontFamily.body14M,
    fontSize: FontSize.body14M_size,
    textAlign: "left",
    color: Color.colorSecondaryColor,
    fontWeight: "500",
  },
  chevronIconLayout: {
    height: 16,
    width: 16,
  },
  frameViewFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  userFlexBox: {
    alignItems: "center",
    flexDirection: "row",
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
  name: {
    lineHeight: 15,
    opacity: 0.5,
    fontSize: FontSize.body12M_size,
    color: Color.colorSecondaryColor,
    fontFamily: FontFamily.body10R,
    fontWeight: "500",
  },
  searchBarChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorViolateColor,
    height: 50,
    zIndex: 0,
    width: 355,
  },
  userCircleIcon: {
    opacity: 0.5,
  },
  myOrders: {
    marginLeft: 10,
  },
  chevronDownIcon: {
    display: "none",
    marginLeft: 5,
  },
  frameParent: {
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    top: 14,
    position: "absolute",
  },
  searchBar: {
    justifyContent: "center",
    marginTop: 5,
  },
  emailParent: {
    marginTop: 15,
  },
  chevronDownIcon3: {
    opacity: 0.5,
  },
  frameView: {
    zIndex: 1,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    top: 14,
    alignItems: "center",
    left: 0,
    width: 355,
    justifyContent: "space-between",
  },
  form1: {
    top: 182,
  },
  nameChild: {
    borderRadius: Border.br_131xl,
    width: 60,
    height: 60,
  },
  samuelBishop: {
    fontSize: FontSize.subHeading18M_size,
  },
  examplegmailcom: {
    marginTop: 5,
    opacity: 0.5,
  },
  samuelBishopParent: {
    marginLeft: 15,
  },
  name1: {
    top: 92,
    left: 5,
    position: "absolute",
  },
  myProfile: {
    top: 50,
    fontSize: FontSize.subHeading20M_size,
    left: 5,
    position: "absolute",
  },
  chevronLeftIcon: {
    width: 20,
    height: 20,
  },
  shopByCategory: {
    marginLeft: 5,
  },
  userAccount1: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  form: {
    top: 44,
    width: 360,
    height: 592,
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
    lineHeight: 10,
    left: 0,
    textAlign: "left",
    color: Color.colorSecondaryColor,
    fontFamily: FontFamily.body10R,
    fontWeight: "500",
    fontSize: FontSize.body12M_size,
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
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  fixedBottomChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  searchIcon: {
    overflow: "hidden",
  },
  homeParent: {
    marginTop: -12,
    marginLeft: -159.5,
    top: "50%",
    width: 320,
    left: "50%",
    overflow: "hidden",
  },
  fixedBottom: {
    top: 752,
    left: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 60,
    width: 355,
    position: "absolute",
  },
  userAccount: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default UserAccount;
