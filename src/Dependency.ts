import { DependencyInterface } from './DependencyInterface'

export class Dependency implements DependencyInterface {
  methodOne(): string {
    return 'Hello World'
  }

  methodTwo(): boolean {
    return false
  }
}
