import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useIsLogin } from ".";

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
  onChange?: (
    fn: Dispatch<SetStateAction<T>>,
    document: T,
    operationType?:
      | "insert"
      | "delete"
      | "replace"
      | "update"
      | "drop"
      | "rename"
      | "dropDatabase"
      | "invalidate"
  ) => any
) {
  const { isLogin } = useIsLogin();
  const [data, setData] = useState<T>();
  const sync = async () => {
    if (collection != undefined && isLogin) {
      for await (const change of collection?.watch()) {
        const bo = operationType.includes(change.operationType);
        if (bo) {
          //@ts-ignore
          onChange?.(setData, change.fullDocument as T, change.operationType);
        }
      }
    }
  };

  useEffect(() => {
    isLogin && sync();
  }, [isLogin, collection]);
  return { data };
}

export default useSync;
