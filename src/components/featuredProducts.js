import React, { useEffect, useState } from "react"
import styled from "styled-components"
import weed from "../images/weed-background.jpg"
import axios from "axios"

const ScrollingWrapper = styled.div`
  padding-top: 80px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`

const ProductCardContent = styled.div`
  margin: 10px;
  display: inline-grid;
  grid-template-rows: 200px 100px;
`

const ProductCardImg = styled.img`
  max-height: 200px;
`

const ProductCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 20px 0;
`

const ProductCard = () => (
  <ProductCardContent>
    <ProductCardImg src={weed} />
    <ProductCardTextWrapper>
      <h3>Weed</h3>
      <p>$25.00</p>
    </ProductCardTextWrapper>
  </ProductCardContent>
)

const FeaturedProducts = () => {
  // const [products, setProducts] = useState([])

  // const config = {
  //   headers: {
  //     Referrer: "https://sacramentoconfidential.webjoint.com",
  //   },
  // }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       "https://app.webjoint.com/prod/api/products/active?facilityId=51",
  //       config
  //     )
  //     console.log(result)
  //     setProducts(result.data)
  //   }
  //   fetchData()
  // }, [])

  return (
    <ScrollingWrapper>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ScrollingWrapper>
  )
}

export default FeaturedProducts
