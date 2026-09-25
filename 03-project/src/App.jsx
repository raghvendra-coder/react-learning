import React from "react";
import Section1 from "./Components/section-1/Section1";
import Section2 from "./Components/section-2/Section2";

const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1681494630816-6711406f51f5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt iste tempora consectetur fugit iure cupiditate!',
      tag: 'Satisfied'
    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1683140908202-a8741a87045a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9mZmljZSUyMHdvcmslMjBwcm9mYWNlbmFsJTIwd29tZW58ZW58MHx8MHx8fDA%3D',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt iste tempora consectetur fugit iure cupiditate!',
      tag: 'underseved'
    },

    {
      img: 'https://images.unsplash.com/photo-1675869940341-d495d49010b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlJTIwd29yayUyMHByb2ZhY2VuYWwlMjBtZW58ZW58MHx8MHx8fDA%3D',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt iste tempora consectetur fugit iure cupiditate!',
      tag: 'Underbanked'
    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1661583687357-f047d7f7b399?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG9mZmljZSUyMHdvcmslMjBwcm9mYWNlbmFsJTIwd29tZW58ZW58MHx8MHx8fDA%3D',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt iste tempora consectetur fugit iure cupiditate!',
      tag: 'Underbanked'

    }


  ]
  return (
      <div> 

      <Section1 users={users} />
      {/* <Section2 /> */}

    </div>
  )
}

export default App