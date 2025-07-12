import * as SecureStore from "expo-secure-store";
import type { IPersistenceRepository } from "./persistence-repository-contract";

export const expoSecureStoreRepository: IPersistenceRepository = {
  get(key: string): string | null {
    return SecureStore.getItem(key);
  },

  set(key: string, value: string): void {
    SecureStore.setItem(key, value);
  },

  remove(key: string): Promise<void> {
    return SecureStore.deleteItemAsync(key);
  },
};
