import fs from 'fs-extra';
import cowsay from 'cowsay';
import axios from 'axios';
import _ from 'lodash';
import data from './config';

const wubba_lubba_dub_dub = async (characterNumber: number) => {
  try {
    const url: string = data.url + characterNumber;
    const response = await axios.get(url);
    return response.data;
  } catch (e: any) {
    console.log('AXIOS return an error if http error code is > 400');
    console.log(e.response.status);
  }
};

(async () => {
  const character = await Promise.all(
    _.range(1, data.character_threshold).map((e: number) => wubba_lubba_dub_dub(e)),
  );
  const output: string = cowsay.say({ text: `${data.character_threshold - 1} characters have been successfully imported` });
  console.log(output);
  fs.writeJSONSync(data.store_file, character);
})();
