import { DependencyInterface } from './DependencyInterface'

export class Index {
  private dependency: DependencyInterface

  constructor(dependency: DependencyInterface) {
    this.dependency = dependency
  }

  public handler = async (): Promise<string> => {
    return this.dependency.methodOne()
  }
}
