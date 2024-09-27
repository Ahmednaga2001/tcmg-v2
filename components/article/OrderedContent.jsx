const OrderedContent = ({ items }) => {
    return (
        <ol>
            {items.map((el, index) => (
                <li key={index}>
                    {el.title && <strong>{el.title}</strong>}
                    {el.desc}
                </li>
            ))}
        </ol>
    );
}

export default OrderedContent;