export interface IPersistenceRepository {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): Promise<void>;
}
