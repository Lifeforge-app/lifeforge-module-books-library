import { Fragment } from 'react'

import { usePromiseLoading } from '@lifeforge/api'
import { Button, Card, Flex, Image, Text, surface } from '@lifeforge/ui'

import { MetaItem, Separator } from '@/components/MetaItem'
import { forgeAPI } from '@/manifest'

import { type BookSearchResult, PROVIDERS } from '../providers'

function SearchResultItem({
  data,
  isAdded,
  onAdd
}: {
  data: BookSearchResult
  isAdded: boolean
  onAdd: (result: BookSearchResult) => Promise<void>
}) {
  const [loading, handleAdd] = usePromiseLoading(() => onAdd(data))

  const providerLabel = PROVIDERS.find(item => item.value === data.source)?.text

  const coverSrc = data.coverUrl
    ? data.source === 'douban'
      ? forgeAPI.providers.douban.cover.input({
          url: data.coverUrl.replace('/l/', '/m/')
        }).endpoint
      : data.coverUrl
    : ''

  const metaItems: {
    key: string
    icon: string
    label: React.ReactNode
  }[] = [
    data.year !== 0 && {
      key: 'year',
      icon: 'tabler:clock',
      label: data.year
    },
    data.publisher !== '' && {
      key: 'publisher',
      icon: 'tabler:building',
      label: data.publisher
    },
    data.isbn !== '' && {
      key: 'isbn',
      icon: 'tabler:barcode',
      label: `ISBN: ${data.isbn}`
    }
  ].filter((meta): meta is Exclude<typeof meta, false> => Boolean(meta))

  return (
    <Card bg={surface.light} direction={{ base: 'column', sm: 'row' }} gap="md">
      <Image
        alt=""
        bg={{ base: 'bg-200', dark: 'bg-800' }}
        fallback="tabler:book"
        fit="cover"
        flexShrink="0"
        height="11rem"
        r="md"
        src={coverSrc}
        style={{ isolation: 'isolate' }}
        width="7rem"
      />
      <Flex direction="column" flex="1" minWidth="0">
        <Text color="muted">{providerLabel}</Text>
        <Text as="h1" lineClamp={2} mt="xs" size="xl" weight="semibold">
          {data.title}
        </Text>
        {data.authors !== '' && (
          <Text color="custom-500" lineClamp={2} mt="xs">
            {data.authors}
          </Text>
        )}
        <Flex
          align="center"
          gap="xs"
          minWidth="0"
          mt="md"
          width="100%"
          wrap="wrap"
        >
          {metaItems.map((item, index) => (
            <Fragment key={item.key}>
              <MetaItem icon={item.icon}>{item.label}</MetaItem>
              {index !== metaItems.length - 1 && <Separator />}
            </Fragment>
          ))}
        </Flex>
        <Flex align="end" flex="1">
          <Button
            disabled={isAdded || loading}
            icon={isAdded ? 'tabler:check' : 'tabler:plus'}
            loading={loading}
            mt="md"
            variant={isAdded ? 'plain' : 'primary'}
            width="100%"
            onClick={handleAdd}
          >
            {isAdded ? 'Already in Library' : 'Add to Library'}
          </Button>
        </Flex>
      </Flex>
    </Card>
  )
}

export default SearchResultItem
