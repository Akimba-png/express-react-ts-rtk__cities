import { readFile } from "fs/promises";

class DbService {
  async find(path: string) {
    const response = await this.#readFile(path);
    const data = JSON.parse(response);
    return data;
  }

  async #readFile(path: string) {
    try {
      await this.#addDelay();
      const data = await readFile(path, { encoding: 'utf-8' });
      return data;
    } catch (error) {
      throw new Error('Something wrong while reading db');
    }
  }

  async #addDelay() {
    return await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }
}

export const dbService = new DbService();
