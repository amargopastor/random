import cowsay from 'cowsay';
import fs from 'fs-extra';
import _ from 'lodash';
import data from './config';
import Character from './types/character.type';

try {
  const initialData:Character[] = fs.readJSONSync(data.store_file);
  const { length } = initialData;
  const { name } = initialData[_.random(length)];
  const output: string = cowsay.say({ text: name });
  console.log(output);
} catch (error) {
  const output: string = cowsay.say({ text: 'Cannot find values: Please, run seed file.' });
  console.log(output);
}
