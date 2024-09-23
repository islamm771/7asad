
export interface IUser {
    _id: string;
    name: string;
    phone: string;
    email: string;
    password: string;
    role: string;
    experince: any[]; // Adjust type based on expected data
    userRating: number;
    date: string;
    __v: number;
    photo?: string
    Educationaldegree: string
    country: string
    job: string
}

export interface IProduct {
    _id: string;
    name: string;
    description: string;
    photo: string[];
    price: number;
    amount: number;
    place: string;
    OneItemPrice: number;
    discount: number;
    priceAfterDiscount: number;
    categoryName: string;
    user: IUser;
    date: string;
    __v: number;
}

export interface IAddProduct {
    name: string;
    description: string;
    photo: string[];
    price: number;
    amount: number;
    place: string;
    OneItemPrice: number;
    discount: number;
    priceAfterDiscount: number;
    categoryName: string;
}


export interface IReview {
    _id: string;
    review: string;
    rating: number;
    product: string;
    user: IUser;
    createdAt: string;
    __v: number;
    id: string;
}

export interface IFavorite {
    _id: string;
    user: string; // Assuming you have a User interface already
    product: {
        _id: string;
        name: string;
        description: string;
        photo: string[];
        price: number;
        amount: number;
        place: string;
        OneItemPrice: number;
        discount: number;
        priceAfterDiscount: number;
        categoryName: string;
        user: string;
        date: string;
        __v: number;
    }; // Assuming you have a Product interface already
    __v: number;
}


export interface IError {
    message: string;
}


export interface IProductCategories {
    label: string;
    id: string;
    icon: React.ElementType;
}


export interface IAddProductForm {
    label: string,
    id: string,
    name: "name" | "price" | "amount" | "description" | "discount" | "priceAfterDiscount" | "place",
    type: string,
    placeholder?: string,
    required?: boolean,
}
