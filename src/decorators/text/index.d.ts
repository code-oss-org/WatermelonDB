declare module '@code-oss-org/watermelondb/decorators/text' {
  import { ColumnName } from '@code-oss-org/watermelondb'

  const text: (columnName: ColumnName) => PropertyDecorator

  export default text
}
