import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async updatedContacts => {
  const data = await updatedContacts;
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data));
  } catch (err) {
    console.error(`Не додано :${err}`);
  }
};
