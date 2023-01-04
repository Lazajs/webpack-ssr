import fs from 'fs'

fs.writeFileSync('./.env', `API=${process.env.api}\n`)