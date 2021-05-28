import React from 'react'

const Menu = ({ furnitureProducts }) => {
    return (
        furnitureProducts.map((furniture) => {
            const { id, price, name, description, img1 } = furniture;
            return (
                <div key={id}>
                    <img src={img1} alt="" />
                    <p>{name}</p>
                    <section>${price}</section>
                    <article>{description}</article>
                </div>
            )
        })
    )
}

export default Menu;
