 export interface IImgurImageDto {
    id?: string,
    title: string,
    description: string,
    datetime: number,
    cover: string,
    cover_width: number,
    cover_height: number,
    account_url: string,
    account_id: number,
    privacy: string,
    layout: string,
    views: number,
    link: string,
    ups: number,
    downs: number,
    points: number,
    score: number,
    is_album: boolean,
    vote: number,
    favorite: boolean,
    nsfw: boolean,
    section: string,
    comment_count: number,
    favorite_count: number,
    topic: number,
    topic_id: number,
    images_count: number,
    in_gallery: boolean,
    is_ad: boolean,
    tags: [
        {
            name: string,
            display_name: string,
            followers: number,
            total_items: number,
            following: boolean,
            is_whitelisted: boolean,
            background_hash: string,
            thumbnail_hash: string,
            accent: number,
            background_is_animated: boolean,
            thumbnail_is_animated: boolean,
            is_promoted: boolean,
            description:string,
            logo_hash: string,
            logo_destination_url: string,
            description_annotations: {}
        }
    ],
    ad_type: number,
    ad_url: string ,
    in_most_viral: boolean,
    include_album_ads: boolean,
    images: [
        {
            id: string,
            title: string,
            description: string,
            datetime: number,
            type: string,
            animated: boolean,
            width: number,
            height: number,
            size: number,
            views: number,
            bandwidth: number,
            vote: string,
            favorite: boolean,
            nsfw: string,
            section: string,
            account_url: string,
            account_id: string,
            is_ad: boolean,
            in_most_viral: boolean,
            has_sound: boolean,
            tags: [],
            ad_type: number,
            ad_url: string ,
            edited: number,
            in_gallery: boolean,
            link:string ,
            comment_count: number,
            favorite_count: number,
            ups: number,
            downs: number,
            poinboots: number,
            score: number
        }
    ],

}