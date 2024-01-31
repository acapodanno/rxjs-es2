import { fromEvent } from 'rxjs';
import { scan, filter, throttleTime } from 'rxjs/operators';

fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    scan((count) => count + 1, 0)
  )
  .subscribe((val) => console.log('clicked', val));
