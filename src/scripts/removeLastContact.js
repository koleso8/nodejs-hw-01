import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const allConatcts = await readContacts();

    if (allConatcts.length !== 0)
      console.log(
        `контакт :${allConatcts[allConatcts.length - 1].name} видалено`
      );
    allConatcts.pop();
    writeContacts(allConatcts ? allConatcts : []);
  } catch (error) {
    console.log(`Не вдалося видалити: ${error}`);
  }
};

removeLastContact();
