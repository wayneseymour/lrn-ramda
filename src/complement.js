import { complement, find, pipe } from 'ramda';

const isEven = x => x % 2 === 0;
find(complement(isEven), xs); // --> 1
const searchAandLog = pipe(find,  complement, console.log);
searchAandLog(xs);

const xs = [1, 2, 3, 4];
