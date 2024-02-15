import React from 'react';
import { IoWarning } from "react-icons/io5";




import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";

export default function App() {


  return (
    <>
      <h1>Component Library</h1>
      
      <section>
        <h2>Badges</h2>
        <div>
          <h3>Square badges</h3>
          <div>
            <Badge style="square" color='pink'>
              Change text
            </Badge>

            <Badge style="square" color='purple'>
              Badge text
            </Badge>

            <Badge style="square" color='indigo'>
              Badge text
            </Badge>

            <Badge style="square" color='blue'>
              Badge text
            </Badge>

            <Badge style="square" color='green'>
              Badge text
            </Badge>

            <Badge style="square" color='yellow'>
              Badge text
            </Badge>

            <Badge style="square" color='red'>
              Badge text
            </Badge>

            <Badge style="square" color='gray'>
              Badge text
            </Badge>

          </div>
        </div>
        <div>
          <h3>Pill badges</h3>
          <div>
            <Badge style="pill" color='pink'>
              Badge text
            </Badge>

            <Badge style="pill" color='purple'>
              Badge text
            </Badge>

            <Badge style="pill" color='indigo'>
              Badge text
            </Badge>

            <Badge style="pill" color='blue'>
              Badge text
            </Badge>

            <Badge style="pill" color='green'>
              Badge text
            </Badge>

            <Badge style="pill" color='yellow'>
              Badge text
            </Badge>

            <Badge style="pill" color='red'>
              Badge text
            </Badge>

            <Badge style="pill" color='gray'>
              Badge text
            </Badge>

          </div>
        </div>
      </section>

      <section>
        <h2>Banners</h2>
        <div>
          <h3>Multi line</h3>
          <div>
            <Banner type='success'>
              <Banner.Title>Congratulations!</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
            </Banner>

            <Banner type='warning'>
              <Banner.Title>Attention</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Text>
            </Banner>

            <Banner type='error'>
              <Banner.Title>There is a problem</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Text>
            </Banner>

            <Banner>
              <Banner.Title>Update available</Banner.Title>
              <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
            </Banner>
          </div>
        </div>

        <div>
          <h3>Single line</h3>
          <div>
            <Banner type='success'>
              <Banner.Title>Congratulations!</Banner.Title>
            </Banner>

            <Banner type='warning'>
              <Banner.Title>Attention</Banner.Title>
            </Banner>

            <Banner type='error'>
              <Banner.Title>There is a problem</Banner.Title>
            </Banner>

            <Banner>
              <Banner.Title>Update available</Banner.Title>
            </Banner>
          </div>
        </div>
      </section>

      <section>
        <h2>Cards</h2>

        <div className="card-display-container">
          <Card>
            <Card.Icon icon='cloud' color='green'></Card.Icon>
            <Card.Title>Easy Deployment</Card.Title>
            <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
          </Card>

          <Card>
            <Card.Icon></Card.Icon>
            <Card.Title>Default Card</Card.Title>
            <Card.Text>This is what happens if you don't give the card a spesific icon</Card.Text>
          </Card>

          <Card>
            <Card.Icon icon='airplane' color='red'></Card.Icon>
            <Card.Title>Travel</Card.Title>
            <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
          </Card>

        </div>
      </section>
    </>
  )
}


