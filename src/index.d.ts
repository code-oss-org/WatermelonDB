declare module '@code-oss-org/watermelondb' {
  import * as Q from '@code-oss-org/watermelondb/QueryDescription'
  import Database from '@code-oss-org/watermelondb/Database'

  export { default as Collection } from '@code-oss-org/watermelondb/Collection'
  // export { default as Database } from '@code-oss-org/watermelondb/Database'
  export { default as CollectionMap } from '@code-oss-org/watermelondb/Database/CollectionMap'
  export { default as Relation } from '@code-oss-org/watermelondb/Relation'
  export { default as Model, associations } from '@code-oss-org/watermelondb/Model'
  export { default as Query } from '@code-oss-org/watermelondb/Query'
  export { tableName, columnName, appSchema, tableSchema } from '@code-oss-org/watermelondb/Schema'

  export { DatabaseAdapter } from '@code-oss-org/watermelondb/adapters/type'
  export { RawRecord, DirtyRaw } from '@code-oss-org/watermelondb/RawRecord'
  export { RecordId } from '@code-oss-org/watermelondb/Model'
  export {
    TableName,
    ColumnName,
    ColumnType,
    ColumnSchema,
    TableSchema,
    AppSchema,
  } from '@code-oss-org/watermelondb/Schema'

  export { Q, Database }
}
