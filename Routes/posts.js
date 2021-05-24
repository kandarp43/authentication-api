const router = require('express').Router()
const verify = require('./verifyToken')

router.get('/', (req, res) => {
  res.json({
    posts: {
      title: 'public post',
      description: 'anyone can see this post',
    },
  })
})

router.get('/private', verify, (req, res) => {
  res.json({
    posts: {
      title: 'private post',
      description: 'only logged in users can see this post',
    },
  })
})

module.exports = router
