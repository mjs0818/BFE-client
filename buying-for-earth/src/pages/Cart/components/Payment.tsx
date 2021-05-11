import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './Payment.scss';

interface Props {
  price: number;
  totalPrice: number;
}

const Payment = ({ price, totalPrice }: Props) => {
  const [fee, setFee] = useState(true);
  const match = useRouteMatch();
  useEffect(() => {
    // 총 상품금액이 30000원 이상일 때 배송비 추가
    if (price * 0.8 >= 30000 || price <= 0) {
      setFee(false);
    } else {
      setFee(true);
    }
  }, [price]);

  return (
    <div className="payment--container">
      <div className="payment__price">
        <div className="payment__price__label">총 상품금액</div>
        <div className="payment__price__value">{price.toLocaleString()} 원</div>
      </div>
      <div className="payment__price">
        <div className="payment__price__label">할인금액</div>
        <div className="payment__price__value">
          {(-price * 0.2).toLocaleString()} 원
        </div>
      </div>
      <div className="payment__price">
        <div className="payment__price__label">배송비</div>
        <div className="payment__price__value">
          {fee ? '+3,000 원' : '0 원'}
        </div>
      </div>
      <div className="payment__notice">30,000원 이상 구매 시, 무료배송</div>
      <div className="payment__price total">
        <div className="payment__price__label">결제예정금액</div>
        <div className="payment__price__value">
          {totalPrice.toLocaleString()} 원
        </div>
      </div>
      <Link to={`${match.url}/order`}>
        <div className="payment__btn">
          {totalPrice.toLocaleString()}원 주문하기
        </div>
      </Link>
    </div>
  );
};

export default Payment;
