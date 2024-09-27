import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {};
try {
  const allConatcts = await readContacts();
  allConatcts.push(createFakeContact());

  await writeContacts(allConatcts);
  console.log('Контакт записан');
} catch (error) {
  console.log(`Данні не вдалося отримати: ${error}`);
}
addOneContact();
