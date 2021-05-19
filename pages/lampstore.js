import Head from 'next/head'
import Link from 'next/link'
import { ItemContainer, StoreItems, CartButton } from '../components/ItemContainer/itemcontainer'
import { useCart } from '../config/shoppingcart'
import styled from 'styled-components';


const Cosmic = require('cosmicjs')
const api = Cosmic()

const bucket = api.bucket({
  slug: process.env.BUCKET_SLUG,
  read_key: process.env.READ_KEY
})


function LampStore({ posts }) {
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
                price: post.metadata.price
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
      type: 'lamps'
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
export default LampStore;
