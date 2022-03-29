export type Bike = {
    date_stolen: number;
    description: string;
    frame_colors: any[];
    frame_model: string;
    id: number;
    is_stock_img: boolean;
    large_img: string;
    location_found?: any;
    manufacturer_name: string;
    external_id?: any;
    registry_name?: any;
    registry_url?: any;
    serial: string;
    status: string;
    stolen: boolean;
    stolen_coordinates: any[];
    stolen_location: string;
    thumb: string;
    title: string;
    url: string;
    year: number;
}

export type RootObject = {
    bikes: Bike[];
}



