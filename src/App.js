import React from 'react'
import Post from './Components/Posts'
import profilePic from './images/animatedpic.jpeg'
import batmanImage from './images/batman.jpg'
import hulkImage from './images/hulk.jpg'
import ironmanImage from './images/ironman.jpg'
import madaraImage from './images/madara.jpg'
import narutoImage from './images/naruto.jpg'
import spidermanImage from './images/spiderman.jpg'


const App = () => {
  return (
    <div>
      <Post userName={'Rishabh Shukla'}
       mainDialogue = {'I am Vengence'}
       profilePic = {profilePic}
       superheroImage = {batmanImage}
       superheroMsg={'The Dark Knight Rises'}
       liked={'10000'}
       comments={'800'}
       
       />
      <Post userName={'Rishabh Shukla'}
       mainDialogue = {'Hulk Smash'}
       profilePic = {profilePic}
       superheroImage = {hulkImage}
       superheroMsg={'The Green Monster'}
       liked={'10000'}
       comments={'800'}
       
       />
      <Post userName={'Rishabh Shukla'}
       mainDialogue = {'I am Ironman'}
       profilePic = {profilePic}
       superheroImage = {ironmanImage}
       superheroMsg={'Genius'}
       liked={'10000'}
       comments={'800'}
       
       />
      <Post userName={'Rishabh Shukla'}
       mainDialogue = {'Wake Up To Reality'}
       profilePic = {profilePic}
       superheroImage = {madaraImage}
       superheroMsg={"I'm Ghost of the Uchihha"}
       liked={'10000'}
       comments={'800'}
       
       />
      <Post userName={'Rishabh Shukla'}
       mainDialogue = {'I Will Become Hokage'}
       profilePic = {profilePic}
       superheroImage = {narutoImage}
       superheroMsg={'Dattebayo'}
       liked={'10000'}
       comments={'800'}
       
       />
      <Post userName={'Rishabh Shukla'}
       mainDialogue = {'With Great Powers Come Great Responsibiliteis'}
       profilePic = {profilePic}
       superheroImage = {spidermanImage}
       superheroMsg={'Teenage SuperHero'}
       liked={'10000'}
       comments={'800'}
       
       />
    </div>
  )
}

export default App
