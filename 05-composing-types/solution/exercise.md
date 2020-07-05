# Exercise: Composing Types - 30min

In this exercise we're going to render our list of pets. A pet can be either a `Dog` or a `Cat`.

1. Create a `Pet` type and use that in the `PetListProps` interface.

2. Inside our `PetList` component, map over the `pets` prop and render either the `Cat` or `Dog` component based the type of pet you're currently iterating over. Remember the example from the lesson notes:

```ts
const getEntityName = (entity: Entity) => {
  if ('name' in entity) {
    return entity.name
  } else {
    return entity.legalName
  }
}
```
