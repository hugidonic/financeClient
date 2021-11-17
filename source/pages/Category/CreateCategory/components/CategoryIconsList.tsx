import React from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import initIcons from "../../../../constants/icons";
import colors from "./../../../../utils/colors";
// Components
import Dots from "./Dots";
import CategoryIcon from "../../../../components/CategoryComponents/CategoryIcon";

interface Props {
  setIcon: (icon: typeof require) => void;
}
const { width } = Dimensions.get("screen");

const CategoryIconsList = ({ setIcon }: Props) => {
  const [icons, setIcons] = React.useState([]);
  const [activePageIdx, setActivePageIdx] = React.useState(0);
  const [activeIconIdx, setActiveIconIdx] = React.useState(null);

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const groupCount = Math.ceil(initIcons.length / 12);

  React.useEffect(() => {
    const m = [];
    // Devide array into array of array[12]
    for (let i = 0; i < groupCount; i++) {
      m[i] = [];
      for (let j = 0; j < 12; j++) {
        if (typeof initIcons[i * 12 + j] == "undefined") {
          break;
        }
        m[i].push(initIcons[i * 12 + j]);
      }
    }


    setIcons(m);
  }, [setIcons]);

  // Select Icon
  const selectIcon = (idx: number) => {
    setActiveIconIdx(idx);
    setIcon(initIcons[idx])
  };

  const renderPage = (icons: any[], pageIdx: number) => {
    return (
      <FlatList
        data={icons}
        renderItem={({ item, index }) => {
          const itemIdx = pageIdx*12 + index
          return (
            <CategoryIcon
              selectIcon={() => selectIcon(itemIdx)}
              selected={itemIdx == activeIconIdx}
              icon={item}
            />
          );
        }}
        keyExtractor={(item, idx) => idx.toString()}
        numColumns={4}
        columnWrapperStyle={{
          marginBottom: 15,
        }}
        style={{
          width: width - 30,
        }}
      />
    );
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Animated.FlatList
        data={icons}
        renderItem={({ item, index }) => renderPage(item, index)}
        keyExtractor={(item, idx) => item.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(ev) =>
          setActivePageIdx(Math.round(ev.nativeEvent.contentOffset.x / width))
        }
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Dots count={groupCount} activePage={activePageIdx} />
    </View>
  );
};

export default CategoryIconsList;

const styles = StyleSheet.create({});
