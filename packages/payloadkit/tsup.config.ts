import { createTsupConfig } from '../../tsup.config.base'

export default createTsupConfig({
  entry: {
    index: 'src/index.ts',
    cli: 'src/cli.ts'
  },
  onSuccess: 'mkdir -p bin && sed "1d" dist/cli.js > temp.js && echo "#!/usr/bin/env node" > bin/index.js && cat temp.js >> bin/index.js && rm temp.js && chmod +x bin/index.js'
})