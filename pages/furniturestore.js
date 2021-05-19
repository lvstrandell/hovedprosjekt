import Head from 'next/head'
import { ItemContainer, StoreItems, CartButton } from '../components/ItemContainer/itemcontainer'
import { useCart } from '../config/shoppingcart'

const Cosmic = require('cosmicjs')
const api = Cosmic()

const bucket = api.bucket({
  slug: process.env.BUCKET_SLUG,
  read_key: process.env.READ_KEY
})


function FurnitureStore({ posts }) {
  const cart = useCart();


  return (
    <main>
      <Head>
        <title>Cosmic App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ItemContainer>
      {posts.map(post => (
        <StoreItems key={post.slug}>
          <img alt="" src={`${post.metadata.item.imgix_url}`} />      
          <article dangerouslySetInnerHTML={{__html: post.content}} />
          <CartButton 
            onClick={() => {
              cart.addProductLine({
                item: post.slug,
                price: post.metadata.price,
                id: post.slug
              })
            }}
          >Add to Cart</CartButton>
        </StoreItems>
      ))}
      </ItemContainer>
    </main>
  )
}
export async function getStaticProps() {
  const data = await bucket.getObjects({
    query: {
      type: 'furniture'
    },
    props: 'slug,title,content,metadata'
  })
  const posts = await data.objects
  return {
    props: {
      posts
    }
  }
}
export default FurnitureStore;