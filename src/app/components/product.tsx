type ProductPageProps = {
    productId: string;
  };
  
  const ProductPage: React.FC<ProductPageProps> = ({ productId }) => {
    const product = products.find((p) => p.id === productId);
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    return (
      <div>
        <img src={product.image} alt={product.name.toString()} />
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    );
  };
  