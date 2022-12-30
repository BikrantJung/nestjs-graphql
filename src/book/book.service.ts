import { Injectable } from '@nestjs/common';
import { AddBookArgs } from './args';
import { Book } from './book.schema';

@Injectable()
export class BookService {
  findAll() {
    return [{ id: 100 }];
  }
  findOneById(id: number) {
    return { id, title: 'Random', price: id + 10 };
  }
  addBook(addBookArgs: AddBookArgs): Book {
    return addBookArgs;
  }
}
