import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async number => {
  try {
    const allConatcts = await readContacts();

    for (let i = 0; i < (await number); i++) {
      allConatcts.push(createFakeContact());
    }

    await writeContacts(allConatcts);
    console.log('Контакти записані');
  } catch (error) {
    console.log(`Данні не вдалося отримати: ${error}`);
  }
};

generateContacts(3);
