import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([1, -4, 300, 8, 15]);
// const sorter = new Sorter(numbersCollection);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('ZYnbaNhl');
// const sorter2 = new Sorter(charactersCollection);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-2);
linkedList.add(11);
linkedList.add(20);
// const sorter3 = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
