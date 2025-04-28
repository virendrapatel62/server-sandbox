# dev.sh

#!/bin/bash

# Run both dev commands concurrently using concurrently package
npx concurrently \
  --names "Boilerplate,Stream,Auth" \
  "npm run dev:boilerplate" \
  "npm run dev:stream" \
  "npm run dev:auth"