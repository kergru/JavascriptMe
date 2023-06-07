import {Logger, WithTemplate} from './Decorators';
import {IsNotEmpty} from 'class-validator';

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
export class Person {

  @IsNotEmpty()
  private name: string;

  constructor(name: string) {
    console.log('Creating person object...' + name);
    this.name = name;
  }
}
