
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Image from "./Image"
import axios from "axios"
import { ClipLoader } from "react-spinners";


function Details() {
    let {id} = useParams()
    const [image, setImage] = useState<Image>()
    const [haveDes, setHaveDes] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchImage = async () => {
            setIsLoading(true)
            try{
                const response = await axios.get(`/photos/${id}`)
                if(response.data.description){
                    setHaveDes(true)
                }
                setImage(response.data)
            } catch(err){
                console.error("Error fetching image:", err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchImage()
    }, [])

    return (
    <>
        {isLoading && (
            <div className="w-full flex items-center justify-center">
                <ClipLoader
                    color={"#000000"}
                    loading={isLoading}
                    size={26}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        )} 
        
        {image && (
            <div className="w-full px-6">
                <div className="flex justify-items-center py-3 gap-3">
                    <img className="rounded-full w-8 h-8" src={image.user.profile_image.small} alt={image.user.name}></img>
                    <div>{image.user.name}</div>
                </div>
                <div>
                    <img className="w-full" src={image.urls.regular}></img>
                    <div className="my-2">{haveDes ? image.description : "No description"}</div>
                </div>
            </div>
        )}

    </>
    )
}

export default Details