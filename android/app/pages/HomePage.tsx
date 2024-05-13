import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homePage}>
      <Pressable
        style={[styles.cta, styles.ctaPosition]}
        onPress={() => navigation.navigate("Category")}
      >
        <View style={styles.searchBarLayout}>
          <View style={[styles.instanceChild, styles.childPosition]} />
          <View
            style={[styles.festivalSaleEndsInParent, styles.parentPosition]}
          >
            <Text style={[styles.festivalSaleEnds, styles.textTypo1]}>
              Festival Sale Ends In:
            </Text>
            <View style={[styles.d16hrs32minsWrapper, styles.parentFlexBox]}>
              <Text style={[styles.d16hrs32mins, styles.textTypo1]}>
                04d:16hrs:32mins
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent, styles.parentFrameFlexBox]}>
          <View style={styles.discountParent}>
            <Text style={[styles.discount, styles.discountClr]}>
              30% Discount
            </Text>
            <Text
              style={[styles.startedSeveralMistake, styles.discountClr]}
            >{`Started several mistake joy painful reached `}</Text>
            <View style={styles.shopNowWrapper}>
              <Text style={[styles.shopNow, styles.textLayout]}>Shop now</Text>
            </View>
          </View>
          <Image
            style={styles.instanceItem}
            resizeMode="cover"
            source={require("../assets/rectangle-2.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.latestItems, styles.ctaPosition]}>
        <View style={styles.frameGroup}>
          <View style={[styles.latestParent, styles.parentFrameFlexBox]}>
            <Text style={[styles.latest, styles.textTypo1]}>Latest</Text>
            <Pressable onPress={() => navigation.navigate("ShopByCategory")}>
              <Text style={styles.viewAll1Typo}>View all</Text>
            </Pressable>
          </View>
          <View style={styles.instanceParent}>
            <View>
              <View style={styles.rectangleGroup}>
                <Image
                  style={[styles.groupChild, styles.childLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-21.png")}
                />
                <Image
                  style={styles.favouriteIcon}
                  resizeMode="cover"
                  source={require("../assets/favourite.png")}
                />
                <View style={[styles.offWrapper, styles.offPosition]}>
                  <Text style={[styles.off, styles.textLayout]}>20% Off</Text>
                </View>
              </View>
              <View style={styles.oneShoulderTopParent}>
                <Text style={[styles.oneShoulderTop, styles.off1Typo]}>
                  One shoulder Top
                </Text>
                <View style={styles.parent}>
                  <Text style={[styles.text, styles.textTypo1]}>$10.00</Text>
                  <Text style={[styles.text1, styles.textTypo]}>$15.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.groupContainer}>
              <View style={styles.rectangleGroup}>
                <Image
                  style={[styles.groupChild, styles.childLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-22.png")}
                />
                <Image
                  style={styles.favouriteIcon}
                  resizeMode="cover"
                  source={require("../assets/favourite1.png")}
                />
                <View style={[styles.offContainer, styles.offPosition]}>
                  <Text style={[styles.off1, styles.off1Typo]}>20% Off</Text>
                </View>
              </View>
              <View style={styles.oneShoulderTopParent}>
                <Text style={[styles.oneShoulderTop, styles.off1Typo]}>
                  Cinched Waist Top
                </Text>
                <View style={styles.parent}>
                  <Text style={[styles.text, styles.textTypo1]}>$8.00</Text>
                  <Text style={[styles.text3, styles.textTypo]}>$10.00</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.instanceGroup}>
          <View>
            <View style={styles.rectangleGroup}>
              <Image
                style={[styles.groupChild, styles.childLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-23.png")}
              />
              <Image
                style={styles.favouriteIcon}
                resizeMode="cover"
                source={require("../assets/favourite.png")}
              />
              <View style={[styles.offContainer, styles.offPosition]}>
                <Text style={[styles.off1, styles.off1Typo]}>20% Off</Text>
              </View>
            </View>
            <View style={styles.oneShoulderTopParent}>
              <Text style={styles.oneShoulderTop2}>Off Shoulder Top</Text>
              <View style={styles.parent}>
                <Text style={[styles.off, styles.textLayout]}>$6.00</Text>
                <Text style={[styles.text3, styles.textTypo]}>$8.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.groupContainer}>
            <View style={styles.rectangleGroup}>
              <Image
                style={[styles.groupChild, styles.childLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-24.png")}
              />
              <Image
                style={styles.favouriteIcon}
                resizeMode="cover"
                source={require("../assets/favourite2.png")}
              />
              <View style={[styles.offContainer, styles.offPosition]}>
                <Text style={[styles.off1, styles.off1Typo]}>20% Off</Text>
              </View>
            </View>
            <View style={styles.oneShoulderTopParent}>
              <Text style={styles.oneShoulderTop2}>Crop Top</Text>
              <View style={styles.parent}>
                <Text style={[styles.off, styles.textLayout]}>$4.00</Text>
                <Text style={[styles.text7, styles.textTypo]}>$6.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.parent2}>
            <Text style={[styles.off, styles.textLayout]}>$4.00</Text>
            <Text style={[styles.text3, styles.textTypo]}>$6.00</Text>
          </View>
          <Text style={[styles.text10, styles.textLayout]}>$4.00</Text>
        </View>
      </View>
      <View style={[styles.categories, styles.bannerPosition]}>
        <View style={styles.frameContainer}>
          <View style={styles.rectangleParent3}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-3.png")}
            />
            <Image
              style={[styles.grid2Icon, styles.childLayout]}
              resizeMode="cover"
              source={require("../assets/grid-2.png")}
            />
          </View>
          <Text style={[styles.categories1, styles.textTypo1]}>Tops</Text>
        </View>
        <View style={styles.frameParent1}>
          <View style={styles.rectangleParent3}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-31.png")}
            />
            <Image
              style={[styles.grid2Icon, styles.childLayout]}
              resizeMode="cover"
              source={require("../assets/grid-2.png")}
            />
          </View>
          <Text style={[styles.categories1, styles.textTypo1]}>Dress</Text>
        </View>
        <View style={styles.frameParent1}>
          <View style={styles.rectangleParent3}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-32.png")}
            />
            <Image
              style={[styles.grid2Icon, styles.childLayout]}
              resizeMode="cover"
              source={require("../assets/grid-2.png")}
            />
          </View>
          <Text style={[styles.categories1, styles.textTypo1]}>Skirts</Text>
        </View>
        <View style={styles.frameParent1}>
          <View style={styles.rectangleParent3}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-33.png")}
            />
            <Image
              style={[styles.grid2Icon, styles.childLayout]}
              resizeMode="cover"
              source={require("../assets/grid-2.png")}
            />
          </View>
          <Text style={[styles.categories1, styles.textTypo1]}>Jeans</Text>
        </View>
      </View>
      <View style={[styles.banner, styles.bannerPosition]}>
        <Image
          style={[styles.bannerChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <View style={[styles.wearTheRealFashionParent, styles.parentPosition]}>
          <Text style={[styles.wearTheRealContainer, styles.discountTypo]}>
            Wear the real Fashion
          </Text>
          <View style={[styles.ellipseParent, styles.parentFlexBox]}>
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <View
              style={[styles.rectangleView, styles.frameChild2SpaceBlock]}
            />
            <Image
              style={[styles.frameChild2, styles.frameChild2SpaceBlock]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.searchBar, styles.searchBarLayout]}>
        <View style={[styles.instanceChild, styles.childPosition]} />
        <View style={[styles.frameParent4, styles.parentFrameFlexBox]}>
          <View style={styles.searchParent}>
            <Image
              style={styles.searchIcon}
              resizeMode="cover"
              source={require("../assets/search.png")}
            />
            <Text style={[styles.searchHere, styles.viewAll1Typo]}>
              Search here
            </Text>
          </View>
          <View style={styles.vectorParent}>
            <Image
              style={styles.lineIcon}
              resizeMode="cover"
              source={require("../assets/line-2.png")}
            />
            <View style={[styles.component3Parent, styles.parentFlexBox]}>
              <View style={styles.component3}>
                <Text style={[styles.women, styles.textTypo1]}>Women</Text>
              </View>
              <Image
                style={styles.chevronDownIcon}
                resizeMode="cover"
                source={require("../assets/chevrondown.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.notification}>
        <View style={[styles.header, styles.parentFrameFlexBox]}>
          <Text style={styles.fason}>{`Solidea
Ch   rity`}</Text>
          <View style={styles.bellParent}>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../assets/bell.png")}
            />
            <Image
              style={[styles.heartIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/heart.png")}
            />
            <Image
              style={[styles.heartIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/bag.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.notificationChild, styles.notchIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-47928.png")}
        />
      </View>
      <Image
        style={[styles.homePageChild, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/group-479281.png")}
      />
      <View style={styles.statusbar}>
        <Image
          style={[styles.notchIcon, styles.notchIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-47928.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.text11, styles.text11Position]}>18:00</Text>
          </View>
        </View>
        <View style={[styles.rightSide, styles.rightSidePosition]}>
          <Image
            style={[styles.batteryIcon, styles.rightSidePosition]}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.iconMobileSignal, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
      <View style={[styles.fixedBottom, styles.ctaPosition]}>
        <Image
          style={[styles.fixedBottomChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <View style={[styles.homeParent, styles.parentFrameFlexBox]}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/home.png")}
          />
          <Pressable
            style={styles.homeIcon}
            onPress={() => navigation.navigate("Search")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/search1.png")}
            />
          </Pressable>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/cart.png")}
          />
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/heart1.png")}
          />
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/user.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ctaPosition: {
    left: 10,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    width: "100%",
  },
  parentPosition: {
    top: "50%",
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.body10R,
    fontWeight: "500",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  parentFrameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  discountClr: {
    color: Color.colorLightBlueColor,
    textAlign: "center",
  },
  textLayout: {
    lineHeight: 8,
    fontSize: FontSize.body10R_size,
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  offPosition: {
    padding: Padding.p_6xs,
    top: 10,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 10,
    position: "absolute",
  },
  off1Typo: {
    lineHeight: 14,
    color: Color.colorSecondaryColor,
    fontFamily: FontFamily.body10R,
    fontWeight: "500",
  },
  textTypo: {
    opacity: 0.5,
    textAlign: "left",
    marginLeft: 5,
    color: Color.colorSecondaryColor,
    fontFamily: FontFamily.body10R,
    fontWeight: "500",
  },
  bannerPosition: {
    marginLeft: -177.5,
    left: "50%",
    position: "absolute",
  },
  discountTypo: {
    fontFamily: FontFamily.heading24SM,
    fontWeight: "600",
  },
  frameChild2SpaceBlock: {
    marginLeft: 8,
    height: 8,
  },
  searchBarLayout: {
    height: 36,
    width: 355,
  },
  viewAll1Typo: {
    color: Color.colorBorderColor,
    textAlign: "center",
    fontFamily: FontFamily.body10R,
    fontWeight: "500",
    lineHeight: 10,
    fontSize: FontSize.body12M_size,
  },
  iconLayout1: {
    width: 22,
    height: 22,
  },
  notchIconLayout: {
    height: 0,
    width: 0,
    position: "absolute",
  },
  leftSideLayout: {
    height: 12,
    width: 33,
    left: "50%",
    position: "absolute",
  },
  text11Position: {
    top: 1,
    position: "absolute",
  },
  rightSidePosition: {
    height: 9,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 12,
    height: 8,
  },
  instanceChild: {
    backgroundColor: Color.colorViolateColor,
    borderRadius: Border.br_7xs,
    bottom: "0%",
    right: "0%",
    top: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
  },
  festivalSaleEnds: {
    textAlign: "center",
    color: Color.colorSecondaryColor,
    lineHeight: 10,
    fontSize: FontSize.body12M_size,
  },
  d16hrs32mins: {
    color: Color.colorBlackColor,
    textAlign: "center",
    lineHeight: 10,
    fontSize: FontSize.body12M_size,
  },
  d16hrs32minsWrapper: {
    borderRadius: Border.br_10xs,
    padding: Padding.p_5xs,
    marginLeft: 5,
    backgroundColor: Color.colorSecondaryColor,
  },
  festivalSaleEndsInParent: {
    marginTop: -13,
    marginLeft: -124.5,
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
  },
  discount: {
    lineHeight: 24,
    width: 147,
    fontFamily: FontFamily.heading24SM,
    fontWeight: "600",
    fontSize: FontSize.heading24SM_size,
  },
  startedSeveralMistake: {
    lineHeight: 12,
    width: 150,
    marginTop: 10,
    fontFamily: FontFamily.body10R,
    fontWeight: "500",
    fontSize: FontSize.body12M_size,
    color: Color.colorLightBlueColor,
  },
  shopNow: {
    textAlign: "center",
    color: Color.colorSecondaryColor,
    fontFamily: FontFamily.body10R,
    fontWeight: "500",
  },
  shopNowWrapper: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorLightBlueColor,
    padding: Padding.p_3xs,
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  discountParent: {
    width: 170,
    alignItems: "center",
  },
  instanceItem: {
    borderTopRightRadius: Border.br_7xs,
    borderBottomRightRadius: Border.br_7xs,
    width: 185,
    height: 160,
  },
  frameParent: {
    marginTop: 30,
    backgroundColor: Color.colorSecondaryColor,
    alignItems: "center",
    borderRadius: Border.br_7xs,
    width: 355,
    overflow: "hidden",
  },
  cta: {
    top: 1060,
  },
  latest: {
    fontSize: FontSize.subHeading20M_size,
    textAlign: "center",
    color: Color.colorSecondaryColor,
  },
  latestParent: {
    alignItems: "center",
    width: 355,
  },
  groupChild: {
    borderRadius: Border.br_7xs,
    left: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  favouriteIcon: {
    top: 5,
    left: 130,
    width: 30,
    height: 30,
    position: "absolute",
  },
  off: {
    textAlign: "left",
    color: Color.colorSecondaryColor,
    fontFamily: FontFamily.body10R,
    fontWeight: "500",
  },
  offWrapper: {
    backgroundColor: Color.colorGray_100,
    padding: Padding.p_6xs,
    top: 10,
  },
  rectangleGroup: {
    height: 200,
    width: 170,
  },
  oneShoulderTop: {
    fontSize: FontSize.subHeading16M_size,
    textAlign: "center",
  },
  text: {
    textAlign: "left",
    color: Color.colorSecondaryColor,
    lineHeight: 10,
    fontSize: FontSize.body12M_size,
  },
  text1: {
    lineHeight: 10,
    fontSize: FontSize.body12M_size,
  },
  parent: {
    marginTop: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  oneShoulderTopParent: {
    marginTop: 5,
  },
  off1: {
    letterSpacing: 0.1,
    textAlign: "left",
    fontSize: FontSize.body10R_size,
    lineHeight: 14,
  },
  offContainer: {
    backgroundColor: Color.colorBlackColor,
    display: "none",
  },
  text3: {
    display: "none",
    lineHeight: 10,
    fontSize: FontSize.body12M_size,
  },
  groupContainer: {
    marginLeft: 15,
  },
  instanceParent: {
    marginTop: 4,
    flexDirection: "row",
  },
  frameGroup: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  oneShoulderTop2: {
    fontSize: FontSize.body14M_size,
    fontFamily: FontFamily.body14M,
    textAlign: "center",
    color: Color.colorSecondaryColor,
    fontWeight: "500",
  },
  text7: {
    textDecoration: "line-through",
    lineHeight: 8,
    fontSize: FontSize.body10R_size,
  },
  parent2: {
    marginLeft: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  text10: {
    marginLeft: 15,
    textAlign: "left",
    color: Color.colorSecondaryColor,
    fontFamily: FontFamily.body10R,
    fontWeight: "500",
  },
  instanceGroup: {
    top: 280,
    left: 0,
    flexDirection: "row",
    position: "absolute",
  },
  latestItems: {
    top: 496,
    width: 443,
    height: 515,
  },
  frameChild: {
    width: 90,
    height: 90,
    zIndex: 0,
    borderRadius: Border.br_xs,
  },
  grid2Icon: {
    height: "29.56%",
    width: "29.56%",
    top: "36.11%",
    right: "34.89%",
    bottom: "34.33%",
    left: "35.56%",
    zIndex: 1,
    display: "none",
  },
  rectangleParent3: {
    alignItems: "center",
  },
  categories1: {
    marginTop: 5,
    textAlign: "center",
    color: Color.colorSecondaryColor,
    lineHeight: 10,
    fontSize: FontSize.body12M_size,
  },
  frameContainer: {
    alignItems: "center",
    overflow: "hidden",
  },
  frameParent1: {
    marginLeft: 15,
    alignItems: "center",
    overflow: "hidden",
  },
  categories: {
    top: 364,
    flexDirection: "row",
  },
  bannerChild: {
    borderRadius: Border.br_xs,
    left: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  wearTheRealContainer: {
    fontSize: FontSize.size_9xl,
    lineHeight: 34,
    width: 214,
    textAlign: "center",
    color: Color.colorSecondaryColor,
  },
  ellipseIcon: {
    height: 8,
    width: 8,
  },
  rectangleView: {
    width: 18,
    marginLeft: 8,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSecondaryColor,
  },
  frameChild2: {
    width: 8,
    marginLeft: 8,
  },
  ellipseParent: {
    marginTop: 5,
  },
  wearTheRealFashionParent: {
    marginTop: 6,
    width: "60.31%",
    right: "19.69%",
    left: "20%",
    alignItems: "center",
  },
  banner: {
    top: 137,
    height: 194,
    width: 355,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchHere: {
    marginLeft: 10,
  },
  searchParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  lineIcon: {
    height: 18,
    opacity: 0.1,
    width: 0,
  },
  women: {
    top: "19.38%",
    textAlign: "right",
    color: Color.colorSecondaryColor,
    lineHeight: 10,
    fontSize: FontSize.body12M_size,
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  component3: {
    alignSelf: "stretch",
    width: 48,
  },
  chevronDownIcon: {
    width: 16,
    height: 16,
    marginLeft: 5,
  },
  component3Parent: {
    marginLeft: 10,
    overflow: "hidden",
  },
  vectorParent: {
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent4: {
    height: "61.94%",
    width: "94.37%",
    top: "19.17%",
    right: "2.82%",
    bottom: "18.89%",
    left: "2.82%",
    position: "absolute",
  },
  searchBar: {
    top: 86,
    left: 10,
    position: "absolute",
  },
  fason: {
    letterSpacing: 0.2,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.heading24SM_size,
    textAlign: "center",
    color: Color.colorSecondaryColor,
  },
  heartIcon: {
    marginLeft: 16,
  },
  bellParent: {
    flexDirection: "row",
  },
  header: {
    alignItems: "center",
    left: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  notificationChild: {
    top: "9.09%",
    left: "3.38%",
    display: "none",
  },
  notification: {
    top: 44,
    height: 22,
    marginLeft: -177.5,
    left: "50%",
    width: 355,
    position: "absolute",
  },
  homePageChild: {
    height: "1.49%",
    width: "5.33%",
    top: "4.68%",
    right: "82.67%",
    bottom: "93.83%",
    left: "12%",
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    left: "50%",
  },
  text11: {
    textAlign: "left",
    left: 0,
    color: Color.colorSecondaryColor,
    fontFamily: FontFamily.body10R,
    fontWeight: "500",
    lineHeight: 10,
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
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  fixedBottomChild: {
    left: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  homeIcon: {
    width: 24,
    height: 24,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  homeParent: {
    marginTop: -12,
    marginLeft: -159.5,
    width: 320,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  fixedBottom: {
    top: 767,
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
  },
  homePage: {
    flex: 1,
    height: 1345,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default HomePage;
