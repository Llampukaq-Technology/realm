import { Dispatch, SetStateAction, useEffect, useState } from "react";

function useSync<T>(
  collection: Realm.Services.MongoDB.MongoDBCollection<any> | undefined,
  operationType: Array<
    | "insert"
    | "delete"
    | "replace"
    | "update"
    | "drop"
    | "rename"
    | "dropDatabase"
    | "invalidate"
  >,
  onChange?: (fn: Dispatch<SetStateAction<T>>, document: T) => any
) {
  const [data, setData] = useState<T>();
  const sync = async () => {
    if (collection != undefined) {
      for await (const change of collection?.watch()) {
        const bo = operationType.includes(change.operationType);
        if (bo) {
          //@ts-ignore
          onChange?.(setData, change.fullDocument as T);
        }
      }
    }
  };
  useEffect(() => {
    sync();
  }, []);
  return { data };
}

export default useSync;
