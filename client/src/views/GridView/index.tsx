import type { BooksLibraryEntry } from '@'

import { Grid, Scrollbar } from '@lifeforge/ui'

import EntryItem from './components/EntryItem'

function GridView({ books }: { books: BooksLibraryEntry[] }) {
  return (
    <Scrollbar pb={{ base: '2xl', md: 'none' }}>
      <Grid
        as="ul"
        gap={{ base: 'xs', sm: 'sm' }}
        px={{ base: 'sm', sm: 'md' }}
        templateCols={{
          base: 'repeat(auto-fill,minmax(180px,1fr))',
          sm: 'repeat(auto-fill,minmax(240px,1fr))'
        }}
      >
        {books.map(item => (
          <EntryItem key={item.id} item={item} />
        ))}
      </Grid>
    </Scrollbar>
  )
}

export default GridView
