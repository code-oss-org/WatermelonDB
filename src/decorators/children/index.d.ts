declare module '@code-oss-org/watermelondb/decorators/children' {
  import { TableName } from '@code-oss-org/watermelondb'

  const children: (childTable: TableName<any>) => PropertyDecorator
  export default children
}
