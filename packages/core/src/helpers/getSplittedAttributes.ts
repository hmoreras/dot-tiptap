import { AnyObject, ExtensionAttribute } from '../types'

export default function getSplittedAttributes(
  extensionAttributes: ExtensionAttribute[],
  typeName: string,
  attributes: AnyObject,
): AnyObject {
  return Object.fromEntries(Object
    .entries(attributes)
    .filter(([name]) => {
      const extensionAttribute = extensionAttributes.find(item => {
        return item.type === typeName && item.name === name
      })

      if (!extensionAttribute) {
        return false
      }

      return extensionAttribute.attribute.keepOnSplit
    }))
}
