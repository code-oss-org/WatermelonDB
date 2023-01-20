declare module '@code-oss-org/watermelondb/observation/reloadingObserver' {
  import { Model, Query } from '@code-oss-org/watermelondb'
  import { Observable } from 'rxjs'

  export default function reloadingObserver<Record extends Model>(
    query: Query<Record>,
  ): Observable<Record[]>
}
