export default function Price({ oldPrice, newPrice }) {
    let oldStyles = {
        textDecorationLine: "line-through",
        color: "red",
        fontSize: "20px",
    }

    let newStyles = {
        fontWeight: "bold",
        fontSize: "25px",
    }

    let styles = {
        backgroundColor: "#e0c367",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px"
    }

    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}