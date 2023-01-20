declare module '@code-oss-org/watermelondb/decorators/date' {
  import { ColumnName } from '@code-oss-org/watermelondb'

  const date: (columnName: ColumnName) => PropertyDecorator
  export default date
}
