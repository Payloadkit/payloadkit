import { CollectionConfig } from 'payload'
import { Users } from '@/collections/Users'
import { Media } from '@/collections/Media'
import { Pages } from '@/collections/Pages'

export const collectionsConfig: CollectionConfig[] = [
  Users,
  Media,
  Pages,
]