import styles from '../styles/Carousel.module.css'
import Carousel from 'react-material-ui-carousel';
import Manchoon from './carousel_pages/manchoon'
import KeepGoing from './carousel_pages/keepgoing'

interface News {
    id: number;
    name: string;
    date: string;
    description: string;
    image: string;
    link: string;
};

const CarouselPage = () => {

    return (
        <div className={styles.container}>
            <h2><i>Seasonals</i></h2>
            <Carousel
            stopAutoPlayOnHover={true}
            interval={6000}
            animation="slide"
            indicatorContainerProps={{
                className: 'indicator',
                style: {
                    backgroundColor: '#fff',
                    paddingTop: '1vw',
                }}}
            >
                {/* SOURCES */}
                <KeepGoing />
                <Manchoon />

            </Carousel>
        </div>
    );
        };


export default CarouselPage
