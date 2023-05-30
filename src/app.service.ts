import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHello2(): {} {
    return {message: 'working', 'tite': 'My Greeting App'};
    }
  getHome(): {} {
    return {title: 'Home Page'};
    }
  getAboutUs(): {} {
    return {title: 'About Us Page'};
    }
}
