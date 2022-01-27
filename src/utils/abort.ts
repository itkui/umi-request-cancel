export const abortMaps = new Map<Symbol, AbortController>();

export const setController = (cancelKey: Symbol) => {
  let controller: AbortController;
  if (!abortMaps.has(cancelKey)) {
    controller = new AbortController();
    abortMaps.set(cancelKey, controller);
  } else {
    controller = abortMaps.get(cancelKey)!;
    const { abort } = controller;
    abort.call(controller);
    controller = new AbortController();
    abortMaps.set(cancelKey, controller);
  }

  return controller
}
