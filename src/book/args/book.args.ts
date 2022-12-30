import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddBookArgs {
  // Extendint class must define at least one type
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field((type) => Int)
  price: number;
}
