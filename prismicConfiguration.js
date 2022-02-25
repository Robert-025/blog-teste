import Prismic from 'prismic-javascript'

// Prismic API endpoint
export const apiEndpoint = 'https://blog-thpadv.prismic.io/api/v2'

//export const client = Prismic.client(apiEndpoint, {accessToken})
export const client = ( req = null) =>
{
  const options = req ? { req } : null;

  return Prismic.client(apiEndpoint, options)
}

export const linkResolver = (doc) => {
  console.log(doc)
    if (doc) {
    // URL for a category type
    if (doc.type === 'post') {
      return `/${doc.uid}`
    }

  }

  // Backup for all other types
  return '/'
}

export const hrefResolver = (doc) => {
  // URL for a category type
  if (doc.type === 'post') {
    return '/[slug]'
  }

  // Backup for all other types
  return '/'
}