import { useEffect } from "react";
import { useIsLogin } from ".";
type op =
  | "insert"
  | "delete"
  | "replace"
  | "update"
  | "drop"
  | "rename"
  | "dropDatabase"
  | "invalidate";
function useSync<T>(
  collection: Realm.Services.MongoDB.MongoDBCollection<any> | undefined,
  operationType: Array<op>,
  onChange?: (fn: op, document: T, operationType?: op) => any
) {
  const { isLogin } = useIsLogin();
  const sync = async () => {
    if (collection != undefined) {
      for await (const change of collection?.watch()) {
        const bo = operationType.includes(change.operationType);
        if (bo) {
          onChange?.(
            change.operationType,
            //@ts-ignore
            change.fullDocument as T,
            change.operationType
          );
          return;
        }
      }
    }
  };
  useEffect(() => {
    isLogin && sync();
  }, [collection, isLogin]);
}

export default useSync;
