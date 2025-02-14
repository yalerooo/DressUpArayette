import React from 'react';

function ItemGrid({ category, items, currentItem, onItemClick }) {
    return (
        <div className="item-grid" id={`${category}-grid`}>
            <div className="item-grid-header">
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            </div>
            <div className="thumbnail-wrapper">
                {items.map((item, index) => (
                    <img
                        key={index}
                        src={item.thumb || "/placeholder.svg"}
                        alt={item.name}
                        className={`item-thumbnail ${currentItem === item ? 'selected' : ''}`}
                        onClick={() => onItemClick(category, item)}
                    />
                ))}
            </div>
        </div>
    );
}
export default ItemGrid;