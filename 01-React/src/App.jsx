// function App(){
//   return 'Hello'
// }

// export default App;


// function App() {
//   return (
//     <div>
//       <h1>Hello React!</h1>
//       <p>Mera pehla React app.</p>
//     </div>
//   );
// }

// export default App;

import Card from './components/card'

function App(){
  return(
    <div className='parent'>
      <Card user = "aman morya" age = {21} img = "https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user = "nitin" age = {20} img  = "https://images.unsplash.com/photo-1728218948405-d749e7d1851e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}
export default App;