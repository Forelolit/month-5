import { Col, Menu, Row, Slider, Spin } from 'antd';
import { useProducts } from '../api/requests';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Product } from '../components/Product';
import { Search } from '../features/search';
import { useFilters } from '../features/store';

import 'swiper/css';
import 'swiper/css/navigation';

export const Home = () => {
    const { data, isLoading, error } = useProducts();

    const { priceRange, updatePriceRange } = useFilters();

    if (isLoading)
        return (
            <div style={{ display: 'flex', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                <Spin size="large" />
            </div>
        );

    if (error) return <p>Some error: {error}</p>;

    const handleSliderChange = (newRange) => {
        updatePriceRange(newRange);
    };

    const filteredProducts = data.products.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1],
    );

    return (
        <div style={{ margin: '0 auto', width: 1000 }}>
            <Search />

            <Slider range onChange={handleSliderChange} min={0} max={10000} />

            <div style={{ marginBottom: '1rem' }}>
                Selected Range: {priceRange[0]} - {priceRange[1]}
            </div>
            {/* <Select
                style={{ width: 300, marginBottom: '1rem' }}
                value={type}
                onChange={(value) => setType(value)}
                options={[
                    { label: 'All', value: 'all' },
                    { label: 'Popular', value: 'popular' },
                    { label: 'Gadjets', value: 'gadjets' },
                ]}
            /> */}

            {filteredProducts.length > 0 ? (
                <Row gutter={16}>
                    {filteredProducts.map((product) => (
                        <Col span={6} key={product.id}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            ) : (
                <p style={{ textAlign: 'center' }}>Products not found in the selected price segment</p>
            )}

            {/* <div>
                <h2>Popular products</h2>
                <Swiper navigation modules={[Navigation]} slidesPerView={3}>
                    {data.products.slice(0, 5).map((product) => (
                        <SwiperSlide key={product.id}>
                            <Card
                                title={product.title}
                                cover={<img src={product.thumbnail} alt={product.title} width="100%" />}></Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div> */}
        </div>
    );
};
