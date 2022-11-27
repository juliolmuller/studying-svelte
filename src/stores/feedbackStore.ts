import { writable } from 'svelte/store'
import { v4 as uuid } from 'uuid'

export interface Feedback {
  id: string
  rating: number
  body: string
}

export const FeedbackStore = writable<Feedback[]>([
  {
    id: uuid(),
    rating: 10,
    body: 'Similique qui aspernatur animi quasi voluptatibus dolorem totam. Eligendi illo sunt omnis. Molestiae quidem eveniet animi neque ipsum autem a velit. Doloribus quae ut ipsum dicta qui sunt. Et aliquid in. Quia enim quaerat tempore quae in in.',
  },
  {
    id: uuid(),
    rating: 9,
    body: 'Ea voluptatem repudiandae officia numquam. Quae asperiores totam iusto. Quam eaque minus.',
  },
  {
    id: uuid(),
    rating: 8,
    body: 'Similique repellendus voluptatem nam consequuntur fugiat eaque facere aut tenetur. Veritatis aut inventore unde quod sint et sapiente voluptatem architecto. Molestias voluptatem molestias rerum est voluptas.',
  },
])
