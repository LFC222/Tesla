import React from 'react'
import Section from '../Section'
import 
{
  Container,
} from './styles'

function Home() {
  return (
    <Container>
        <Section
          title = "Model S"
          description= "Order Online or Touchless Delivery"
          backgroundImg = "model-s.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory"
        />
        <Section 
          title = "Model Y"
          description= "Order Online or Touchless Delivery"
          backgroundImg = "model-y.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory"
        />
        <Section 
          title = "Model X"
          description= "Order Online or Touchless Delivery"
          backgroundImg = "model-x.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory"
        />
        <Section 
          title = "Model 3"
          description= "Order Online or Touchless Delivery"
          backgroundImg = "model-3.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory"
        />
        <Section
          title = "Lowest Cost Solar Panels in America"
          description = "Money-back guarantee"
          backgroundImg = "solar-panel.jpg"
          leftBtnText = "Order Now"
          rightBtnText = "Learn more"
        />
        <Section
          title = "Solar for New Roofs"
          description = "Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg = "solar-roof.jpg"
          leftBtnText = "Order Now"
          rightBtnText = "Learn more"
        />
        <Section
          title = "Accessories"
          description = ""
          backgroundImg = "accessories.jpg"
          leftBtnText = "Shop Now"
        />
    </Container>
  )
}

export default Home