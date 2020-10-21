import { Index } from '../src/Index'
import { stubObject } from 'ts-sinon'
import { Dependency } from '../src/Dependency'
import { DependencyInterface } from '../src/DependencyInterface'

describe('@danielhelen/unit-testing-object-orientated-typescript', () => {
  it('returns the string from the stubbed object', async function () {
    const expected = 'test'

    const dependencyStub = stubObject<DependencyInterface>(new Dependency)

    dependencyStub.methodOne.returns(expected)

    const index = new Index(dependencyStub)

    const actual = await index.handler()

    expect(dependencyStub.methodOne.called).toEqual(true)

    expect(actual).toEqual(expected)
  })
})
