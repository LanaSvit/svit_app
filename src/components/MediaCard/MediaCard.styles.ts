import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7D3C98", 
        paddingRight: 16,
        marginBottom: 16,
        borderRadius: 16
    },
    subtitle: {
        color: "#F4ECF7",
        fontSize: 12,
        margin: 12,
    },
    title: {
        color: "#F4ECF7",
        fontSize: 14,
        marginHorizontal: 12,
    },
    bottomSection: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 12
    },
    label: {
        marginLeft: 12
    },
    actionButton: {
        marginHorizontal: 12
    },
    actionButtonDots: {
        color: "#F4ECF7",
        fontSize: 16
    }
});

export default styles;
