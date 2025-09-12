import { createTsupConfig } from '../../tsup.config.base'

export default createTsupConfig({
  entry: {
    index: 'src/index.ts',
    types: 'src/types.ts',
    utils: 'src/utils.ts'
  }
})