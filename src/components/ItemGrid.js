import React from 'react';

function ItemGrid({ category, items, currentItem, onItemClick }) {
    return (
        <div className="item-grid" id={`${category}-grid`}>
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3> {/* Capitalize */}
            {items.map((item, index) => (
                <div className="thumbnail-wrapper" key={index}>
                    <img
                        src={item.thumb}
                        alt={item.name}
                        className={`item-thumbnail ${currentItem === item ? 'selected' : ''}`}
                        onClick={() => onItemClick(category, item)}
                    />
                </div>
            ))}
        </div>
    );
}

export default ItemGrid;