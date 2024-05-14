import './CSS/App.css'
import Nav from './nav'
import Card from './card'
import Party from './Party'

function App() {

  return (
    <>
    <div className='header'>
      <Nav/>
    </div>
      <div className='Cards'>
      <Card Name="React" href ="https://react.com" />
      <Card Name="Svelte" href ="https://svelte.dev"/>
      <Card Name="Astro" href ="https://astro.build/"/>
      <Card Name="Angular" href ="https://angular.io/"/>
      <Party />
      </div>

    </>

  )

}

export default App
