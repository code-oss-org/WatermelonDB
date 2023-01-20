declare module '@code-oss-org/watermelondb/decorators/relation' {
  import { ColumnName, TableName } from '@code-oss-org/watermelondb'
  import { Options } from '@code-oss-org/watermelondb/Relation'

  const relation: (
    relationTable: TableName<any>,
    relationIdColumn: ColumnName,
    options?: Options,
  ) => PropertyDecorator

  export default relation
}
