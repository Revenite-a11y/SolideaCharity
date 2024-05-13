import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const UserProfile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.userProfile, styles.userProfileLayout]}>
      <View style={[styles.myProfile, styles.profilePosition]}>
        <View style={[styles.listing, styles.profilePosition]}>
          <View style={styles.searchBar}>
            <View style={styles.searchBarChild} />
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={[styles.boxArchiveParent, styles.nameFlexBox]}>
                <Image
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../assets/boxarchive.png")}
                />
                <Text style={[styles.myOrders, styles.myOrdersTypo]}>
                  My Orders
                </Text>
              </View>
              <Image
                style={styles.chevronDownIcon}
                resizeMode="cover"
                source={require("../assets/chevrondown1.png")}
              />
            </View>
          </View>
          <View style={styles.searchBar1}>
            <View style={styles.searchBarChild} />
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={[styles.boxArchiveParent, styles.nameFlexBox]}>
                <Image
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../assets/heart1.png")}
                />
                <Text style={[styles.myOrders, styles.myOrdersTypo]}>
                  My Wishlist
                </Text>
              </View>
              <Image
                style={styles.chevronDownIcon}
                resizeMode="cover"
                source={require("../assets/chevrondown1.png")}
              />
            </View>
          </View>
          <View style={styles.searchBar1}>
            <View style={styles.searchBarChild} />
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={[styles.boxArchiveParent, styles.nameFlexBox]}>
                <Image
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../assets/locationdot.png")}
                />
                <Text style={[styles.myOrders, styles.myOrdersTypo]}>
                  Shipping Address
                </Text>
              </View>
              <Image
                style={styles.chevronDownIcon}
                resizeMode="cover"
                source={require("../assets/chevrondown1.png")}
              />
            </View>
          </View>
          <View style={styles.searchBar1}>
            <View style={styles.searchBarChild} />
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={[styles.boxArchiveParent, styles.nameFlexBox]}>
                <Image
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../assets/creditcard.png")}
                />
                <Text style={[styles.myOrders, styles.myOrdersTypo]}>
                  Payment Method
                </Text>
              </View>
              <Image
                style={styles.chevronDownIcon}
                resizeMode="cover"
                source={require("../assets/chevrondown1.png")}
              />
            </View>
          </View>
          <View style={styles.searchBar1}>
            <View style={styles.searchBarChild} />
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={[styles.boxArchiveParent, styles.nameFlexBox]}>
                <Image
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../assets/star.png")}
                />
                <Text style={[styles.myOrders, styles.myOrdersTypo]}>
                  Reviews
                </Text>
              </View>
              <Image
                style={styles.chevronDownIcon}
                resizeMode="cover"
                source={require("../assets/chevrondown1.png")}
              />
            </View>
          </View>
          <View style={styles.searchBar1}>
            <View style={styles.searchBarChild} />
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={[styles.boxArchiveParent, styles.nameFlexBox]}>
                <Image
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../assets/lifering.png")}
                />
                <Text style={[styles.myOrders, styles.myOrdersTypo]}>Help</Text>
              </View>
              <Image
                style={styles.chevronDownIcon}
                resizeMode="cover"
                source={require("../assets/chevrondown1.png")}
              />
            </View>
          </View>
          <View style={styles.searchBar1}>
            <View style={styles.searchBarChild} />
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={[styles.boxArchiveParent, styles.nameFlexBox]}>
                <Image
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../assets/infocircle.png")}
                />
                <Text style={[styles.myOrders, styles.myOrdersTypo]}>
                  About
                </Text>
              </View>
              <Image
                style={styles.chevronDownIcon}
                resizeMode="cover"
                source={require("../assets/chevrondown1.png")}
              />
            </View>
          </View>
          <View style={styles.searchBar1}>
            <View style={styles.searchBarChild} />
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={[styles.boxArchiveParent, styles.nameFlexBox]}>
                <Image
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../assets/gear.png")}
                />
                <Text style={[styles.myOrders, styles.myOrdersTypo]}>
                  Settings
                </Text>
              </View>
              <Image
                style={styles.chevronDownIcon}
                resizeMode="cover"
                source={require("../assets/chevrondown1.png")}
              />
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.name, styles.nameFlexBox]}
          onPress={() => navigation.navigate("UserAccount")}
        >
          <Image
            style={styles.nameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-25.png")}
          />
          <View style={styles.samuelBishopParent}>
            <Text style={[styles.samuelBishop, styles.textTypo]}>
              Samuel Bishop
            </Text>
            <Text style={[styles.examplegmailcom, styles.myOrdersTypo]}>
              example@gmail.com
            </Text>
          </View>
        </Pressable>
        <Text style={[styles.myProfile1, styles.textTypo]}>My Profile</Text>
        <View style={[styles.userProfile1, styles.nameFlexBox]}>
          <Image
            style={styles.chevronLeftIcon}
            resizeMode="cover"
            source={require("../assets/chevronleft.png")}
          />
          <Text style={[styles.shopByCategory, styles.myOrdersTypo]}>
            User profile
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
          style={[styles.fixedBottomChild, styles.userProfileLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <View style={[styles.homeParent, styles.parentFlexBox]}>
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
  userProfileLayout: {
    width: "100%",
    overflow: "hidden",
  },
  profilePosition: {
    left: 5,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  nameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  myOrdersTypo: {
    textAlign: "left",
    fontFamily: FontFamily.body14M,
    fontWeight: "500",
    fontSize: FontSize.body14M_size,
  },
  textTypo: {
    fontFamily: FontFamily.body10R,
    textAlign: "left",
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
  iconLayout1: {
    height: 24,
    width: 24,
  },
  searchBarChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorViolateColor,
    height: 50,
    zIndex: 0,
    width: 355,
  },
  myOrders: {
    marginLeft: 10,
    color: Color.colorSecondaryColor,
    textAlign: "left",
    fontFamily: FontFamily.body14M,
    fontWeight: "500",
    fontSize: FontSize.body14M_size,
  },
  boxArchiveParent: {
    alignItems: "center",
  },
  chevronDownIcon: {
    width: 16,
    height: 16,
  },
  frameParent: {
    top: 14,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    zIndex: 1,
    alignItems: "center",
    left: 0,
    width: 355,
  },
  searchBar: {
    justifyContent: "center",
  },
  searchBar1: {
    marginTop: 15,
    justifyContent: "center",
  },
  listing: {
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
    color: Color.colorBorderColor,
    marginTop: 5,
    textAlign: "left",
    fontFamily: FontFamily.body14M,
    fontWeight: "500",
    fontSize: FontSize.body14M_size,
  },
  samuelBishopParent: {
    marginLeft: 15,
  },
  name: {
    top: 92,
    alignItems: "center",
    left: 5,
    position: "absolute",
  },
  myProfile1: {
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
    color: Color.colorSecondaryColor,
    textAlign: "left",
    fontFamily: FontFamily.body14M,
    fontWeight: "500",
    fontSize: FontSize.body14M_size,
  },
  userProfile1: {
    top: 0,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  myProfile: {
    top: 44,
    width: 360,
    height: 687,
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
    fontFamily: FontFamily.body10R,
    textAlign: "left",
    color: Color.colorSecondaryColor,
    fontWeight: "500",
    left: 0,
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
    top: 742,
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
  userProfile: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default UserProfile;
