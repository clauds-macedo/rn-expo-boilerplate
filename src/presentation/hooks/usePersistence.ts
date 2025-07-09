import { useCallback } from "react";
import { expoSecureStoreRepository } from "../../infra/repositories/persistence/expo-secure-store-repository";
import { IPersistenceRepository } from "../../infra/repositories/persistence/persistence-repository-contract";

const repository: IPersistenceRepository = expoSecureStoreRepository;

export function usePersistence() {
  const get = useCallback((key: string): string | null => {
    return repository.get(key);
  }, []);

  const set = useCallback((key: string, value: string): void => {
    repository.set(key, value);
  }, []);

  const remove = useCallback((key: string): Promise<void> => {
    return repository.remove(key);
  }, []);

  return { get, set, remove };
}
