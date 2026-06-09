import Product from "./Product.jsx";

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "nowrap",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
    }
    return (
        <div style={styles}>
            <Product title="Apple pencil (2nd generation)" idx={0} />
            <Product title="Samsung Galaxy Tab A7" idx={1} />
            <Product title="iPad Pro" idx={2} />
            <Product title="Microsoft Surface Pro 7" idx={3} />
        </div>
    )
}

export default ProductTab;