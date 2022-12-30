import { Args, Query, Resolver, Int, Field, Mutation } from '@nestjs/graphql';
import { Book } from './book.schema';
import { Book as IBook } from '../graphql';
import { BookService } from './book.service';
import { AddBookArgs } from './args';
@Resolver((of) => Book)
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query((returns) => [Book])
  getAllBooks() {
    return this.bookService.findAll();
  }

  @Query((returns) => Book)
  getSingleBook(@Args({ name: 'id', type: () => Int }) id: number): IBook {
    return this.bookService.findOneById(id);
  }

  @Mutation((returns) => Book)
  addBook(@Args('addBookArgs') addBookArgs: AddBookArgs): Book {
    return this.bookService.addBook(addBookArgs);
  }
}
