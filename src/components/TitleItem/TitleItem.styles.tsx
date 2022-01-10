import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        // backgroundColor: "#E1FAE3"
    },
    iconLeft: {
        marginRight: 16
    },
    nameWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    name: {
        flex: 1,
        color: "#1D1E20",
        fontSize: 20,
        lineHeight: 24,
        fontWeight: "600"
    },
    iconRight: {
        marginLeft: 16
    },
});

export default styles;
