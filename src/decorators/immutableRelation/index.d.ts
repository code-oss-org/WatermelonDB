declare module '@code-oss-org/watermelondb/decorators/immutableRelation' {
  import { ColumnName, TableName } from '@code-oss-org/watermelondb'

  const immutableRelation: (
    relationTable: TableName<any>,
    relationIdColumn: ColumnName,
  ) => PropertyDecorator

  export default immutableRelation
}
