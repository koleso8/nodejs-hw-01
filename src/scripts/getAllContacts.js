import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const allConatcts = JSON.stringify(await readContacts());
    console.log(`Контакти :${allConatcts}`);
    return allConatcts;
  } catch (error) {
    console.log(`Данні не вдалося отримати: ${error}`);
  }
  console.log(await getAllContacts());
};

getAllContacts();
