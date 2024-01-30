import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageService {
  async store(key: string, input: string) {
    await AsyncStorage.setItem(key, input);
  }

  async fetch(key: string): Promise<string | null> {
    return await AsyncStorage.getItem(key);
  }

  async clear(key: string) {
    await AsyncStorage.removeItem(key);
  }
}

export const storageService = new StorageService();
