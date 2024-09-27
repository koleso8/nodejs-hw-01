import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const allConatcts = await readContacts();
    return allConatcts.length;
  } catch (error) {
    console.log(`Данні не вдалося отримати: ${error}`);
  }
};

console.log(await countContacts());
