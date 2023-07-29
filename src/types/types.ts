import { type } from "os";

export type Product = {
    _id:string;
    name: string;
    image: string;
    price: number;
}

export type Item = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
    reating: {
        count: number,
        rate: number
    };
}

export type CartType = {
    id: number;
    userId: number;
    date: string,
    products:{
        id: number,
        quantity: number,
    }[]
}