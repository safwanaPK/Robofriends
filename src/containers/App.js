import React,{ Component}  from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
//import { robots }from './robots';
import'./App.css';
import Scroll from '../components/Scroll';

class  App extends Component { 
  constructor() {
  	super()
	this.state = {
	  robots: [],
    Searchfield:''
	 }

  }


  componentDidMount(){
   	fetch('https://jsonplaceholder.typicode.com/users')
   	.then(response=> response.json())
   	.then(users=> this.setState({ robots:users}));
  
 }
onSearchChange = (event)  => {
   	this.setState({ Searchfield: event. target. value })
   }

	render() {
		   const { robots,Searchfield}=this.state;
       const filteredRobots = robots.filter( robot =>{
        return robot.name.toLowerCase().includes(Searchfield.toLowerCase());
   })
   	return !robots.length?
   	<h1>loading</h1>:
   

	   (
       <div className='tc'>
		 < h1 className='f1'> RoboFriends </h1>

		 <Searchbox SearchChange={ this.onSearchChange} />
		 <Scroll>
		   <CardList robots ={filteredRobots} />
		 </Scroll>
	   </div>
	 );

 }
	  
  }

export default App;