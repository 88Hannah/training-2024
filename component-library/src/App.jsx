import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import Tooltip from "./components/Tooltip/index";
import { IoBugOutline } from "react-icons/io5";

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

      <section>
        <h2>Tooltips</h2>

        <div>
          <h3>Bold tooltips</h3>

          <p>The first set of tooltips in this component library are the&nbsp;
            <Tooltip
              title='Standard tooltip'
              text='This is the standard tooptip which uses the default colours and icon.'
            >bold
            </Tooltip> 
            
            &nbsp;tooltips.
          </p>

          <p>The colour variations are&nbsp;

            <Tooltip
              icon={<IoBugOutline />}
              color='pink'
              title='Pink and bold'
              text='This tooltip is pink and bold. It is using the bug icon which is entered as a React icon component. This tooltip is pink and bold. It is using the bug icon which is entered as a React icon component.'
            > pink
            </Tooltip>
            
            ,&nbsp;

            <Tooltip
              icon='pizza'
              color='green'
              title='Green and bold'
              text='This green tooltip is making use of the predefined pizza icon.'
            >green
            </Tooltip>
            
            , and&nbsp;

            <Tooltip
              icon='rocket'
              color='blue'
              title='Blue and bold'
              text='Zoooom! Here we are using the rocket icon!'
            >blue
            </Tooltip>
            
          .</p>
        </div>

        <div>
          <h3>Light tooltips</h3>

          <p>The second set of tooltips are&nbsp;
            
            <Tooltip
              icon='accessibility'
              style='light'
              title='Standard light'
              text='This is the standard light tooltip with the accessibility icon.'
            >light
            </Tooltip>
        
          .</p>

          <p>The same colour variations are available:&nbsp;
            
            <Tooltip
              icon='paw'
              color='pink'
              style='light'
              title='Pink and light'
              text='Woof woof! This is the paw icon.'
            > pink
            </Tooltip>
            
            ,&nbsp;

            <Tooltip
              icon='calendar'
              color='green'
              style='light'
              title='Green and light'
              text='Here we have the calendar icon.'
            >green
            </Tooltip>
            
            , and&nbsp;

            <Tooltip
              icon='balloon'
              color='blue'
              style='light'
              title='Blue and light'
              text='This one seems perfect for the balloon icon - floating off into the sky!'
            >blue
            </Tooltip>
          
          .</p>

        </div>

      </section>
    </>
  )
}


