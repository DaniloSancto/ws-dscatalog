import { formatPrice } from 'util/formatters';
import './styles.css';

type Props = {
  price: number;
};

const ProductPrice = ({ price }: Props) => {
  return (
    <div className="produc-price-container">
      <span>R$</span>
      <h3>{formatPrice(price)}</h3>
    </div>
  );
};

export default ProductPrice;
