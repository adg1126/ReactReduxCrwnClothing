import React from 'react';
import styled from 'styled-components';

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 30%;
`;

const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const Name = styled.span`
  font-size: 16px;
`;

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <Image src={imageUrl} alt={name} />
    <ItemDetails>
      <Name>{name}</Name>
      <span className="price">
        {quantity} x {price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
