import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
    let oldPrices = ["40k", "50k", "60k", "70k"];
    let newPrices = ["30k", "40k", "50k", "60k"];

    let descriptions = [
        [
            "A precise wireless stylus for drawing, writing, and note-taking on iPad.",
            "Perfect for sketching, annotations, and creative work."
        ],
        [
            "A sleek and powerful tablet with a large display and long battery life.",
            "Ideal for entertainment, work, and everyday use."
        ],
        [
            "A high-performance tablet with a stunning display and advanced features.",
            "Designed for productivity and premium performance."
        ],
        [
            "A versatile 2-in-1 device that can be used as a laptop or tablet.",
            "Flexible design for work, study, and travel."
        ]
    ];

    return (
        <div className="Product">
            <div className="content">
                <h2>{title}</h2>

                <ul>
                    <li>{descriptions[idx][0]}</li>
                    <li>{descriptions[idx][1]}</li>
                </ul>
            </div>

            <Price
                oldPrice={oldPrices[idx]}
                newPrice={newPrices[idx]}
            />
        </div>
    );
}

export default Product;