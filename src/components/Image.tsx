import { Link } from "react-router-dom"

type Image = {
    id: string;
    description: string
    urls: {
        regular: string;
        small: string;
    };
    user: {
        name: string;
        profile_image: {
            small: string;
        }
    }
}

const Image = (img: Image) => {
    return (
        <div key={img.id} className="relative group">
            <Link to={`/${img.id}`}>
                <img className="w-full" src={img.urls.regular} alt={img.description} />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <img className="w-8 h-8 rounded-full inline-block mr-2" src={img.user.profile_image.small} alt={img.user.name} />
                    <p className="inline-block">{img.user.name}</p>
                </div>
            </Link>
        </div>
    )
}

export default Image