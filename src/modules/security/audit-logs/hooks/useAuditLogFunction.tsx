import { isEmpty } from 'lodash';

export const useAuditLogFunction = () => {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  type ObjectWithUnknownKeys = { [key: string]: unknown };

  type NestedObject = Record<string, any>;

  // exclude keys
  function onExcludeKeysFromObject<T extends ObjectWithUnknownKeys>(
    obj: any,
    keysToExclude: string[],
  ): Omit<T, keyof typeof keysToExclude> {
    if (obj === null || typeof obj !== 'object') {
      return obj as Omit<T, keyof typeof keysToExclude>;
    }

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const newObj = {} as Omit<T, keyof typeof keysToExclude>;

    for (const [key, value] of Object.entries(obj)) {
      if (keysToExclude.includes(key)) {
        continue;
      }

      if (typeof value === 'object' && !Array.isArray(value)) {
        // @ts-ignore
        newObj[key] = onExcludeKeysFromObject(value as ObjectWithUnknownKeys, keysToExclude);
      } else {
        // @ts-ignore
        newObj[key] = value as T[keyof T];
      }
    }

    return newObj;
  }

  // accept keys
  function onIncludeOnlyKeysFromObject<T extends ObjectWithUnknownKeys>(
    obj: any,
    // eslint-disable-next-line @typescript-eslint/array-type
    allowedKeys: (keyof T)[],
  ): Pick<T, keyof T> {
    if (obj === null || typeof obj !== 'object') {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return {} as Pick<T, keyof T>;
    }

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const newObj = {} as Pick<T, keyof T>;

    for (const [key, value] of Object.entries(obj)) {
      if (!allowedKeys.includes(key as keyof T)) {
        continue;
      }

      if (typeof value === 'object' && !Array.isArray(value)) {
        // @ts-ignore
        newObj[key] = onIncludeOnlyKeysFromObject(value as ObjectWithUnknownKeys, allowedKeys);
      } else {
        // @ts-ignore
        newObj[key] = value as T[keyof T];
      }
    }

    return newObj;
  }

  // format the object to a flat object
  function onFlattenObject(obj: Record<string, any>): Record<string, any> {
    const result: Record<string, any> = {};
    function recurse(cur: any, prop: string) {
      if (Object(cur) !== cur || Array.isArray(cur)) {
        result[prop] = cur;
      } else {
        let isEmpty = true;
        for (const p in cur) {
          isEmpty = false;
          recurse(cur[p], prop ? `${prop}.${p}` : p);
        }
        if (isEmpty && prop) {
          result[prop] = {};
        }
      }
    }
    recurse(obj, '');
    const flattenedArrays: Record<string, any[]> = {};
    Object.keys(result).forEach((key) => {
      if (Array.isArray(result[key])) {
        flattenedArrays[key] = result[key];
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete result[key];
      }
    });
    return { ...result, ...flattenedArrays };
  }

  function onChangeTrace(beforeObject: NestedObject, objectUpdated: NestedObject): NestedObject {
    const change: NestedObject = {};

    const processObject = (before: NestedObject, updated: NestedObject, path: string[] = []) => {
      for (const key in before) {
        if (before.hasOwnProperty(key)) {
          const oldValue = before[key];
          const updatedValue = updated[key];

          if (oldValue instanceof Object && updatedValue instanceof Object) {
            processObject(oldValue, updatedValue, [...path, key]);
          } else if (oldValue !== updatedValue) {
            change[[...path, key].join('.')] = [oldValue, updatedValue];
          }
        }
      }
    };

    processObject(beforeObject, objectUpdated);

    // Check for new keys
    for (const key in objectUpdated) {
      if (objectUpdated.hasOwnProperty(key) && !beforeObject.hasOwnProperty(key)) {
        change[key] = ['', objectUpdated[key]];
      }
    }

    // Check for deleted keys
    for (const key in beforeObject) {
      if (beforeObject.hasOwnProperty(key) && !objectUpdated.hasOwnProperty(key)) {
        change[key] = [beforeObject[key], ''];
      }
    }

    return change;
  }

  function onOneChangeTrace(beforeObject: NestedObject): NestedObject {
    const change: NestedObject = {};

    const processObject = (before: NestedObject, path: string[] = []) => {
      for (const key in before) {
        if (before.hasOwnProperty(key)) {
          const oldValue = before[key];
          change[[...path, key].join('.')] = [oldValue];
        }
      }
    };

    processObject(beforeObject);

    // Check for deleted keys
    for (const key in beforeObject) {
      if (beforeObject.hasOwnProperty(key)) {
        change[key] = [beforeObject[key]];
      }
    }

    return change;
  }

  return {
    onExcludeKeysFromObject,
    onIncludeOnlyKeysFromObject,
    onChangeTrace,
    onFlattenObject,
    onOneChangeTrace,
  };
};
