declare module '@code-oss-org/watermelondb/Database/CollectionMap' {
  import { Collection, Database, Model, TableName } from '@code-oss-org/watermelondb'
  import { Class } from '@code-oss-org/watermelondb/utils/common'

  export default class CollectionMap {
    public map: { [tableName: string]: Collection<any> }

    public constructor(database: Database, modelClasses: Array<Class<Model>>)

    public get<T extends Model>(tableName: TableName<T>): Collection<T>
  }
}
