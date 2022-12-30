
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    id: number;
    title: string;
    price: number;
}

export interface Book {
    id: number;
    title: string;
    price: number;
}

export interface IQuery {
    getAllBooks(): Book[] | Promise<Book[]>;
    getSingleBook(id: number): Book | Promise<Book>;
}

export interface IMutation {
    addBook(addBookArgs: AddBookArgs): Book | Promise<Book>;
}

type Nullable<T> = T | null;
