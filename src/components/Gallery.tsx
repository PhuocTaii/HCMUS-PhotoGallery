import axios from "../config/AxiosConfig";
import { useEffect, useState } from "react";
import Masonry from 'react-masonry-css'
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";
import Image from "./Image";

const Gallery = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isEnd, setIsEnd] = useState(false);

    const ColumnsObjsAmount = {
        default: 3,
        1100: 2,
        700: 1,
    }

    const fetchImages = async (page: number) => {
        setLoading(true);
        try {
            const response = await axios.get(`/photos?page=${page}`);
            setImages((prevImages) => [...prevImages, ...response.data]);
            if(response.data.length === 0) {
                setIsEnd(true);
            }
        } catch (error) {
            console.error("Error fetching images:", error);
            setIsEnd(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages(page);
    }, [page]);

    const fetchData = () => {
        setPage((prevPage) => prevPage + 1);
    }

    return (
        <div className="py-6">
            <InfiniteScroll 
                dataLength={images.length} //This is important field to render the next data
                next={fetchData}
                hasMore={isEnd ? false : true}
                loader={
                    <div className="w-full flex items-center justify-center">
                        <ClipLoader
                            color={"#000000"}
                            loading={loading}
                            size={26}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                }
                endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>There are no more images</b>
                </p>
                }
                style={{overflow: 'hidden'}}
                >
                <Masonry
                    breakpointCols={ColumnsObjsAmount}
                    className="my-masonry-grid px-5"
                    columnClassName="my-masonry-grid_column">
                    {images.map((img) => (
                            <Image key={img.id} {...img} />
                        ))}
                </Masonry>
            </InfiniteScroll>
        </div>
    );
};

export default Gallery