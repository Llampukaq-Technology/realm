function useSync(
  collection: Realm.Services.MongoDB.MongoDBCollection<any> | undefined
) {
  const sync = async () => {
    if (collection != undefined) {
      for await (const change of collection?.watch()) {
        //@ts-ignore
        return change.fullDocument as any;
      }
    }
  };
  return { sync };
}

export default useSync;
