import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Card, Image } from 'antd';
import { useState } from 'react';
import style from './components.module.css';
import { useStoreProject } from '../features/store';

export const Product = ({ product, cartColor, favoriteColor }) => {
    const { addToCart, addToFavorites } = useStoreProject();

    const [clickedCart, setClickedCart] = useState(false);
    const [clickedFavorite, setClickedFavorite] = useState(false);

    const addCart = () => {
        setClickedCart(!clickedCart);
        addToCart(product);
    };

    const addFavorite = () => {
        setClickedFavorite(!clickedFavorite);
        addToFavorites(product);
    };

    return (
        <Card
            className={style.card}
            style={{ marginBottom: '1rem' }}
            title={product.title}
            cover={<Image className={style.image} src={product.thumbnail} alt={product.title} width="100%" />}>
            <div className={style.content}>
                <p className={style.price}>Price: {product.price}</p>
                <p className={style.rating}>Rating: {product.rating}</p>
                <div className={style.buttons}>
                    <ShoppingCartOutlined
                        title="Add to cart"
                        onClick={addCart}
                        style={{ cursor: 'pointer', color: cartColor }}
                        className={clickedCart ? style.clickedCart : ''}
                    />

                    <HeartOutlined
                        title="Add to favorite"
                        onClick={addFavorite}
                        style={{ cursor: 'pointer', color: favoriteColor }}
                        className={clickedFavorite ? style.clickedFavorite : ''}
                    />
                </div>
            </div>
        </Card>
    );
};
