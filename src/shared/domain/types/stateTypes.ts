export type Set<StoredActions = unknown> = (
  partial:
    | StoredActions
    | Partial<StoredActions>
    | ((state: StoredActions) => StoredActions | Partial<StoredActions>),
  replace?: boolean | undefined
) => void;

export type Get<StoredActions = unknown> = () => StoredActions;

export type Action<T, StoredActions = unknown> = (
  set: {
    (
      partial:
        | StoredActions
        | Partial<StoredActions>
        | ((state: StoredActions) => StoredActions | Partial<StoredActions>),
      replace?: false
    ): void;
    (
      state: StoredActions | ((state: StoredActions) => StoredActions),
      replace: true
    ): void;
  },
  get: Get<StoredActions>
) => T;
