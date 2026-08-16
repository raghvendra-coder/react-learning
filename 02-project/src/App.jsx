import React from "react"
import Card from "./components/Card"

const App = () =>{

const jobsData = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW-Kq9gfty56z8kGjFSbD8c4qkG3HmSul4stGRc3jig&s=10",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://images.icon-icons.com/2699/PNG/512/netflix_logo_icon_170919.png",
    companyName: "Netflix",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    companyName: "Meta",
    datePosted: "1 day ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "6 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/adobe-logo-1.jpg?width=662&height=441&name=adobe-logo-1.jpg",
    companyName: "Adobe",
    datePosted: "4 days ago",
    post: "UI/UX Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$68/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/021/514/722/non_2x/ibm-brand-symbol-software-computer-logo-design-illustration-free-vector.jpg",
    companyName: "IBM",
    datePosted: "1 week ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$50/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://www.vhv.rs/dpng/d/453-4533338_oracle-logo-for-website-new-oracle-logo-png.png",
    companyName: "Oracle",
    datePosted: "2 days ago",
    post: "Cloud Engineer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: "$72/hour",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/500px-Spotify_App_Logo.svg.png?_=20210620075506",
    companyName: "Spotify",
    datePosted: "1 week ago",
    post: "React Native Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$88/hour",
    location: "Remote, India"
  }
];
  return(
    <div className="parent">
      {jobsData.map((elem, idx) => {
        return (
          <div key={idx}>
            <Card
              brandLogo={elem.brandLogo}
              company={elem.companyName}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  )
}
export default App;