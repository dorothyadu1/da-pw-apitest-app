import { test as setup, expect } from '@playwright/test';


setup('create new article', async({request}) => {
    const articleResonse = await request.post('https://api.realworld.io/api/articles/', {
    data: {
      "article":{"title":"Likes test article title","description":"This is what the article is about","body":"This is a markdown description of the article.","tagList":[]}
    }
  })
  expect(articleResonse.status()).toEqual(201)
  const response = await articleResonse.json()
  const slugID = response.article.slug
  process.env['SLUGID'] = slugID
})