import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Book')
export class BookResolver {
  @Query('books')
  getAllBooks() {
    return [
      {
        id: 1,
        title: 'Boook 1',
        price: 200,
      },
      {
        id: 2,
        title: 'Boook 2',
        price: 240,
      },
      {
        id: 3,
        title: 'Boook 3',
        price: 220,
      },
    ];
  }
}
