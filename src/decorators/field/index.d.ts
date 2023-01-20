declare module '@code-oss-org/watermelondb/decorators/field' {
  import { ColumnName } from '@code-oss-org/watermelondb'

  const field: (columnName: ColumnName) => PropertyDecorator
  export default field
}
