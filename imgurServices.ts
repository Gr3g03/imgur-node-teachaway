import axios from "axios";
import { IImgurImageDto } from "./Dto/IImgurImageDto";
import apiRoutes from "./apiRoutes";
const clientId = process.env.REACT_APP_IMGUR_CLIENT_ID;


export async function fetchImgurGallery(section:string ,sort :string,window :string): Promise<IImgurImageDto[]> {
  try {
    const response = await axios.get(`${apiRoutes.baseUrl.baseUrl}${apiRoutes.galery.galery}${section}/${sort}/${window}`, {
      headers: {
        Authorization: `Client-ID ${clientId}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error(`Failed to fetch.`);
  }
}
