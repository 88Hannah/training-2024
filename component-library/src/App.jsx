import Badge from "./components/Badge/Badge"


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


    </>
  )
}


