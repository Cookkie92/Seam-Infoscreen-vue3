import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

// Serve static files from Vue dist
app.use(express.static(path.join(__dirname, '../client/dist')))

// Fallback to index.html for Vue Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
