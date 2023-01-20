declare module '@code-oss-org/watermelondb/decorators/json' {
  import { ColumnName, Model } from '@code-oss-org/watermelondb'

  type Sanitizer = (source: any, model?: Model) => any

  const json: (rawFieldName: ColumnName, sanitizer: Sanitizer) => PropertyDecorator

  export default json
}
